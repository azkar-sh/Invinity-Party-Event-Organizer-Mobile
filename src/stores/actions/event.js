import axios from '../../utils/axios';

export const getDataEvent = (dateShow, name) => {
  return {
    type: 'GET_DATA_EVENT',
    payload: axios.get(
      `event?page=&limit=10&sort=&dateTimeShow=${dateShow}&name=${name}`,
    ),
  };
};

export const getDataEventById = id => {
  return {
    type: 'GET_DATA_EVENT_BY_ID',
    payload: axios.get(`event/${id}`),
  };
};

export const updateDataEvent = (id, data) => {
  return {
    type: 'UPDATE_DATA_EVENT',
    payload: axios.patch(`event/${id}`, data),
  };
};

export const createDataEvent = data => {
  return {
    type: 'CREATE_DATA_EVENT',
    payload: axios.post('event', data),
  };
};

export const deleteDataEvent = id => {
  return {
    type: 'DELETE_DATA_EVENT',
    payload: axios.delete(`event/${id}`),
  };
};
