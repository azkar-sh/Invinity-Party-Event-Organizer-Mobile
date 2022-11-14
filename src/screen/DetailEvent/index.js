import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import event1 from '../../assets/images/event-1.png';
import maps from '../../assets/images/maps.png';
import attendance from '../../assets/images/attendance.png';

export default function DetailEvent() {
  return (
    <ScrollView>
      <ImageBackground source={event1} style={styles.imageBanner}>
        <View style={styles.textOverlay}>
          <Text style={styles.title}>Sights & Sounds Exhibition</Text>
          <View style={styles.textFlex}>
            <Icon name="map-pin" color="magenta" size={20} />
            <Text style={styles.dateLocation}>Jakarta, Indonesia</Text>
          </View>
          <View style={styles.textFlex}>
            <MaterialIcon
              name="clock-time-four-outline"
              color="magenta"
              size={20}
            />
            <Text style={styles.dateLocation}>Wed, 15 Nov, 4:00 PM</Text>
          </View>
          <Text style={styles.smallText}>Attendance</Text>
          <Image source={attendance} />
        </View>
      </ImageBackground>

      <View style={styles.eventDetailContainer}>
        <Text style={styles.eventDetailTitle}>Event Detail</Text>
        <Text style={styles.eventDetailText}>
          After his controversial art exhibition "Tear and Consume" back in
          November 2018, in which guests were invited to tear up…
        </Text>

        <Text style={styles.eventDetailTitle}>Location</Text>
        <Image source={maps} style={styles.eventMaps} />

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.textButton}>Buy Tickets</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
