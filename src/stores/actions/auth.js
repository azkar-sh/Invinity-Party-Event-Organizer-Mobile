import axios from '../../utils/axios';

export const signUp = data => {
  return {
    type: 'SIGNUP',
    payload: axios.post('auth/register', data),
  };
};

export const login = data => {
  return {
    type: 'LOGIN',
    payload: axios.post('auth/login', data),
  };
};
