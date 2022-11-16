import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import profilePicture from '../../assets/images/profile1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';

export default function EditProfile(props) {
  const [editableUsername, setEditableUsername] = useState(true);
  const [editableEmail, setEditableEmail] = useState(true);
  const [editablePhone, setEditablePhone] = useState(true);
  const [editableGender, setEditableGender] = useState(true);
  const [editableProfession, setEditableProfession] = useState(true);
  const [editableNationality, setEditableNationality] = useState(true);
  const [editableBirthday, setEditableBirthday] = useState(true);
  // const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState([]);

  const [form, setForm] = useState({});

  useEffect(() => {
    // getUserId();
    getData();
  }, []);

  // const getUserId = async () => {
  //   const data = await AsyncStorage.getItem('userId');
  //   setUserId(data);
  // };

  const getData = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const result = await axios.get(`user/${userId}`);
      setUserData(result.data.data[0]);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const update = await axios.patch(`user/${userId}`, form);
      alert(update.data.msg);
      props.navigation.replace('AppScreen', {screen: 'Profile'});
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const handleAppNavigation = path => {
    props.navigation.navigate('AppScreen', {screen: path});
  };

  const userImage = {
    uri: `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userData.image}`,
  };
  const randomImage = {
    uri: `https://ui-avatars.com/api/?size=512&background=random&name=${userData.username}`,
  };

  return (
    <ScrollView style={styles.backgroundTop}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.profileBorder}>
            <Image
              source={userData.image !== null ? userImage : randomImage}
              style={styles.profilePicture}
            />
          </TouchableOpacity>
          <Text style={styles.profileName}>
            {userData.name ? userData.name : 'Not set'}
          </Text>
          <Text style={styles.profileJob}>
            {userData.profession ? userData.profession : 'Not set'}
          </Text>
        </View>

        {/* Form Edit */}
        <Text style={styles.labelForm}>Name</Text>
        <TextInput
          placeholder={userData.name ? userData.name : 'Not set'}
          style={styles.nameForm}
          onChangeText={text => handleChange('name', text)}
        />

        <Text style={styles.labelForm}>Username</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={
              userData.username ? `@${userData.username}` : 'Not set'
            }
            style={
              editableUsername ? styles.uneditableForm : styles.editableForm
            }
            editable={editableUsername ? false : true}
            onChangeText={text => handleChange('username', text)}
          />
          <TouchableOpacity>
            <Text
              style={styles.editForm}
              onPress={() => setEditableUsername(!editableUsername)}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Email</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={userData.email ? userData.email : 'Not set'}
            style={editableEmail ? styles.uneditableForm : styles.editableForm}
            editable={editableEmail ? false : true}
            onChangeText={text => handleChange('email', text)}
          />
          <TouchableOpacity>
            <Text
              style={styles.editForm}
              onPress={() => setEditableEmail(!editableEmail)}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Phone</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={userData.phone ? userData.phone : 'Not Set'}
            keyboardType="numeric"
            // {userData.phone ? userData.phone : 'Not set'}
            style={editablePhone ? styles.uneditableForm : styles.editableForm}
            editable={editablePhone ? false : true}
            onChangeText={text => handleChange('phone', text)}
          />
          <TouchableOpacity>
            <Text
              style={styles.editForm}
              onPress={() => setEditablePhone(!editablePhone)}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Gender</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={userData.gender ? userData.gender : '-'}
            style={editableGender ? styles.uneditableForm : styles.editableForm}
            editable={editableGender ? false : true}
            onChangeText={text => handleChange('gender', text)}
          />
          <TouchableOpacity>
            <Text
              style={styles.editForm}
              onPress={() => setEditableGender(!editableGender)}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Profession</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={userData.profession ? userData.profession : 'Not set'}
            style={
              editableProfession ? styles.uneditableForm : styles.editableForm
            }
            editable={editableProfession ? false : true}
            onChangeText={text => handleChange('profession', text)}
          />
          <TouchableOpacity>
            <Text
              style={styles.editForm}
              onPress={() => setEditableProfession(!editableProfession)}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Nationality</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={
              userData.nationality ? userData.nationality : 'Not set'
            }
            style={
              editableNationality ? styles.uneditableForm : styles.editableForm
            }
            editable={editableNationality ? false : true}
            onChangeText={text => handleChange('nationality', text)}
          />
          <TouchableOpacity>
            <Text
              style={styles.editForm}
              onPress={() => setEditableNationality(!editableNationality)}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelForm}>Birthday Date</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={
              userData.dateOfBirth ? userData.dateOfBirth : 'Not Set'
            }
            style={
              editableBirthday ? styles.uneditableForm : styles.editableForm
            }
            editable={editableBirthday ? false : true}
            onChangeText={text => handleChange('dateOfBirth', text)}
          />
          <TouchableOpacity>
            <Text
              style={styles.editForm}
              onPress={() => setEditableBirthday(!editableBirthday)}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyButton} onPress={handleSubmit}>
          <Text style={styles.textButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
