import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import * as Main from '../src/Main';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="black"
            inactiveColor="blue"
            barStyle={{backgroundColor: '#fff'}}>
          <Tab.Screen name="Home" component={Main.HomeScreen} />
          <Tab.Screen name="Favorite" component={Main.FavoriteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
