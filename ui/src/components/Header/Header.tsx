import React, {FC} from 'react';
import {AppBar, Icon, IconButton, Text} from "@react-native-material/core";
import {View, ViewStyle} from 'react-native';
import {useRecoilValue} from "recoil";
import {HeaderAtom} from "../../recoil";
import FadePanel from "@Components/Fade";
import {useRouting} from "expo-next-react-navigation";

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
    // const [state, setState] = useRecoilState(SearchState);
    const {elevated, headingHidden} = useRecoilValue(HeaderAtom);
    const router = useRouting();
    return (
        <AppBar elevation={elevated ? 5 : 0} contentContainerStyle={{
            backgroundColor: "white"
        }} title={<FadePanel visible={headingHidden}><Text
            variant={"h6"}>{!headingHidden ? "" : "Apps"}</Text></FadePanel>}
                trailing={<View style={{display: "flex", flexDirection: "row"}}><IconButton
                    onPress={() => router.navigate({
                        routeName: "installed"
                    })} icon={<Icon name={"get-app"} size={24}/>}/><IconButton
                    icon={<Icon name={"search"} size={24}/>}/></View>}/>
    );
}
//  borderStyle: "solid", borderWidth: 1, borderColor: "black",
const styles: ViewStyle = {
    position: "absolute",
    width: "100%",
    zIndex: 5,
    backgroundColor: "transparent"
}
export default Header;
