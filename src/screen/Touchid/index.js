import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

import FingerIcon from '../../assets/images/finger-icon.png';

export default function TouchId(props) {
  const handleAuthNav = path => {
    props.navigation.navigate('AuthScreen', {screen: path});
  };

  return (
    <View style={styles.touchidContainer}>
      <Text style={styles.touchidTitle}>Touch ID</Text>
      <Text style={styles.touchidSubtitle}>Authenticate using app's</Text>
      <Text style={styles.touchidSubtitle}>Touch ID instead of tentering</Text>
      <Text style={styles.touchidSubtitle}>your password</Text>
      <Image source={FingerIcon} style={styles.touchidImage} />
      <Text>
        Back to{' '}
        <Text
          style={styles.regularLogin}
          onPress={() => handleAuthNav('Log In')}>
          Regular Login
        </Text>
      </Text>
    </View>
  );
}
