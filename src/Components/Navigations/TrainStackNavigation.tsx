import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {TrainScreen} from '../Screens'

const Stack = createStackNavigator();

export default function TrainStackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="지하철"
                component={TrainScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height: 110,
                    },
                }}
            />
        </Stack.Navigator>
    );
}
