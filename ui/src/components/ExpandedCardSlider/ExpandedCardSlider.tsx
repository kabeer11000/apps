import React, { FC } from 'react';
import {Dimensions, ScrollView, View} from "react-native";
import ExpandedCard from "@Components/ExpandedCard/ExpandedCard";


interface ExpandedCardSliderProps {}

const ExpandedCardSlider: FC<ExpandedCardSliderProps> = () => {
    const cardWidth: number = Dimensions.get("window").width / 1.25
    return (
        <View data-testid="CardSlider">
            <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled snapToAlignment={"center"} contentContainerStyle={{ flexGrow: 1 }} horizontal>
                {[...new Array(4)].map(() => (
                    <ExpandedCard cardWidth={cardWidth} key={Math.random()}/>
                ))}
            </ScrollView>
        </View>
    );
};

export default ExpandedCardSlider;
