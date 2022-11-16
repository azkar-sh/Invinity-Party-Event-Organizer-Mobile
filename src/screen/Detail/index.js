import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

export default function Detail(props) {
  useEffect(() => {
    console.log(props.route.params.eventId);
  }, []);

  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({});
