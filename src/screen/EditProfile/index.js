import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {
  getDataUserById,
  updateDataUser,
  updateImageUser,
} from '../../stores/actions/user';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';

export default function EditProfile(props) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [editableUsername, setEditableUsername] = useState(true);
  const [editableEmail, setEditableEmail] = useState(true);
  const [editablePhone, setEditablePhone] = useState(true);
  const [editableBirthday, setEditableBirthday] = useState(true);

  const [checked, setChecked] = useState('male');
  const userData = useSelector(state => state.user.userData[0]);

  const [form, setForm] = useState({});
  const [formImage, setFormImage] = useState({});

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = () => {
    try {
      dispatch(updateDataUser(userData.userId, form)).then(
        response => alert('Update Data Successfull!'),
        dispatch(getDataUserById(userData.userId)),
        // props.navigation.navigate('Profile'),
      );
    } catch (error) {
      console.log(error.value);
    }
  };

  const handleUpdatePhoto = () => {
    // console.log(formImage);
    try {
      const formDataImage = new FormData();
      formDataImage.append('image', formImage.image);
      dispatch(updateImageUser(userData.userId, formDataImage))
        .then(
          response => alert(response.value.data.message),
          dispatch(getDataUserById(userData.userId)),
        )
        .catch(error => {
          // console.log(error);
          alert(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const cameraLaunched = async () => {
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
              const source = {
                uri: response.assets[0].uri,
                type: response.assets[0].type,
                name: response.assets[0].fileName,
              };
              setFormImage({...formImage, image: source});
            }
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const galleryLaunched = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message: 'Cool Photo App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchImageLibrary(
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
              const source = {
                uri: response.assets[0].uri,
                type: response.assets[0].type,
                name: response.assets[0].fileName,
              };
              setFormImage({...formImage, image: source});
            }
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log(error);
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
          <TouchableOpacity
            style={styles.profileBorder}
            onPress={() => setModalVisible(true)}>
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
          <RadioButton.Group
            onValueChange={text => handleChange('gender', text)}>
            <View style={styles.radioButtons}>
              <RadioButton value="Male" />
              <Text style={{marginRight: 30}}>Male</Text>

              <RadioButton value="Female" />
              <Text>Female</Text>
            </View>
          </RadioButton.Group>
        </View>

        <Text style={styles.labelForm}>Profession</Text>
        <View style={styles.editableFormPicker}>
          <Picker
            selectedValue={form.profession}
            onValueChange={itemValue => handleChange('profession', itemValue)}>
            <Picker.Item
              label={
                userData.profession
                  ? userData.profession
                  : 'Choose your profession'
              }
              value=""
            />
            <Picker.Item label="Student" value="Student" />
            <Picker.Item label="Teacher" value="Teacher" />
            <Picker.Item label="Doctor" value="Doctor" />
            <Picker.Item label="Engineer" value="Engineer" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <Text style={styles.labelForm}>Nationality</Text>
        <View style={styles.editableFormPicker}>
          <Picker
            selectedValue={form.nationality}
            onValueChange={itemValue => handleChange('nationality', itemValue)}>
            <Picker.Item
              label={
                userData.nationality
                  ? userData.nationality
                  : 'Choose your nationality'
              }
              value=""
            />
            <Picker.Item label="Indonesia" value="Indonesia" />
            <Picker.Item label="Malaysia" value="Malaysia" />
            <Picker.Item label="Singapore" value="Singapore" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="Japan" value="Japan" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
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

        <TouchableOpacity style={styles.buyButton} onPress={handleUpdatePhoto}>
          <Text style={styles.textButton}>Save</Text>
        </TouchableOpacity>

        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Update Image</Text>
                <TouchableOpacity
                  style={styles.buttonUpdateImage}
                  onPress={cameraLaunched}>
                  <Text style={styles.textButtonUpdateCamera}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonUpdateImage}
                  onPress={galleryLaunched}>
                  <Text style={styles.textButtonUpdateGalery}>Gallery</Text>
                </TouchableOpacity>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
}
