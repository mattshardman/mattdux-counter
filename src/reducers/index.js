// import { combineReducers } from 'redux';
import { combineReducers } from '../mattdux';
import counter from './counterReducer';

export default combineReducers({ counter });
