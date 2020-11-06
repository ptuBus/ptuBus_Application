import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SchoolBusScreen} from '../../Screens';

const Stack = createStackNavigator();

export default function SchoolBusStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="스쿨버스"
        component={SchoolBusScreen}
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
