import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/Detail';
import DetailEvent from '../screen/DetailEvent';
import Booking from '../screen/Booking';
import Wishlist from '../screen/Wishlist';
import Profile from '../screen/Profile';
import EditProfile from '../screen/EditProfile';
import Order from '../screen/Order';
import AllEvent from '../screen/AllEvent';
import MyOrder from '../screen/MyOrder';

// import Profile from '../screen/Profile';

import DrawerContent from '../components/DrawerContent';
import HeaderHome from '../components/Header/home';
import HeaderEvent from '../components/Header/event';
import HeaderDefault from '../components/Header/default';

function MenuNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA AKAN MASUK KE DALAM DRAWER DISINI
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          header: props => <HeaderHome {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          header: props => <HeaderDefault {...props} name="Profile" />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      {/* MY BOOKING */}
      <Drawer.Screen
        name="My Booking"
        component={Booking}
        options={{
          header: props => <HeaderDefault {...props} name="My Booking" />,
          drawerIcon: ({size, color}) => (
            <Entypo name="ticket" color={color} size={size} />
          ),
        }}
      />
      {/* MY WISHLIST */}
      <Drawer.Screen
        name="My Wishlist"
        component={Wishlist}
        options={{
          header: props => <HeaderDefault {...props} name="My Wishlist" />,
          drawerIcon: ({size, color}) => (
            <Entypo name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppStackNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA DAPAT DI AKSES DILUAR DRAWER DISINI
    <Stack.Navigator initialRouteName="MenuNavigator">
      {/* HOME SCREEN */}
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail Event"
        component={DetailEvent}
        options={{
          header: props => <HeaderEvent {...props} />,
          headerTransparent: true,
        }}
      />
      {/* ORDER */}
      <Stack.Screen
        name="Order Detail"
        component={Order}
        options={{
          header: props => <HeaderDefault {...props} name="Order Detail" />,
        }}
      />
      {/* All Event */}
      <Stack.Screen
        name="All Event"
        component={AllEvent}
        options={{
          header: props => <HeaderDefault {...props} name="All Event" />,
        }}
      />
      {/* PAYMENT */}
      {/* EDIT PROFILE */}
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          header: props => <HeaderDefault {...props} name="Edit Profile" />,
        }}
      />
      {/* CHANGE PASSWORD */}
    </Stack.Navigator>
  );
}
