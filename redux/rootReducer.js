import { combineReducers } from 'redux';
import { globalReducer } from './reducers/globalReducer';
import { userReducer } from './reducers/userReducer';

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  global: globalReducer,
};

export default combineReducers(reducers);
