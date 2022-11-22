import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {getDataUserById, updateDataUser} from '../../stores/actions/user';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function EditProfile(props) {
  const dispatch = useDispatch();
  const [editableUsername, setEditableUsername] = useState(true);
  const [editableEmail, setEditableEmail] = useState(true);
  const [editablePhone, setEditablePhone] = useState(true);
  const [editableGender, setEditableGender] = useState(true);
  const [editableProfession, setEditableProfession] = useState(true);
  const [editableNationality, setEditableNationality] = useState(true);
  const [editableBirthday, setEditableBirthday] = useState(true);

  const userData = useSelector(state => state.user.userData[0]);

  const [form, setForm] = useState({});

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = () => {
    try {
      const formData = new FormData();
      formData.append('id', userData.id);
      formData.append('username', form.username);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('image', {
        uri: form.image,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
      dispatch(updateDataUser(userData.userId, formData));
      // dispatch(updateDataUser(userData.userId, form)).then(
      //   response => alert(response.value.data.message),
      //   dispatch(getDataUserById(userData.userId)),
      // );
    } catch (error) {
      console.log(error.value);
    }
  };

  const selectPhotos = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message: 'Cool Photo App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorMessage);
            }
            if (response.assets) {
              const source = {uri: response.assets[0].uri};
              setForm({...form, image: source});
            }
          },
        );
      } else {
        // launchCamera();
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(form);

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
          <TouchableOpacity style={styles.profileBorder} onPress={selectPhotos}>
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
          placeholderTextColor="gray"
          style={styles.nameForm}
          onChangeText={text => handleChange('name', text)}
        />

        <Text style={styles.labelForm}>Username</Text>
        <View style={styles.flexForm}>
          <TextInput
            placeholder={
              userData.username ? `@${userData.username}` : 'Not set'
            }
            placeholderTextColor="gray"
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
            placeholderTextColor="gray"
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
            placeholderTextColor="gray"
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
            placeholderTextColor="gray"
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
            placeholderTextColor="gray"
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
            placeholderTextColor="gray"
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
            placeholderTextColor="gray"
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
