import {Animated} from "react-native";
import React from "react";

type Props = {
    children: React.ReactNode;
    visible: boolean;
};

export default function FadePanel({children, visible}:Props){
    // @ts-ignore
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        if (visible) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }).start();
        } else if (!visible) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);
    return (
        <Animated.View
            style={{
                opacity:fadeAnim
            }}
        >
            {children}
        </Animated.View>
    )
}