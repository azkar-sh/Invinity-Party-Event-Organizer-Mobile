import axios from '../../utils/axios';

export const getDataWishlistByUserId = id => {
  return {
    type: 'GET_DATA_WISHLIST_BY_USER_ID',
    payload: axios.get(`wishlist/user/${id}`),
  };
};

export const addWishlist = data => {
  return {
    type: 'ADD_WISHLIST',
    payload: axios.post('wishlist', data),
  };
};

export const deleteWishlist = id => {
  return {
    type: 'DELETE_WISHLIST',
    payload: axios.delete(`wishlist/${id}`),
  };
};
