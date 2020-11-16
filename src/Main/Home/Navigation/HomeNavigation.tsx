import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen";
import SchoolBusNavigation from "../../../Menu/SchoolBus/Navigation/SchoolBusNavigation";
import ExpressBusNavigation from "../../../Menu/ExpressBus/Navigation/ExpressBusNavigation";
import CityBusNavigation from "../../../Menu/CityBus/Navigation/CityBusNavigation";
import SubwayNavigation from "../../../Menu/Subway/Navigation/SubwayNavigation";
import TrainStackNavigation from "../../../Menu/Train/Navigation/TrainNavigation";

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
                component={ExpressBusNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="시내버스"
                component={CityBusNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="지하철"
                component={SubwayNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                }}
            />
            <Stack.Screen
                name="기차"
                component={TrainStackNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
