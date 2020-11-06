import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SubwayScreen from '../../Screens/Subway/SubwayScreen';

const Stack = createStackNavigator();

function SubwayStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="지하철"
        component={SubwayScreen}
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

export default SubwayStackNavigation;
