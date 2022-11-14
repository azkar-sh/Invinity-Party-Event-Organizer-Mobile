import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialIcons';

export default function EventHeader(props) {
  const openDrawer = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Iconicons name="arrow-back" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Materialicons name="favorite-border" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  textContainer: {
    color: '#FFFFFF',
  },
});
