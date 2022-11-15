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

import GoogleIcon from '../../assets/images/google-icon.png';
import FacebookIcon from '../../assets/images/facebook-icon.png';
import FingerprintIcon from '../../assets/images/fingerprint-icon.png';

export default function Signin(props) {
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
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('userId', result.data.data.userId);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem(
        'resfreshToken',
        result.data.data.refreshToken,
      );
      alert(result.data.msg);
      props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

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

        <BlueWhite text="Log In" onPress={handleLogin} />

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
