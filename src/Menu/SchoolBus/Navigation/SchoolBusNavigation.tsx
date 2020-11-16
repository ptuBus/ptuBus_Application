import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SchoolBusDownScreen from "../Screens/SchoolBusDownScreen";
import SchoolBusUpScreen from "../Screens/SchoolBusUpScreen";
const TopTabNavigator = createMaterialTopTabNavigator();

export default function SchoolBusNavigation() {
    return (
        <TopTabNavigator.Navigator
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#FFFFFF',
                labelStyle: {fontSize: 15, fontWeight: '600'},
                indicatorStyle: {
                    borderWidth: 0.1,
                    borderColor: 'black',
                    height: '100%',
                    backgroundColor: '#2195FF',
                },
                style: {
                    backgroundColor: '#65B5FF',
                },
            }}>
            <TopTabNavigator.Screen name="평택대학교방향" component={SchoolBusDownScreen} />
            <TopTabNavigator.Screen name="평택역(롯데)방향" component={SchoolBusUpScreen} />
        </TopTabNavigator.Navigator>
    );
}
