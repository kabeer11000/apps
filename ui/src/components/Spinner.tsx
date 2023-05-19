import React from "react";
import {View} from "react-native";
import {ActivityIndicator, ActivityIndicatorProps} from "@react-native-material/core";

export default function Spinner(props: JSX.IntrinsicAttributes & ActivityIndicatorProps) {
    return (
        <View style={{display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', flexDirection: 'row'}}><ActivityIndicator {...props}/></View>
    )
}