import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import BlueWhite from '../../components/CustomButton/blueWhite';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee from '@notifee/react-native';

import GoogleIcon from '../../assets/images/google-icon.png';
import FacebookIcon from '../../assets/images/facebook-icon.png';
import FingerprintIcon from '../../assets/images/fingerprint-icon.png';
import {useDispatch} from 'react-redux';
import {login} from '../../stores/actions/auth';
import {getDataEvent} from '../../stores/actions/event';
import {getDataUserById} from '../../stores/actions/user';
import {getDataWishlistByUserId} from '../../stores/actions/wishlist';

export default function Signin(props) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [form, setForm] = useState({});

  const handleChange = (value, name) => {
    setForm({...form, [name]: value});
  };

  const handleNavAuth = path => {
    props.navigation.navigate('AuthScreen', {screen: path});
  };

  const handleNavHome = path => {
    props.navigation.navigate('AppScreen', {screen: path});
  };

  const handleLogin = async () => {
    try {
      dispatch(login(form))
        .then(async response => {
          await AsyncStorage.setItem('token', response.value.data.data.token);
          await AsyncStorage.setItem(
            'resfreshToken',
            response.value.data.data.refreshToken,
          );
          dispatch(getDataUserById(response.value.data.data.userId));
          dispatch(getDataWishlistByUserId(response.value.data.data.userId));
          dispatch(getDataEvent(''));
          alert('Login Successfully!');
          props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
        })
        .catch(() => {
          alert('Your Username or Password incorrect');
        });
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    // await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <ScrollView style={styles.signinContainer}>
      <Text style={styles.signinTitle}>Log In</Text>
      <Text style={styles.signinSubtitle}>Hi! Welcome back to Intickz! </Text>

      {/* Auth Field */}
      <View style={styles.authField}>
        <TextInput
          placeholder="Email"
          style={styles.authForm}
          onChangeText={text => handleChange(text, 'email')}
        />
        <View>
          <TextInput
            secureTextEntry={showPassword}
            placeholder="Password"
            style={styles.authForm}
            onChangeText={text => handleChange(text, 'password')}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={18}
              color="black"
              style={styles.showPassword}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={styles.forgotPassword}
          onPress={() => handleNavAuth('Forgot Password')}>
          Forgot Password?
        </Text>

        <BlueWhite
          text="Log In"
          onPress={handleLogin}
          // onPress={() => onDisplayNotification()}
        />

        <Text style={styles.signupSubtitle}>
          Don't Have an Account?{' '}
          <Text
            style={styles.signupNav}
            onPress={() => handleNavAuth('Sign Up')}>
            Sign Up!
          </Text>{' '}
        </Text>

        <Text style={styles.signinAlternativeText}>or sign in with</Text>

        {/* Alternative Signin Container */}
        <View style={styles.signinAlternativeContainer}>
          <TouchableOpacity style={styles.signinAlternativeBox}>
            <Image source={GoogleIcon} style={styles.signinAlternativeIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signinAlternativeBox}
            onPress={() => handleNavHome('Home')}>
            <Image source={FacebookIcon} style={styles.signinAlternativeIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signinAlternativeBox}
            onPress={() => handleNavAuth('Touch ID')}>
            <Image
              source={FingerprintIcon}
              style={styles.signinAlternativeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
