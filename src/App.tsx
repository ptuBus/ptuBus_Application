import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/TabScreen/Home';
import Favorites from './components/TabScreen/Favorites';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={Home} />
        <Tab.Screen name="즐겨찾기" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
