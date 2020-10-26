import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import TrainStackNavigation from '../Navigations/TrainStackNavigation';
import SchBStackNavigation from '../Navigations/SchBStackNavigation';
import ExpBStackNavigation from '../Navigations/ExpBStackNavigation';
import CityBStackNavigation from '../Navigations/CityBStackNavigation';
import SubwayStackNavigation from '../Navigations/SubwayStackNavigation';

const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="홈"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="스쿨버스"
        component={SchBStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: 110,
          },
        }}
      />
      <Stack.Screen
        name="고속/시외버스"
        component={ExpBStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: 110,
          },
        }}
      />
      <Stack.Screen
        name="시내버스"
        component={CityBStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: 110,
          },
        }}
      />
      <Stack.Screen
        name="지하철"
        component={SubwayStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: 110,
          },
        }}
      />
      <Stack.Screen
        name="기차"
        component={TrainStackNavigation}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
            height: 110,
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Home;
