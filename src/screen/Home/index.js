import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import slidersIcon from '../../assets/images/sliders-icon.png';
import areaIcon from '../../assets/images/area-purple-icon.png';
import musicIcon from '../../assets/images/music-orange-icon.png';

import EventCard from '../../components/EventCard';
import {useDispatch, useSelector} from 'react-redux';
import {getDataEvent} from '../../stores/actions/event';

export default function Home(props) {
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState({});
  const [searchName, setSearchName] = useState('');
  const eventCards = useSelector(state => state.event.allEvent);

  useEffect(() => {
    getData();
  }, [searchName]);

  const getData = () => {
    try {
      const result = dispatch(getDataEvent(searchName));
      setEventData(result.value.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAppNav = path => {
    props.navigation.navigate('AppScreen', {screen: path});
  };

  console.log('eventData', eventData);

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search Event"
        placeholderTextColor="#FFFFFF"
        style={styles.form}
        onChangeText={text => setSearchName(text)}
      />
      {/* Date Selection */}
      <View style={styles.dateContainer}>
        <TouchableOpacity>
          <Text style={styles.dateText}>13</Text>
          <Text style={styles.dateText}>Mon</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.dateText}>14</Text>
          <Text style={styles.dateText}>Tue</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.dateText}>15</Text>
          <Text style={styles.dateText}>Wed</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.dateText}>16</Text>
          <Text style={styles.dateText}>Thu</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.dateText}>17</Text>
          <Text style={styles.dateText}>Fri</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.eventContainer}>
        {/* Events for You */}
        <View style={styles.eventTitle}>
          <Text style={styles.title}>Events For You</Text>
          <TouchableOpacity style={styles.sliderBox}>
            <Image source={slidersIcon} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={eventCards}
          horizontal={true}
          renderItem={({item}) => (
            <EventCard
              key={item.eventId}
              data={item}
              navigation={props.navigation}
            />
          )}
        />

        {/* <ScrollView horizontal={true}>
          {eventData?.data?.map(item => (
            <EventCard
              key={item.eventId}
              data={item}
              navigation={props.navigation}
            />
          ))}
        </ScrollView> */}

        {/* Discover */}
        <Text style={styles.title}>Discover</Text>
        <ScrollView horizontal={true} style={styles.discoverContainer}>
          <TouchableOpacity style={styles.discoverBoxButton}>
            <Image source={areaIcon} />
            <Text style={styles.discoverButtonText1}>Your Area</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.discoverBoxButton}>
            <Image source={musicIcon} />
            <Text style={styles.discoverButtonText2}>Music</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.discoverBoxButton}>
            <Image source={areaIcon} />
            <Text style={styles.discoverButtonText3}>Movies</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Discover */}
    </ScrollView>
  );
}
