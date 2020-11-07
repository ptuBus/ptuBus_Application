import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Train from '../../Screens'

const Stack = createStackNavigator();

export default function TrainStackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="기차"
                component={Train.TrainScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height: 110,
                    },
                }}
            />
            <Stack.Screen
                name="기차시간표"
                component={Train.TrainTimeTableScreen}
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
