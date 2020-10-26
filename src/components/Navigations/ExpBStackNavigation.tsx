import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExpBusScreen from '../Screens/ExpBusScreen';

const Stack = createStackNavigator();

function ExpBStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="고속/시외버스"
        component={ExpBusScreen}
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

export default ExpBStackNavigation;
