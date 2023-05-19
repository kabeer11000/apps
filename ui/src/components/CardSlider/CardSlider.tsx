import React, { FC } from 'react';
import {Dimensions, ScrollView, View} from "react-native";
import {Box} from "@react-native-material/core";


interface CardSliderProps {}

const CardSlider: FC<CardSliderProps> = () => {
    const width: number = Dimensions.get("window").width / 1.25
    return (
        <View data-testid="CardSlider">
            <ScrollView pagingEnabled snapToAlignment={"center"} contentContainerStyle={{ flexGrow: 1 }} horizontal>
                {[...new Array(4)].map(index => (
                    <Box key={index} w={width} h={200} m={4} style={{backgroundColor: "tomato"}}/>
                ))}
            </ScrollView>
        </View>
    );
}

export default CardSlider;
