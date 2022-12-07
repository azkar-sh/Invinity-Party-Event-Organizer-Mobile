import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment/moment';

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
  const [searchDate, setSearchDate] = useState('');
  const eventCards = useSelector(state => state.event.allEvent);

  const [dateShow, setDateShow] = useState(moment().format('YYYY-MM-DD'));
  const [listDateShow, setListDateShow] = useState([]);

  useEffect(() => {
    getData();
  }, [searchName]);

  useEffect(() => {
    generateDate();
  }, [dateShow]);

  // useEffect(() => {
  //   handleSearchDate();
  // }, [dateShow]);

  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, 'days'),
      moment(dateShow).subtract(1, 'days'),
      moment(dateShow),
      moment(dateShow).add(1, 'days'),
      moment(dateShow).add(2, 'days'),
    ];
    setListDateShow(listDate);
  };

  const selectDate = date => {
    setDateShow(date);
  };

  const getData = () => {
    try {
      const result = dispatch(getDataEvent('', searchName));
      setEventData(result.value.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchDate = () => {
    try {
      const result = dispatch(getDataEvent(dateShow, ''));
      setEventData(result.value.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAppNav = path => {
    props.navigation.navigate('AppScreen', {screen: path});
  };

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
        {listDateShow.map((item, index) => (
          <TouchableOpacity
            key={index}
            // style={{margin: '0 10px'}}
            className={`btn btn-outline-primary ${index === 2 ? 'active' : ''}`}
            onClick={() => {
              selectDate(moment(item).format('YYYY-MM-DD'));
              handleSearchDate();
            }}>
            <Text style={{textAlign: 'center'}}>
              {moment(item).format('DD')}
            </Text>
            <Text>{moment(item).format('ddd')}</Text>
          </TouchableOpacity>
        ))}
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
