import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as Screens from "../../Screens";

const TopTabNavigator = createMaterialTopTabNavigator();

export default function SchoolBusTopTabNavigation() {
    return (
        <TopTabNavigator.Navigator
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#FFFFFF',
                labelStyle: {fontSize: 13},
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
            <TopTabNavigator.Screen name="평택대학교방향" component={Screens.SchoolBusUpScreen} />
            <TopTabNavigator.Screen name="평택역(롯데)방향" component={Screens.SchoolBusDownScreen} />
        </TopTabNavigator.Navigator>
    );
}
