import React from "react"
import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function SafeAreaViewHOC({children}) {
    return () => (
        <View style={{flex: 1}}><SafeAreaView>{children}</SafeAreaView></View>
    )
}