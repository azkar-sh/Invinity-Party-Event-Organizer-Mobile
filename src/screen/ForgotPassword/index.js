import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';
import BlueWhite from '../../components/CustomButton/blueWhite';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>You'll get mail soon on your email</Text>

      <View style={styles.authField}>
        <TextInput placeholder="Email" style={styles.authForm} />
        <BlueWhite text="Send" />
      </View>
    </View>
  );
}
