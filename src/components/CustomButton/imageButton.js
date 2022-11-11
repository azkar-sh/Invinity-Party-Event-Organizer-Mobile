import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function imageButton({imageSource, onPress}) {
  return (
    <View style={styles.box} onPress={onPress}>
      <TouchableOpacity>
        <Image source={imageSource} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#3366FF',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
