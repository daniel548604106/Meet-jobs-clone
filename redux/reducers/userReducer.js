import { SET_USER_LOG_IN, SET_USER_LOG_OUT } from '../types';
import Cookie from 'js-cookie';
const initialState = {
  userInfo: {},
  isUserLoggedIn: false,
};

// COUNTER REDUCER
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOG_IN:
      return { ...initialState, isUserLoggedIn: true, userInfo: payload };
    case SET_USER_LOG_OUT:
      Cookie.remove('token');
      return { ...initialState, isUserLoggedIn: false, userInfo: {} };
    default:
      return state;
  }
};
