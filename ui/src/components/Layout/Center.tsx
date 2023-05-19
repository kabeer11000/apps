import React from "react"
import {View} from "react-native";
export const Center = ({children}: {children: React.ReactNode}) => (
    <View style={{display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', }}>{children}</View>
)