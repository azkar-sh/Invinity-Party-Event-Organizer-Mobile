import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from '../../utils/axios';

import styles from './styles';
import event1 from '../../assets/images/event-1.png';
import maps from '../../assets/images/maps.png';
import attendance from '../../assets/images/attendance.png';

export default function DetailEvent(props) {
  const eventId = props.route.params.eventId;
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`event/${eventId}`);
      setEventData(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const image = {
    uri: `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${eventData.image}`,
  };

  const handleAppNavigation = path => {
    props.navigation.navigate('AppScreen', {screen: path});
    // console.log(path);
  };

  return (
    <ScrollView>
      <ImageBackground
        source={eventData?.image !== null ? image : event1}
        style={styles.imageBanner}>
        <View style={styles.textOverlay}>
          <Text style={styles.title}>
            {eventData.name ? eventData.name : 'Exiting Event'}
          </Text>
          <View style={styles.textFlex}>
            <Icon name="map-pin" color="magenta" size={20} />
            <Text style={styles.dateLocation}>
              {eventData.location ? eventData.location : 'Indonesia'}
            </Text>
          </View>
          <View style={styles.textFlex}>
            <MaterialIcon
              name="clock-time-four-outline"
              color="magenta"
              size={20}
            />
            <Text style={styles.dateLocation}>
              {eventData.dateTimeShow
                ? eventData.dateTimeShow
                : 'Wed, 15 Nov 2022'}
            </Text>
          </View>
          <Text style={styles.smallText}>Attendance</Text>
          <Image source={attendance} />
        </View>
      </ImageBackground>

      <View style={styles.eventDetailContainer}>
        <Text style={styles.eventDetailTitle}>Event Detail</Text>
        <Text style={styles.eventDetailText}>
          {eventData.detail
            ? eventData.detail
            : 'Something exitment will come. Stay tune!'}
        </Text>

        <Text style={styles.eventDetailTitle}>Location</Text>
        <Image source={maps} style={styles.eventMaps} />

        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => handleAppNavigation('Order Detail')}>
          <Text style={styles.textButton}>Buy Tickets</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
