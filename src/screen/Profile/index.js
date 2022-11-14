import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import profilePicture from '../../assets/images/profile1.jpg';
import addCard from '../../assets/images/add-card.png';
import paymentCard from '../../assets/images/payment-card.png';
import paymentCard2 from '../../assets/images/payment-card2.png';

export default function Profile(props) {
  const handleAppNavigation = path => {
    props.navigation.navigate('AppScreen', {screen: path});
  };

  return (
    <ScrollView style={styles.backgroundTop}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.profileBorder}>
            <Image source={profilePicture} style={styles.profilePicture} />
          </TouchableOpacity>
          <Text style={styles.profileName}>Aziz Akbar Ashshiddiq</Text>
          <Text style={styles.profileJob}>Developer</Text>
        </View>

        <View style={styles.addCard}>
          <Text style={styles.cardText}>Card</Text>
          <TouchableOpacity>
            <Image source={addCard} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={paymentCard} style={styles.paymentCard} />
          <Image source={paymentCard2} style={styles.paymentCard} />
        </ScrollView>
        <TouchableOpacity
          style={styles.flex}
          onPress={() => handleAppNavigation('Edit Profile')}>
          <Icon name="edit-3" size={24} color="#C1C5D0" />
          <Text style={styles.menuText}>Edit Profile</Text>
          <MaterialIcon
            name="navigate-next"
            size={30}
            color="#000"
            style={styles.arrow}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex}>
          <Icon name="unlock" size={24} color="#C1C5D0" />
          <Text style={styles.menuText}>Change Password</Text>
          <MaterialIcon
            name="navigate-next"
            size={30}
            color="#000"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
