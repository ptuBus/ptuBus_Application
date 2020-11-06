import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ExpressBusScreen} from '../Screens';

const Stack = createStackNavigator();

export default function ExpressBusStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="고속/시외버스"
        component={ExpressBusScreen}
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
