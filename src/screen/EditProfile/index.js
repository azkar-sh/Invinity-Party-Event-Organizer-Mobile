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

import profilePicture from '../../assets/images/profile1.jpg';

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
        <View style={styles.flexForm}>
          <TextInput placeholder="081234567890" style={styles.form} />
          <TouchableOpacity>
            <Text style={styles.editForm}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Gender</Text>
        <View style={styles.flexForm}>
          <TextInput placeholder="Male" style={styles.form} />
          <TouchableOpacity>
            <Text style={styles.editForm}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Profession</Text>
        <View style={styles.flexForm}>
          <TextInput placeholder="Developer Web" style={styles.form} />
          <TouchableOpacity>
            <Text style={styles.editForm}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Nationality</Text>
        <View style={styles.flexForm}>
          <TextInput placeholder="Indonesia" style={styles.form} />
          <TouchableOpacity>
            <Text style={styles.editForm}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Birthday Date</Text>
        <View style={styles.flexForm}>
          <TextInput placeholder="24/10/2000" style={styles.form} />
          <TouchableOpacity>
            <Text style={styles.editForm}>Edit</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.textButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
