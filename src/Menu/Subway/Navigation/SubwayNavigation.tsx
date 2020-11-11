import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SubwayLeastTimeScreen from "../Screens/SubwayLeastTimeScreen";
import SubwayLeastDistanceScreen from "../Screens/SubwayLeastDistanceScreen";
import SubwayLeastTransferScreen from "../Screens/SubwayLeastTransferScreen";

const TopTabNavigator = createMaterialTopTabNavigator();

export default function SubwayNavigation() {
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
            <TopTabNavigator.Screen name="최소시간" component={SubwayLeastTimeScreen} />
            <TopTabNavigator.Screen name="최단거리" component={SubwayLeastDistanceScreen} />
            <TopTabNavigator.Screen name="최소환승" component={SubwayLeastTransferScreen} />
        </TopTabNavigator.Navigator>
    );
}
