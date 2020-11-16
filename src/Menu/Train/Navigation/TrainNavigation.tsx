import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TrainScreen from "../Screens/TrainScreen";
import TrainTimeTableScreen from "../Screens/TrainTimeTableScreen";

const Stack = createStackNavigator();

export default function TrainStackNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen
                name="기차"
                component={TrainScreen}
                initialParams={{endStationName: '서울'}}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                }}
            />
            <Stack.Screen
                name="기차시간표"
                component={TrainTimeTableScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                    },
                    title: '기차',
                }}
            />
        </Stack.Navigator>
    );
}
