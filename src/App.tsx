import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as TabScreen from './Components/TabScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="홈" component={TabScreen.HomeTabScreen} />
          <Tab.Screen name="즐겨찾기" component={TabScreen.FavoritesTabScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
