import {Animated, Dimensions, Image, ScrollView, View} from "react-native";
import React, {Fragment, useCallback, useEffect, useState} from "react";
import {useRouting} from "expo-next-react-navigation";
import {SafeAreaView} from "react-native-safe-area-context";
import {
    ActivityIndicator,
    AppBar,
    Button,
    Dialog,
    DialogHeader,
    Divider,
    HStack,
    Icon,
    IconButton,
    ListItem,
    Pressable,
    Spacer,
    Surface,
    Text,
    VStack,
} from "@react-native-material/core";
import * as WebBrowser from "expo-web-browser";
import {Center} from "@Components/Layout/Center";
import WebView from "react-native-autoheight-webview";
import SimilarApps from "@Components/SimilarApps/SimilarApps";
// @ts-ignore
// import RNAndroidInstalledApps from '@kabeersnetwork/react-native-android-installed-apps';
// const DisqusContent = require("../../assets/disqus-webview/index.html")

export interface ApplicationProps {
}

function nFormatter(num, digits) {
    const lookup = [
        {value: 1, symbol: ""},
        {value: 1e3, symbol: "k"},
        {value: 1e6, symbol: "M"},
        {value: 1e9, symbol: "G"},
        {value: 1e12, symbol: "T"},
        {value: 1e15, symbol: "P"},
        {value: 1e18, symbol: "E"},
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
        .slice()
        .reverse()
        .find(function (item) {
            return num >= item.value;
        });
    return item
        ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
        : "0";
}

const TruncatedText = ({
                           text,
                           textProps,
                       }: {
    text: string;
    textProps: object;
}) => {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => {
        //To toggle the show text or hide it
        setTextShown(!textShown);
    };

    const onTextLayout = useCallback((e) => {
        setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
        // console.log(e.nativeEvent);
    }, []);

    return (
        <Fragment>
            <Text
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 4}
                style={{lineHeight: 21}}
                {...textProps}
            >
                {text}
            </Text>
            {lengthMore ? (
                <Text
                    onPress={toggleNumberOfLines}
                    style={{lineHeight: 21, marginTop: 10}}
                >
                    {textShown ? "Read less..." : "Read more..."}
                </Text>
            ) : null}
        </Fragment>
    );
};
const velocity = 1;
export const Application = ({}: ApplicationProps) => {
    const {getParam, goBack} = useRouting();
    const id = getParam("id");
    const [state, setState] = useState<{
        response: null | {
            app: { icon: string; [x: string]: any };
            permissions: { perms: { [x: string]: string }; [x: string]: any };
        };
        error: boolean;
        loading: boolean;
    }>({
        response: null,
        error: false,
        loading: false,
    });
    const [permsDialog, setPermsDialog] = useState(false);
    const scrollY = new Animated.Value(0);
    useEffect(() => {
        setState({...state, loading: true});
        fetch(
            "https://kabeers-papers-pdf2image.000webhostapp.com/kabeer-chats-storage/tests/appstore/deployment/api/src/app/" +
            id +
            "?cache="
        )
            .then((res) => (res.ok ? res.json() : null))
            .then((response) => {
                setState({...state, response, error: !response, loading: false});
            })
            .catch(() => setState({...state, error: true, response: null, loading: false}));
        // RNInstalledApplication.getApps().then(console.log);
        // (RNInstalledApplication.getApps().then(a => console.log(a.map(({appName}) => appName))));
    }, []);
    useEffect(() => {
        // InstalledApplications.getState().then(({update}) => update())
    }, [state.response]);
    return (
        <SafeAreaView>
            <View
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                }}>
                <AppBar
                    leading={
                        <IconButton
                            onPress={goBack}
                            icon={<Icon name={"arrow-back"} size={24}/>}
                        />
                    }
                    contentContainerStyle={{backgroundColor: "white", width: "100%"}}
                    style={{
                        height:
                            state.response?.app?.poster && !state.loading && !state.error
                                ? Animated.multiply(scrollY, velocity).interpolate({
                                    inputRange: [-1, 0, 200, 200 + 1],
                                    outputRange: [0, 0, 55, 55],
                                })
                                : state.loading
                                    ? 0
                                    : undefined,
                        elevation: Animated.multiply(scrollY, velocity).interpolate({
                            inputRange: [-1, 0, 200, 200 + 1],
                            outputRange: [0, 0, 5, 5],
                        }),
                        position: "absolute",
                        width: Dimensions.get("window").width,
                        transform: state.response?.app?.poster
                            ? [
                                {
                                    translateY: Animated.multiply(
                                        scrollY,
                                        velocity
                                    ).interpolate({
                                        inputRange: [-1, 0, 200, 200 + 1],
                                        outputRange: [-55, -55, 0, 0],
                                    }),
                                },
                            ]
                            : [],
                    }}
                    title={
                        <Text variant={"h6"} numberOfLines={1} ellipsizeMode={"tail"}>
                            {state.response ? state.response.app.name : state.error ? "" : id}
                        </Text>
                    }
                    trailing={
                        state.response &&
                        !state.error &&
                        !state.loading && (
                            <Button
                                style={{marginRight: 5}}
                                variant={"outlined"}
                                title={"install"}
                            />
                        )
                    }
                />
                {state.loading && !state.error && (
                    <View style={{height: "100%", marginTop: -40, width: "100%"}}>
                        <Center>
                            <ActivityIndicator size={"large"}/>
                        </Center>
                    </View>
                )}
                {!state.loading && state.error && (
                    <Center>
                        <Icon size={50} color={"red"} name={"error"}/>
                        <Text style={{marginTop: 20}} color={"red"} variant={"body1"}>
                            Error loading app
                        </Text>
                    </Center>
                )}
                {!state.loading && !state.error && state.response && (
                    <Fragment>
                        <Animated.ScrollView
                            contentContainerStyle={{
                                flexGrow: 1,
                                // marginTop: state.response.app.poster ? 0 : 50,
                            }}
                            scrollEventThrottle={1}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                                {useNativeDriver: false}
                            )}>
                            {state.response.app.poster && (
                                <Fragment>
                                    <Image
                                        source={{uri: state.response.app.poster}}
                                        style={{width: "100%", height: 200}}
                                    />
                                    <View
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            flex: 1,
                                            height: "100%",
                                            justifyContent: "flex-start",
                                            bottom: 0,
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            paddingHorizontal: 10,
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            paddingVertical: 10,
                                        }}
                                    />
                                    <View
                                        style={{position: "absolute", width: "100%", padding: 5}}>
                                        <IconButton
                                            onPress={goBack}
                                            icon={
                                                <Icon
                                                    color={"background"}
                                                    name={"arrow-back"}
                                                    size={24}
                                                />
                                            }
                                        />
                                    </View>
                                </Fragment>
                            )}
                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            translateY: Animated.multiply(
                                                scrollY,
                                                velocity - 0.8
                                            ).interpolate({
                                                inputRange: [-1, 0, 200, 200 + 1],
                                                outputRange: [0, 0, -200, -200],
                                            }),
                                        },
                                    ],
                                }}>
                                <Surface>
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            margin: 10,
                                        }}>
                                        <Surface
                                            elevation={2}
                                            style={{borderRadius: 10, overflow: "hidden"}}>
                                            <Image
                                                style={{
                                                    height: Dimensions.get("window").width / 7,
                                                    width: Dimensions.get("window").width / 7,
                                                }}
                                                source={{uri: state.response.app.icon}}
                                            />
                                        </Surface>
                                        <VStack style={{marginLeft: 10}}>
                                            <Text variant={"h6"}>{state.response.app.name}</Text>
                                            <Text color={"grey"} variant={"body2"}>
                                                {state.response.app.developer}
                                            </Text>
                                        </VStack>
                                        <Spacer/>
                                    </View>
                                    <HStack spacing={10} style={{padding: 10}}>
                                        <Button
                                            variant={"outlined"}
                                            style={{flex: 1}}
                                            title={"uninstall"}
                                        />
                                        <Button
                                            style={{flex: 1}}
                                            titleStyle={{color: "white"}}
                                            title={"open"}
                                        />
                                        {/*<Button style={{flex: 1}} titleStyle={{color: "white"}} title={"install"}/>*/}
                                    </HStack>
                                    <View style={styles.appSection}>
                                        <Text variant={"body2"}>{state.response.app.summary}</Text>
                                    </View>
                                    <View
                                        style={{
                                            ...styles.appSection,
                                            display: "flex",
                                            flexDirection: "row",
                                            width: "100%",
                                            justifyContent: "space-between",
                                        }}>
                                        <View
                                            style={{
                                                display: "flex",
                                                // backgroundColor: "red",
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }}>
                                            <Image
                                                style={{height: 20, margin: 5, width: 20}}
                                                source={{
                                                    uri: "https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=w96-h32-rw",
                                                }}
                                            />
                                            <Text variant={"subtitle2"}>
                                                {state.response.app.age}
                                            </Text>
                                        </View>
                                        <View>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-evenly",
                                                    alignItems: "center",
                                                }}>
                                                <Text style={{marginLeft: 10}} variant={"button"}>
                                                    {Math.round(
                                                        parseFloat(state.response.app.rating) * 10
                                                    ) / 10}
                                                </Text>
                                                <Icon name={"star"} size={20}/>
                                            </View>
                                            <Text variant={"caption"}>
                                                {nFormatter(parseInt(state.response.app.votes))} Reviews
                                            </Text>
                                        </View>
                                        <View>
                                            <Text variant={"button"}>
                                                {state.response.app.installs}
                                            </Text>
                                            <Text variant={"caption"}>Installs</Text>
                                        </View>
                                    </View>
                                    <ScrollView
                                        horizontal
                                        pagingEnabled
                                        snapToAlignment={"center"}
                                        contentContainerStyle={{
                                            justifyContent: "space-between",
                                            marginVertical: 10,
                                        }}>
                                        <HStack spacing={10} style={{padding: 10}}>
                                            {state.response.app.images.map((image: string) => (
                                                <Surface
                                                    key={image}
                                                    style={{borderRadius: 10, overflow: "hidden"}}
                                                    elevation={5}>
                                                    <Pressable
                                                        onPress={() => WebBrowser.openBrowserAsync(image)}>
                                                        <Image
                                                            source={{uri: image}}
                                                            style={{
                                                                width: Dimensions.get("window").width / 2,
                                                                height: Dimensions.get("window").height / 2,
                                                            }}
                                                        />
                                                    </Pressable>
                                                </Surface>
                                            ))}
                                        </HStack>
                                    </ScrollView>

                                    {/*<Divider/>*/}
                                    <View style={styles.appSection}>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                width: "100%",
                                                justifyContent: "space-between",
                                            }}>
                                            <Text variant={"h5"} style={{paddingVertical: 10}}>
                                                Description
                                            </Text>
                                        </View>
                                        <TruncatedText
                                            textProps={{variant: "body2"}}
                                            text={state.response.app.description
                                                .replace("<br/>", "\n")
                                                .replace(/<\/?[^>]+(>|$)/g, "")}
                                        />
                                    </View>
                                    <View style={styles.appSection}>
                                        <Pressable onPress={() => setPermsDialog(true)}>
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    width: "100%",
                                                    justifyContent: "space-between",
                                                }}>
                                                <Text variant={"h5"} style={{paddingVertical: 10}}>
                                                    Permissions
                                                </Text>
                                                <IconButton
                                                    icon={<Icon name={"arrow-forward"} size={24}/>}
                                                />
                                            </View>
                                            <Text variant={"body2"}>
                                                {Object.values(state.response.permissions.grouped)
                                                    .map(
                                                        (group: { group_name: string }) => group.group_name
                                                    )
                                                    .join(", ")}
                                            </Text>
                                        </Pressable>
                                    </View>
                                    <View style={{height: 20}}/>
                                    <View>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                width: "100%",
                                                ...styles.appSection,
                                                justifyContent: "space-between",
                                            }}>
                                            <Text variant={"h5"} style={{paddingVertical: 10}}>
                                                Similar Apps
                                            </Text>
                                            <IconButton
                                                icon={<Icon name={"arrow-forward"} size={24}/>}
                                            />
                                        </View>
                                        <SimilarApps id={id}/>
                                    </View>
                                    <Divider/>
                                    {/*<Text>{DisqusContent[0].localUri}</Text>*/}
                                    <WebView
                                        allowFileAccessFromFileURLs={true}
                                        allowUniversalAccessFromFileURLs={true}
                                        allowingReadAccessToURL={true}
                                        allowFileAccess={true}
                                        originWhitelist={["*"]}
                                        containerStyle={{padding: 10}}
                                        style={{width: "100%"}}
                                        pullToRefreshEnabled={false}
                                        androidHardwareAccelerationDisabled={true}
                                        automaticallyAdjustContentInsets={true}
                                        androidLayerType={"software"}
                                        source={{
                                            // html: html,
                                            uri:
                                                "https://docs.cloud.kabeers.network/tests/appstore/comments/index.html" +
                                                `?id=${id}`,
                                            // uri: DisqusContent?.[0]?.localUri || '' // "file:///data/user/0/com.kabeersnetwork.appstore.android/cache/ExponentAsset-075f21522b532ab1fba0de04762dd336.html?id=com.facebook.katana"
                                            //`${DisqusContent?.[0]?.localUri ?? ''}?id=${id}`
                                        }}
                                    />
                                    {/*<Box h={1000}/>*/}
                                </Surface>
                            </Animated.View>
                        </Animated.ScrollView>
                        <Dialog
                            visible={permsDialog}
                            onDismiss={() => setPermsDialog(false)}>
                            <View style={{height: "80%"}}>
                                <DialogHeader title="All Permissions"/>
                                <View>
                                    <ScrollView>
                                        {Object.values(state.response.permissions.perms).map(
                                            (title: string) => (
                                                <ListItem
                                                    key={title}
                                                    title={`${title
                                                        .slice(0, 1)
                                                        .toUpperCase()}${title.slice(1)}`}
                                                />
                                            )
                                        )}
                                    </ScrollView>
                                </View>
                            </View>
                        </Dialog>
                    </Fragment>
                )}
            </View>
        </SafeAreaView>
    );
};
const styles = {
    appSection: {
        padding: 10,
    },
};
