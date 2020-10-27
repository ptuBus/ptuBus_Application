import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SchoolBusUpScreen from '../../Screens/SchoolBus/SchoolBusUpScreen';
import SchoolBusDownScreen from '../../Screens/SchoolBus/SchoolBusDownScreen';

const Ttab = createMaterialTopTabNavigator();

function SchBTabNavigation() {
  return (
    <Ttab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#FFFFFF',
        labelStyle: {fontSize: 13},
        indicatorStyle: {
          borderWidth: 0.1,
          borderColor: 'black',
        },
        style: {
          backgroundColor: '#65B5FF',
        },
      }}>
      <Ttab.Screen name="평택대학교방향" component={SchoolBusUpScreen} />
      <Ttab.Screen name="평택역(롯데)방향" component={SchoolBusDownScreen} />
    </Ttab.Navigator>
  );
}

export default SchBTabNavigation;
