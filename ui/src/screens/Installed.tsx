import React, {useEffect, useState} from "react";
import {Animated, View} from "react-native";
import {AppBar, Icon, IconButton, Text} from "@react-native-material/core";
import ApplicationListItem from "@Components/DeviceApps/ApplicationListItem";
import {useRouting} from "expo-next-react-navigation";
import Spinner from "@Components/Spinner";
import {Center} from "@Components/Layout/Center";
import {IInstalledApp} from "@Types/InstalledApps";
import * as Application from "expo-application";
import RNInstalledApplication from "react-native-installed-application";

export const InstalledApps = () => {
    // const installedApps = useRecoilValueLoadable(InstalledAppsAtom);
    const router = useRouting();
    const scrollY = new Animated.Value(0);
    const [state, setState] = useState({loading: false, apps: [], error: false});
    useEffect(() => {
        setState(prevState => ({...prevState, loading: true}))
        RNInstalledApplication.getNonSystemApps().then((apps: Array<IInstalledApp>) => apps.filter(({packageName}) => packageName !== Application.applicationId)).then((apps: Array<IInstalledApp>) => setState({
            error: false, loading: false, apps,
        }));
    }, []);
    return (
        <View style={{display: 'flex'}}>
            <AppBar title={'Installed Apps'} style={{
                elevation: Animated.multiply(scrollY, 1.5).interpolate({
                    inputRange: [-1, 0, 200, 200 + 1], outputRange: [0, 0, 5, 5]
                })
            }} contentContainerStyle={{backgroundColor: "white"}}
                    leading={<IconButton onPress={router.goBack} icon={<Icon name={"arrow-back"} size={24}/>}/>}/>
            <Animated.ScrollView contentContainerStyle={{flexGrow: 1, height: '100%', paddingBottom: 50}}
                                 onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {useNativeDriver: false})}
                                 scrollEventThrottle={500}>

                {state.loading && <Spinner size={"large"}/>}
                {(!state.loading && !state.error && state.apps) && (state.apps.length ? state.apps.map((app) =>
                    <ApplicationListItem
                        name={app.appName}
                        id={app.package}
                        key={Math.random()}
                        icon={`data:image/png;base64,${app.icon}`}
                        secondary={`${app.versionName} ${app.versionCode}`}/>) : (
                    <Center>
                        <Icon size={50} name={'inbox'}/>
                        <Text style={{marginTop: 20}} variant={"body1"}>
                            No external apps installed
                        </Text>
                    </Center>
                ))}
                {state.error && (
                    <Center>
                        <Icon size={50} name={'error'}/>
                        <Text style={{marginTop: 20}} color={"red"}
                              variant={"body1"}>Error loading apps</Text>
                    </Center>
                )}
            </Animated.ScrollView>
        </View>
    )
}