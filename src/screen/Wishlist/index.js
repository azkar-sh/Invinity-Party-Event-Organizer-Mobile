import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import BlueWhite from '../../components/CustomButton/blueWhite';
import axios from '../../utils/axios';

export default function EditProfile(props) {
  const wishlist = useSelector(state => state.wishlist.wishlistData);
  const event = useSelector(state => state.event.eventData);

  const handleNavHome = () => {
    props.navigation.navigate('Home');
  };

  return (
    <ScrollView style={{backgroundColor: '#3366FF'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Wishlist</Text>
        {wishlist.length === 0 ? (
          <>
            <Text style={styles.subtitle}>
              You don't have any wishlist yet. Please add some items to your
              wishlist!
            </Text>
            <BlueWhite text="Back To Homepage" onPress={handleNavHome} />
          </>
        ) : (
          <FlatList
            data={wishlist}
            keyExtractor={item => item.wishlistId}
            renderItem={({item}) => <Text>{item.eventId}</Text>}
          />
        )}
      </View>
    </ScrollView>
  );
}
