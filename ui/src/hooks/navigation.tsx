import {Platform} from "expo-modules-core";
import {useRouter} from "next/router";

export const useNavigation = () => ({
    async push(route: string) {
        if (Platform.OS === "web") return await useRouter().push(route);
        // else return useHistory().push(route);
    }
});
