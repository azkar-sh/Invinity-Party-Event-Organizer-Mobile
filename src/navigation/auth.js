import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Signin from '../screen/Signin';
import Signup from '../screen/Signup';
import Touchid from '../screen/Touchid';
import ForgotPassword from '../screen/ForgotPassword';

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log In" component={Signin} />
      <Stack.Screen name="Sign Up" component={Signup} />
      <Stack.Screen name="Touch ID" component={Touchid} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
