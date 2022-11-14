import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import profilePicture from '../../assets/images/profile1.jpg';
import addCard from '../../assets/images/add-card.png';
import paymentCard from '../../assets/images/payment-card.png';
import paymentCard2 from '../../assets/images/payment-card2.png';

export default function EditProfile(props) {
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

        {/* Form Edit */}
        <Text style={styles.labelForm}>Name</Text>
        <TextInput
          placeholder="Aziz Akbar Ashshiddiq"
          style={styles.nameForm}
        />

        <Text style={styles.labelForm}>Username</Text>
        <View style={styles.flexForm}>
          <TextInput placeholder="@azkar-sh" style={styles.form} />
          <TouchableOpacity>
            <Text style={styles.editForm}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Email</Text>
        <View style={styles.flexForm}>
          <TextInput placeholder="azkar.sh@ymail.com" style={styles.form} />
          <TouchableOpacity>
            <Text style={styles.editForm}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Phone</Text>
        <TextInput placeholder="081234567890" style={styles.form} />

        <Text style={styles.labelForm}>Gender</Text>
        <TextInput placeholder="Aziz Akbar Ashshiddiq" style={styles.form} />
      </View>
    </ScrollView>
  );
}
