import {ScrollView, View} from "react-native";
import Header from "@Components/Header/Header";
import Featured from "@Components/Featured/Featured.lazy";
import Apps from "@Components/Apps/Apps";
import React, {useCallback} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {HeaderAtom} from "../recoil";
import {Text} from "@react-native-material/core";

export default function Home() {
    const setHeaderAtom = useSetRecoilState(HeaderAtom);
    const elevateHeader = useCallback((event: any) => {
        const positionY: number = event.nativeEvent.contentOffset.y;
        setHeaderAtom(props => ({...props, headingHidden: (positionY >= 80) ?? false, elevated: (positionY >= 10) ?? false}));
    }, []);
    return (
        <View style={{overflow: "hidden"}}>
            <Header/>
            <ScrollView onScroll={elevateHeader} scrollEventThrottle={500} contentContainerStyle={{flexGrow: 1}}>
                <View style={{paddingHorizontal: 10, marginBottom: 20}}>
                    <Text variant={"h3"}>Apps</Text>
                    <Text color={"grey"} variant={"subtitle2"}> Top apps and games today </Text>
                </View>
                <Featured/>
                <Apps/>
                <View style={{flex: 1}}/>
            </ScrollView>
        </View>
    )
}