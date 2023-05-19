import React, {FC} from 'react';
import {Box, Pressable, Surface, Text} from "@react-native-material/core";
import {Dimensions, Image, View} from "react-native";
import {nameGenerator} from "@Utilities/nameGenerator";
import {useRouting} from 'expo-next-react-navigation'

interface ExpandedCardProps {
    cardWidth: number
}

const ExpandedCard: FC<ExpandedCardProps> = ({cardWidth}) => {
    const router = useRouting();
    return (
        <Surface
            style={{margin: 5, borderRadius: 10, position: "relative", overflow: 'hidden'}} elevation={2}>
            <Box w={cardWidth ?? Dimensions.get("window").width / 3} maxW={500} h={Dimensions.get("window").height / 4}
                 style={{backgroundColor: "lightgrey"}}>
                <Image style={{flex: 1}} source={{uri: "https://play-lh.googleusercontent.com/fuFjhFOHd4XR-jVwD1E3ZPc_vv8gyI0MBj0a-yRC4ubPD3-oreJr6SrOwNdWjN7lXpQ=w526-h296-rw"}}/>
            </Box>
            <View style={{
                position: "absolute",
                width: "100%",
                bottom: 0,
                paddingHorizontal: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                paddingVertical: 10
            }}>
                <Text color={"surface"} variant={"button"}>{nameGenerator.haikunate({
                    tokenLength: 0,
                    delimiter: " "
                })}</Text>
                <Text color={"lightgrey"} variant={"subtitle2"}>{nameGenerator.haikunate({
                    tokenLength: 0,
                    delimiter: " "
                })}</Text>
            </View>
            <Pressable onPress={() => router.navigate({
                routeName: "package", params: {id: "com.facebook.katana"}
            })} style={{position: "absolute", width: "100%", height: "100%"}}/>
        </Surface>
    );
}

export default ExpandedCard;
