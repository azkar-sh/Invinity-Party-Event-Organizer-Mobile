import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import axios from '../../utils/axios';

import Icon from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

function DrawerContent(props) {
  const userData = useSelector(state => state.user.userData[0]);

  const handleLogout = async () => {
    try {
      await axios.post('auth/logout');
      alert('Logout Successfully');
      await AsyncStorage.clear();
      props.navigation.replace('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };

  const userImage = {
    uri: `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userData.image}`,
  };
  const randomImage = {
    uri: `https://ui-avatars.com/api/?background=random&name=${userData.username}`,
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <Image
            source={userData.image !== null ? userImage : randomImage}
            style={styles.avatar}
          />
          <View style={styles.biodata}>
            <Text style={styles.title}>
              {userData.name ? userData.name : 'Set Your Name!'}
            </Text>
            <Text style={styles.caption}>
              {userData.username
                ? `@${userData.username}`
                : 'Set Your Username!'}
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
