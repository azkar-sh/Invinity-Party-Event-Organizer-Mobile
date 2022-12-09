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
import event1 from '../../assets/images/event-1.png';

import arrowLeft from '../../assets/images/arrow-left.png';

export default function AllEventCard(props) {
  const handleDetailEvent = id => {
    props.navigation.navigate('Detail Event', {eventId: props.data?.eventId});
  };

  const image = {
    uri: `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${props.data.image}`,
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={props.data?.image !== null ? image : event1}
        style={styles.image}
        imageStyle={{borderRadius: 20}}>
        <View style={styles.textOverlay}>
          <Text style={styles.dateOverImage}>{props.data?.dateTimeShow}</Text>
          <Text style={styles.titleOverImage}>{props.data?.name}</Text>
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
