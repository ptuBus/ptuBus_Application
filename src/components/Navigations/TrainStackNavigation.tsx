import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TrainScreen from '../Screens/Train/TrainScreen';
import TrainTimeTableScreen from '../Screens/Train/TrainTimeTableScreen';

const Stack = createStackNavigator();

function TrainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="기차"
        component={TrainScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: 110,
          },
        }}
      />
      <Stack.Screen
        name="기차시간표"
        component={TrainTimeTableScreen}
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

export default TrainStackNavigation;
