import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TrainStackNavigation from '../../Navigations/Train/TrainStackNavigation';
import SchoolBusStackNavigation from '../../Navigations/SchoolBus/SchoolBusTabNavigation';
import ExpBusStackNavigation from '../../Navigations/ExpBus/ExpBusStackNavigation';
import CityBusStackNavigation from '../../Navigations/CityBus/CityBusStackNavigation';
import SubwayStackNavigation from '../../Navigations/Subway/SubwayStackNavigation';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="홈"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="스쿨버스"
        component={SchoolBusStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: '100%',
          },
        }}
      />
      <Stack.Screen
        name="고속/시외버스"
        component={ExpBusStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: '100%',
          },
        }}
      />
      <Stack.Screen
        name="시내버스"
        component={CityBusStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: '100%',
          },
        }}
      />
      <Stack.Screen
        name="지하철"
        component={SubwayStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: '100%',
          },
        }}
      />
      <Stack.Screen
        name="기차"
        component={TrainStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: '100%',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
