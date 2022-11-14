import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

export default function blueWhite({text, onPress, disabled}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={disabled ? styles.disabledButton : styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3366FF',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  disabledButton: {
    backgroundColor: '#3366FF',
    opacity: 0.75,
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
