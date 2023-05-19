import create from "zustand";
import RNInstalledApplication from "react-native-installed-application";

export type IInstalledApplications = { apps: Array<object>, update: () => any, isAppInstalled: (packageName: string) => any };
export const useInstalledApplications = create<IInstalledApplications>((set, get) => ({
    apps: [],
    update: () => RNInstalledApplication.getApps().then((apps: Array<object>) => set({apps})),
    isAppInstalled: async (packageName: string) => (await get()).apps.find(({packageName: _}) => _ === packageName),
}))

export interface IApplicationState {
    state: {
        response: null | {
            app: { icon: string; [x: string]: any };
            permissions: { perms: { [x: string]: string }; [x: string]: any };
        };
        error: boolean;
        loading: boolean;
        installed: boolean | null,
    } | null
    update: (x: {
        response: null | {
            app: { icon: string; [x: string]: any };
            permissions: { perms: { [x: string]: string }; [x: string]: any };
        };
        error: boolean;
        loading: boolean;
        installed: boolean | null,
    } | null) => any,
    setError: (x: boolean) => any
    setLoading: (x: boolean) => any
}

export const useApplicationState = create<IApplicationState>(set => ({
    state: {
        response: null,
        error: false,
        loading: false,
        installed: null,
    },
    setError: (x: boolean) => set(prevState => ({state: {...prevState.state, error: x}})),
    setLoading: (x: boolean) => set(prevState => ({state: {...prevState.state, loading: x}})),
    update: (state: {
        response: null | {
            app: { icon: string; [x: string]: any };
            permissions: { perms: { [x: string]: string }; [x: string]: any };
        };
        error: boolean;
        loading: boolean;
        installed: boolean | null,
    } | null) => set({state})
}))