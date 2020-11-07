import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens';
import * as Navigations from '../Navigations';

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
                component={Navigations.SchoolBusTopTabNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height:'100%',
                    },
                }}
            />
            <Stack.Screen
                name="고속/시외버스"
                component={Navigations.ExpressBusStackNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height:'100%',
                    },
                }}
            />
            <Stack.Screen
                name="시내버스"
                component={Navigations.CityBusStackNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height:'100%',
                    },
                }}
            />
            <Stack.Screen
                name="지하철"
                component={Navigations.SubwayStackNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height:'100%',
                    },
                }}
            />
            <Stack.Screen
                name="기차"
                component={Navigations.TrainStackNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height:'100%',
                    },
                }}
            />
        </Stack.Navigator>
    );
}
