import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './styles';

import slidersIcon from '../../assets/images/sliders-icon.png';
import areaIcon from '../../assets/images/area-purple-icon.png';
import musicIcon from '../../assets/images/music-orange-icon.png';

import EventCard from '../../components/EventCard';

export default function Home(props) {
  const handleAppNav = path => {
    props.navigation.navigate('AppScreen', {screen: path});
  };

  const dummyData = [
    {
      id: 1,
      title: 'Sights & Sounds Exhibition',
      date: 'Wed, 15 Nov, 4:00 PM',
      image: require('../../assets/images/event-1.png'),
    },
    {
      id: 2,
      title: 'See it in Gold Class',
      date: 'Wed, 15 Nov, 4:00 PM',
      image: require('../../assets/images/event-2.png'),
    },
    {
      id: 3,
      title: 'Sights & Sounds Exhibition',
      date: 'Wed, 15 Nov, 4:00 PM',
      image: require('../../assets/images/event-1.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search Event"
        placeholderTextColor="#FFFFFF"
        style={styles.form}
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
        <ScrollView horizontal={true}>
          {dummyData.map(item => (
            <EventCard
              key={item.id}
              data={item}
              navigation={props.navigation}
            />
          ))}
        </ScrollView>

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
