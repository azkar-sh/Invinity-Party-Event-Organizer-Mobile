import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BlueWhite from '../../components/CustomButton/blueWhite';
import styles from './styles';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup(props) {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = async data => {
    // console.log(form);
    try {
      const result = await axios.post('auth/register', form);
      alert(result.data.msg);
      props.navigation.replace('AuthScreen', {screen: 'Login'});
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

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
          <TextInput
            placeholder="Username"
            style={styles.authForm}
            onChangeText={text => handleChange('username', text)}
          />
          <TextInput
            placeholder="Email"
            style={styles.authForm}
            onChangeText={text => handleChange('email', text)}
          />
          <View>
            <TextInput
              secureTextEntry={showPassword}
              placeholder="Password"
              style={styles.authForm}
              onChangeText={text => handleChange('password', text)}
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
              onChangeText={text => handleChange('confirmpassword', text)}
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

          <BlueWhite
            text="Sign Up"
            disabled={checked ? false : true}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
}
