import axios from '../../utils/axios';

export const getDataUser = () => {
  return {
    type: 'GET_DATA_USER',
    payload: axios.get('user'),
  };
};

export const getDataUserById = id => {
  return {
    type: 'GET_DATA_USER_BY_ID',
    payload: axios.get(`user/${id}`),
  };
};

export const updateDataUser = (id, data) => {
  return {
    type: 'UPDATE_DATA_USER',
    payload: axios.patch(`user/${id}`, data),
  };
};

export const updatePasswordUser = (id, data) => {
  return {
    type: 'UPDATE_PASSWORD_USER',
    payload: axios.patch(`user/updatePassword/${id}`, data),
  };
};

export const updateImageUser = (id, data) => {
  return {
    type: 'UPDATE_IMAGE_USER',
    payload: axios.patch(`user/uploadImage/${id}`, data),
  };
};
