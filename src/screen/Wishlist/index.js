import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import BlueWhite from '../../components/CustomButton/blueWhite';
import axios from '../../utils/axios';
import moment from 'moment/moment';

export default function EditProfile(props) {
  const wishlist = useSelector(state => state.wishlist.wishlistData);

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
            renderItem={({item}) => (
              <>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Detail Event', {
                      eventId: item.eventId,
                    })
                  }>
                  <View style={styles.wishlistContainer}>
                    <View style={styles.dateContainer}>
                      <Text style={styles.date}>
                        {moment(item.event.dateTimeShow).format('DD')}
                      </Text>
                      <Text style={styles.month}>
                        {moment(item.event.dateTimeShow).format('MMM')}
                      </Text>
                    </View>
                    <View>
                      <Text>{item.event.name}</Text>
                      <Text>{item.event.location}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
}
