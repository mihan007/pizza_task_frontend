import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import filter from './filter';
import order from './order'

export default combineReducers({
  products,
  cart,
  filter,
  order
});
