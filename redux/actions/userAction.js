import { SET_USER_LOG_IN, SET_USER_LOG_OUT } from '../types';

export const setUserLogIn = (data) => {
  return {
    type: SET_USER_LOG_IN,
    payload: data,
  };
};

export const setUserLogOut = () => {
  return {
    type: SET_USER_LOG_OUT,
  };
};
