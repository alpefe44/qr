import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../Screens/HomePage";
import QrPage from "../Screens/QrPage";
import ProfilePage from "../Screens/ProfilePage";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ButtonfIcon from "../Components/ButtonfIcon";

type TabProps = {
    Home: undefined,
    QrScreen: undefined,
    Profile: undefined
}

const Tab = createBottomTabNavigator<TabProps>();

export function MyTabs() {
    return (
        <Tab.Navigator tabBar={(props) => <MyCustomTab {...props} />} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="QrScreen" component={QrPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
    )
}

function MyCustomTab({ state, descriptors, navigation }: any) {
    return (
        <View style={styles.tabBarContainer}>
            {
                state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (

                        <TouchableOpacity
                            key={index}
                            onPress={onPress}
                            style={index === 1 ? { borderWidth: isFocused ? 1 : .1, borderRadius: 50, paddingHorizontal: 16, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', bottom: 8 } : styles.tabButton}
                        >
                            <ButtonfIcon
                                icon={index === 0 ? 'home' : index === 1 ? 'qr-code' : 'person'}
                                title={route.name}
                                size={18}
                            />
                        </TouchableOpacity>
                    );
                })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingTop: 10
    },
    tabButton: {
        flexDirection: 'column',
        alignItems: 'center',
    }
});