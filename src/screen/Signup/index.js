import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BlueWhite from '../../components/CustomButton/blueWhite';
import styles from './styles';

export default function Signup(props) {
  const [showPassword, setShowPassword] = useState(true);

  const handleNav = () => {
    props.navigation.navigate('AuthScreen', {screen: 'Log In'});
  };

  return (
    <ScrollView style={styles.signupContainer}>
      <View>
        <Text style={styles.signupTitle}>Sign Up</Text>
        <Text style={styles.signupSubtitle}>
          Already have an account?{' '}
          <Text style={styles.signupLoginNav} onPress={handleNav}>
            Log in
          </Text>{' '}
        </Text>

        {/* Auth Field */}
        <View style={styles.authField}>
          <TextInput placeholder="Full Name" style={styles.authForm} />
          <TextInput placeholder="Email" style={styles.authForm} />
          <TextInput
            secureTextEntry={showPassword}
            placeholder="Password"
            style={styles.authForm}
          />

          <TextInput
            secureTextEntry={showPassword}
            placeholder="Confirm Password"
            style={styles.authForm}
          />
          <Text
            style={styles.showPassword}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Show Password' : 'Hide Password'}
          </Text>
          <Text style={styles.signupSubtitle}>Accept terms and condition</Text>
          <BlueWhite text="Sign Up" />
        </View>
      </View>
    </ScrollView>
  );
}
