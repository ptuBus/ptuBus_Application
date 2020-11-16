import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExpressBusScreen from "../Screens/ExpressBusScreen";

const Stack = createStackNavigator();

export default function ExpressBusNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen
                name="고속/시외버스"
                component={ExpressBusScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                }}
            />
        </Stack.Navigator>
    );
}
