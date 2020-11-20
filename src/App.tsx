import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeNavigation from "./Main/Home/Navigation/HomeNavigation";
import FavoriteScreen from "./Main/Favorite/Screen/FavoriteScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="blue"
            inactiveColor="black"
            barStyle={{backgroundColor: '#fff'}}>
          <Tab.Screen name="Home" component={HomeNavigation} />
          <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
