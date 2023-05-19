// import {StatusBar} from 'expo-status-bar';
import {RecoilRoot} from 'recoil';
import React from "react";
import {
    IconComponentProvider,
    Provider as MaterialProvider,
    ThemeProvider,
    useTheme
} from "@react-native-material/core";
import {useColorScheme, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialIcons";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "@Screens/Home";
import {SafeAreaView} from "react-native-safe-area-context";
import {Application} from "@Screens/App";
import {InstalledApps} from "@Screens/Installed";

const Stack = createNativeStackNavigator();

export default App;

export function App() {
    const theme = useTheme();
    const colorScheme = useColorScheme();
    return (
        <NavigationContainer theme={{
            ...DefaultTheme,
            colors: {...DefaultTheme.colors, background: 'white'},
        }}>
            <RecoilRoot>
                <SafeAreaProvider>
                    {/* @ts-ignore */}
                    <MaterialProvider>
                        <ThemeProvider theme={{
                            ...theme,
                            palette: {...theme.palette, primary: {main: "#4B9348"}},
                            colorScheme: colorScheme ?? "dark"
                        }}>
                            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                                <Stack.Navigator screenOptions={{headerShown: false, statusBarAnimation: "slide"}}>
                                    <Stack.Screen name="home">
                                        {(props) => <View style={{flex: 1}}>
                                            <SafeAreaView>
                                                <Home/>
                                            </SafeAreaView>
                                        </View>}
                                    </Stack.Screen>
                                    <Stack.Screen name="package">
                                        {(props) => <View style={{flex: 1}}>
                                            <Application/>
                                        </View>}
                                    </Stack.Screen>
                                    <Stack.Screen name="installed">
                                        {(props) => <View style={{flex: 1}}>
                                            <InstalledApps/>
                                        </View>}
                                    </Stack.Screen>
                                </Stack.Navigator>
                            </IconComponentProvider>
                        </ThemeProvider>
                    </MaterialProvider>
                </SafeAreaProvider>
            </RecoilRoot>
        </NavigationContainer>
    );
}
