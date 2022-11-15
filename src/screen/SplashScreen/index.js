import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashImage from '../../assets/images/splash-screen.png';

export default function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 1000);
  };

  return (
    <View style={styles.splashScreen}>
      <Image source={SplashImage} style={styles.splashImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  splashImage: {width: '100%'},
});
