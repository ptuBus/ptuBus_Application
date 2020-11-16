import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CityBusScreen from "../Screens/CityBusScreen";

const Stack = createStackNavigator()

export default function CityBusNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen
                name="시내버스"
                component={CityBusScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                }}
            />
        </Stack.Navigator>
    );
}
