import axios from '../../utils/axios';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getDataWishlistByUserId} from '../../stores/actions/wishlist';

export default function EventHeader(props) {
  const dispatch = useDispatch();
  const eventId = props.route.params.eventId;
  const [addedWishlist, setAddedWishlist] = useState(false);
  const user = useSelector(state => state.auth.userData);
  const userId = user.userId;

  const dataAddWishlist = {
    userId: userId,
    eventId: eventId,
  };

  useEffect(() => {
    wishlistCheck();
  }, []);

  const wishlistCheck = async () => {
    try {
      const response = await axios.get('/wishlist');
      const data = response.data.data;
      const check = data.filter(item => item.eventId === eventId);
      if (check.length > 0) {
        setAddedWishlist(true);
      } else {
        setAddedWishlist(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openDrawer = () => {
    props.navigation.goBack();
  };

  const addToWishlist = () => {
    if (!addedWishlist) {
      axios.post('/wishlist', dataAddWishlist);
      setAddedWishlist(true);
      dispatch(getDataWishlistByUserId(userId));
      alert('Added to wishlist');
    } else {
      axios.post('/wishlist', dataAddWishlist);
      setAddedWishlist(false);
      dispatch(getDataWishlistByUserId(userId));
      alert('Removed from wishlist');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Iconicons name="arrow-back" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={addToWishlist}>
        {addedWishlist ? (
          <Materialicons name="favorite" size={25} color="red" />
        ) : (
          <Materialicons name="favorite-border" size={25} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  textContainer: {
    color: '#FFFFFF',
  },
});
