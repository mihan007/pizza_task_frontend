import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'

import products from './products';
import cart from './cart';
import filter from './filter';

export default combineReducers({
  products,
  cart,
  filter,
  form: formReducer
});
