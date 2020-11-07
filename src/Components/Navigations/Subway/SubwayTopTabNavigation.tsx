import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as Screens from "../../Screens";

const TopTabNavigator = createMaterialTopTabNavigator();

export default function SubwayTopTabNavigation() {
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
            <TopTabNavigator.Screen name="최소시간" component={Screens.SubwayLeastTimeScreen} />
            <TopTabNavigator.Screen name="최단거리" component={Screens.SubwayLeastDistanceScreen} />
            <TopTabNavigator.Screen name="최소환승" component={Screens.SubwayLeastTransferScreen} />
        </TopTabNavigator.Navigator>
    );
}