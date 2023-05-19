import {atom} from "recoil";
// import * as RNInstalledApplication from "@kabeersnetwork/react-native-android-installed-apps";
// import {IInstalledApp} from "@Types/InstalledApps";
// import {NativeModules} from 'react-native';
// import * as Application from 'expo-application';
export const Indexes = {
    AuthenticationAtom: "AuthState",
    SearchAtom: "SearchState",
    HeaderAtom: "HeaderState",
    InstalledApps: "InstalledApps",
    AppInfo: "AppInfo",
}
export const AuthState = atom({
    key: Indexes.AuthenticationAtom, // unique ID (with respect to other atoms/selectors)
    default: {
        signedIn: false,
        user: null,
    }, // default value (aka initial value)
});

export const HeaderAtom = atom({
    key: Indexes.HeaderAtom, // unique ID (with respect to other atoms/selectors)
    default: {
        elevated: false,
        headingHidden: false
    }, // default value (aka initial value)
});

export const SearchState = atom({
    key: Indexes.SearchAtom, // unique ID (with respect to other atoms/selectors)
    default: {
        value: "",
    }, // default value (aka initial value)
});
// console.log(NativeModules);
// console.log(require.resolve("react-native-android-installed-apps"))
export const InstalledAppsAtom = atom({
    key: Indexes.InstalledApps,
    default: []//(RNInstalledApplication.getNonSystemApps().then((apps: Array<IInstalledApp>) => apps.filter(({packageName}) => packageName !== Application.applicationId))) as Array<IInstalledApp>
})
export const AppInfo = atom({
    key: Indexes.AppInfo,
    default: null,
});