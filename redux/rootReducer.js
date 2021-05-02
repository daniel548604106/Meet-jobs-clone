import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
};

export default combineReducers(reducers);
