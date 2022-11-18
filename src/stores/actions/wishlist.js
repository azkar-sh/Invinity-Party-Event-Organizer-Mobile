import axios from '../../utils/axios';

export const getDataWishlistByUserId = id => {
  return {
    type: 'GET_DATA_WISHLIST_BY_USER_ID',
    payload: axios.get(`wishlist/user/${id}`),
  };
};

export const deleteWishlist = id => {
  return {
    type: 'DELETE_WISHLIST',
    payload: axios.delete(`wishlist/${id}`),
  };
};
