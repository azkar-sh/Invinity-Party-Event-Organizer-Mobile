import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './styles';

import slidersIcon from '../../assets/images/sliders-icon.png';

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

      {/* Events for You */}
      <View style={styles.eventContainer}>
        <Text style={styles.title}>Events For You</Text>
        <TouchableOpacity style={styles.sliderBox}>
          <Image source={slidersIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
