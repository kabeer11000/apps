import React, {FC} from 'react';
import {Image} from "react-native";
import {ListItem} from "@react-native-material/core";
import {useRouting} from "expo-next-react-navigation";


interface ApplicationListItemProps {
    title: string,
    icon: string,
    secondary?: string,
    overline: string,
    id: string
}

const ApplicationListItem: FC<ApplicationListItemProps> = ({title, secondary, icon, overline, id}) => {
    const router = useRouting();
    return (
        <ListItem
            onPress={() => router.navigate({
                routeName: "package", params: {id: id}
            })}
            leadingMode="avatar"
            overline={overline}
            leading={
                <Image style={{width: 50, height: 50, backgroundColor: "#fafafa", borderRadius: 5, padding: 0}}
                       source={{uri: icon}}/>
            }
            title={title}
            secondaryText={secondary}
        />
    );
}

export default ApplicationListItem;
