import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CityBusScreen from "../../Screens/CityBus/CityBusScreen";

const Stack = createStackNavigator();

function CityBStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="시내버스"
        component={CityBusScreen}
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

export default CityBStackNavigation;
