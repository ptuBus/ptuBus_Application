import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SchoolBusTabNavigation from './SchoolBusTabNavigation';

const Stack = createStackNavigator();

function SchoolBusStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="스쿨버스"
        component={SchoolBusTabNavigation}
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

export default SchoolBusStackNavigation;
