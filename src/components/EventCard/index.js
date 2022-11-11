import {ScrollView, Text, Image, View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React from 'react';
import styles from './style';

import event1 from '../../assets/images/event-1.png';
import event2 from '../../assets/images/event-2.png';
import arrowLeft from '../../assets/images/arrow-left.png';

export default function EventCard() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <ImageBackground
        source={event1}
        style={styles.image}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.dateOverImage}>Wed, 15 Nov, 4:00 PM</Text>
        <Text style={styles.titleOverImage}>Sights & Sounds Exhibition</Text>
        {/* <TouchableOpacity style={styles.buttonOverImage}>
          <Image source={arrowLeft} style={styles.imageButton} />
        </TouchableOpacity> */}
      </ImageBackground>

      <ImageBackground
        source={event2}
        style={styles.image}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.dateOverImage}>Wed, 15 Nov, 4:00 PM</Text>
        <Text style={styles.titleOverImage}>See it in Gold Class </Text>
        {/* <TouchableOpacity style={styles.buttonOverImage}>
          <Image source={arrowLeft} style={styles.imageButton} />
        </TouchableOpacity> */}
      </ImageBackground>

      <ImageBackground
        source={event1}
        style={styles.image}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.dateOverImage}>Wed, 15 Nov, 4:00 PM</Text>
        <Text style={styles.titleOverImage}>See it in Gold Class </Text>
        {/* <TouchableOpacity style={styles.buttonOverImage}>
          <Image source={arrowLeft} style={styles.imageButton} />
        </TouchableOpacity> */}
      </ImageBackground>
    </ScrollView>
  );
}
