import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './styles';

import slidersIcon from '../../assets/images/sliders-icon.png';
import areaIcon from '../../assets/images/area-purple-icon.png';
import musicIcon from '../../assets/images/music-orange-icon.png';

import EventCard from '../../components/EventCard';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search Event"
        placeholderColor="#FFFFFF"
        style={styles.form}
      />
      {/* Date Selection */}
      <View style={styles.dateContainer}>
        <View>
          <Text style={styles.dateText}>13</Text>
          <Text style={styles.dateText}>Mon</Text>
        </View>

        <View>
          <Text style={styles.dateText}>14</Text>
          <Text style={styles.dateText}>Tue</Text>
        </View>

        <View>
          <Text style={styles.dateText}>15</Text>
          <Text style={styles.dateText}>Wed</Text>
        </View>

        <View>
          <Text style={styles.dateText}>16</Text>
          <Text style={styles.dateText}>Thu</Text>
        </View>

        <View>
          <Text style={styles.dateText}>17</Text>
          <Text style={styles.dateText}>Fri</Text>
        </View>
      </View>

      <View style={styles.eventContainer}>
        {/* Events for You */}
        <View style={styles.eventTitle}>
          <Text style={styles.title}>Events For You</Text>
          <TouchableOpacity style={styles.sliderBox}>
            <Image source={slidersIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <EventCard />
        </View>

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
