import { SET_USER_LOG_IN, SET_USER_LOG_OUT } from '../types';
const initialState = {
  userInfo: {},
  isUserLoggedIn: false,
};

// COUNTER REDUCER
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOG_IN:
      return { ...initialState, isUserLoggedIn: true };
    case SET_USER_LOG_OUT:
      return { ...initialState, isUserLoggedIn: false };
    default:
      return state;
  }
};
