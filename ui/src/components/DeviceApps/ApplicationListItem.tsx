import React, {FC} from 'react';
import {Image} from "react-native";
import {Button, ListItem} from "@react-native-material/core";


interface ApplicationListItemProps {
    name: string,
    icon: string,
    secondary: string
}

const ApplicationListItem: FC<ApplicationListItemProps> = ({name, icon, secondary}) => (
    <ListItem
        leadingMode="avatar"
        leading={
            <Image style={{width: 50, height: 50, backgroundColor: "#fafafa", borderRadius: 5, padding: 0}}
                   source={{uri: icon}}/>
        }
        title={name}
        secondaryText={secondary}
        trailing={
            // TODO Add app opening support to native code
            <Button title={"Open"} variant={"outlined"} color={"#000"} style={{width: 80, marginRight: 60}}/>
        }
    />
);

export default ApplicationListItem;
