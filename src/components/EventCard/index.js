import {
  ScrollView,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';

import arrowLeft from '../../assets/images/arrow-left.png';

export default function EventCard(props) {
  const handleDetailEvent = () => {
    console.log(props.navigation);
    props.navigation.navigate('Detail Event');
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={props.data?.image}
        style={styles.image}
        imageStyle={{borderRadius: 20}}>
        <View style={styles.textOverlay}>
          <Text style={styles.dateOverImage}>{props.data?.date}</Text>
          <Text style={styles.titleOverImage}>{props.data?.title}</Text>
          <TouchableOpacity
            style={styles.buttonOverImage}
            onPress={handleDetailEvent}>
            <Image source={arrowLeft} style={styles.imageButton} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
