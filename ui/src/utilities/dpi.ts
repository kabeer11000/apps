import {PixelRatio} from "react-native";

export const ScreenDPI = () => {
    const ratio = PixelRatio.get();
    switch (ratio) {
        case 1:
            return 'mdpi'
        case 1.5:
            return 'hdpi'
        case 2:
            return 'xhdpi'
        case 3:
            return 'xxhdpi'
        case 3.5:
            return 'xxxhdpi'
    }
}