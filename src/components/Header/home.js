import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import notificationIcon from '../../assets/images/notification-icon.png';
import burgerIcon from '../../assets/images/burger-icon.png';

export default function HomeHeader(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        {/* <Text style={styles.textContainer}>HomeHeader</Text> */}
        <Image source={burgerIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={notificationIcon} />
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
    backgroundColor: '#3366FF',
  },
  textContainer: {
    color: '#FFFFFF',
  },
});
