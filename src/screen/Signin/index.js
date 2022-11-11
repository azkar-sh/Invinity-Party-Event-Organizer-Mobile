import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BlueWhite from '../../components/CustomButton/blueWhite';
import styles from './styles';

import GoogleIcon from '../../assets/images/google-icon.png';
import FacebookIcon from '../../assets/images/facebook-icon.png';
import FingerprintIcon from '../../assets/images/fingerprint-icon.png';

export default function Signin(props) {
  const [showPassword, setShowPassword] = useState(true);

  const handleNavAuth = path => {
    props.navigation.navigate('AuthScreen', {screen: path});
  };

  const handleNavHome = path => {
    props.navigation.navigate('AppScreen', {screen: path});
  };

  return (
    <ScrollView style={styles.signinContainer}>
      <Text style={styles.signinTitle}>Log In</Text>
      <Text style={styles.signinSubtitle}>Hi! Welcome back to Intickz! </Text>

      {/* Auth Field */}
      <View style={styles.authField}>
        <TextInput placeholder="Email" style={styles.authForm} />
        <TextInput
          secureTextEntry={showPassword}
          placeholder="Password"
          style={styles.authForm}
        />

        <Text
          style={styles.showPassword}
          onPress={() => handleNavAuth('Forgot Password')}>
          Forgot Password?
        </Text>

        <BlueWhite text="Log In" onPress={() => handleNavHome('Home')} />

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
          <View style={styles.signinAlternativeBox}>
            <Image source={GoogleIcon} style={styles.signinAlternativeIcon} />
          </View>
          <View style={styles.signinAlternativeBox}>
            <Image source={FacebookIcon} style={styles.signinAlternativeIcon} />
          </View>
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
