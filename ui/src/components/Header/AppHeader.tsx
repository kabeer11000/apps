import React, {FC, useEffect, useRef, useState} from 'react';
import {AppBar, Icon, IconButton, Text} from "@react-native-material/core";
import {Animated, ViewStyle} from 'react-native';
import {useRecoilState, useRecoilValue} from "recoil";
import {HeaderAtom, SearchState} from "../../recoil";
import FadePanel from "@Components/Fade";

interface HeaderProps {
    title?: string
}

const AppHeader: FC<HeaderProps> = ({title}) => {
    const {elevated, headingHidden} = useRecoilValue(HeaderAtom);
    return (
        <AppBar elevation={elevated ? 5 : 0} contentContainerStyle={{
            backgroundColor: "white", width: "100%"
        }} title={<FadePanel visible={headingHidden}><Text variant={"h6"}>{!headingHidden ? "" : title}</Text></FadePanel>}
                trailing={<IconButton icon={<Icon name={"search"} size={24}/>}/>}/>
    );
}
//  borderStyle: "solid", borderWidth: 1, borderColor: "black",
const styles: ViewStyle = {
    position: "absolute",
    width: "100%",
    zIndex: 5,
    backgroundColor: "transparent"
}
export default AppHeader;
