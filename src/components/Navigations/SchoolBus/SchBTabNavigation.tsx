import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SchoolBusUpScreen from '../../Screens/SchoolBus/SchoolBusUpScreen';
import SchoolBusDownScreen from '../../Screens/SchoolBus/SchoolBusDownScreen';

const TopTab = createMaterialTopTabNavigator();

function SchoolBusTabNavigation() {
  return (
    <TopTab.Navigator
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
      <TopTab.Screen name="평택대학교방향" component={SchoolBusUpScreen} />
      <TopTab.Screen name="평택역(롯데)방향" component={SchoolBusDownScreen} />
    </TopTab.Navigator>
  );
}

export default SchoolBusTabNavigation;
