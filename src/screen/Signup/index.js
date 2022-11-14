import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BlueWhite from '../../components/CustomButton/blueWhite';
import styles from './styles';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function Signup(props) {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleNav = () => {
    props.navigation.navigate('AuthScreen', {screen: 'Log In'});
  };

  const [checked, setChecked] = useState(false);

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
          <View>
            <TextInput
              secureTextEntry={showPassword}
              placeholder="Password"
              style={styles.authForm}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color="black"
                style={styles.showPassword}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              secureTextEntry={showConfirmPassword}
              placeholder="Confirm Password"
              style={styles.authForm}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Icon
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={20}
                color="black"
                style={styles.showPassword}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxValidation}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.signupSubtitle}>
              Accept terms and condition
            </Text>
          </View>

          <BlueWhite text="Sign Up" disabled={checked ? false : true} />
        </View>
      </View>
    </ScrollView>
  );
}
