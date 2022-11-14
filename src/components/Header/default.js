import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';

export default function HomeHeader(props) {
  const openDrawer = () => {
    props.navigation.goBack();
  };

  console.log(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Iconicons name="arrow-back" size={25} color="white" />
      </TouchableOpacity>
      <Text style={styles.textContainer}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#3366FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    color: '#FFFFFF',
    fontSize: 20,
    letterSpacing: 1,
  },
});
