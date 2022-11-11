import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Order from '../screen/Order';

function MenuNavigator() {
  return (
    // List menu that will be shown on the left side of the screen when the drawer is opened
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Detail" component={Detail} />
      <Drawer.Screen name="Order" component={Order} />
    </Drawer.Navigator>
  );
}

export default function AppStackNavigator() {
  return (
    // This is the main stack navigator that will be shown on the screen
    <Stack.Navigator initialRouteName="Home">
      {/* This stack screen will call drawer */}
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />

      {/* When access this pages the drawer will be hidden */}
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
