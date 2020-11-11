import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen";
import SchoolBusNavigation from "../../../Menu/SchoolBus/Navigation/SchoolBusNavigation";
import ExpressBusStackNavigation from "../../../Menu/ExpressBus/Navigation/ExpressBusStackNavigation";
import CityBusNavigation from "../../../Menu/CityBus/Navigation/CityBusNavigation";

const Stack = createStackNavigator();

export default function HomeTabScreen() {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen
                name="홈"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="스쿨버스"
                component={SchoolBusNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                }}
            />
            <Stack.Screen
                name="고속/시외버스"
                component={ExpressBusStackNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                }}
            />
            <Stack.Screen
                name="시내버스"
                component={CityBusNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                }}
            />
        </Stack.Navigator>
    );
}
