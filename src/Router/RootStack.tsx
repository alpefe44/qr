import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyTabs } from "./Tabbar";
import LoginPage from "../Screens/LoginPage";
import { NavigationContainer } from "@react-navigation/native";

type RootStackTypes = {
    LoginPage: undefined,
    TabPage: undefined,
}


const RootStack = createNativeStackNavigator<RootStackTypes>();



export function MyRootStack() {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="LoginPage" component={LoginPage}></RootStack.Screen>
            <RootStack.Screen name="TabPage" component={MyTabs}></RootStack.Screen>
        </RootStack.Navigator>
    )
}