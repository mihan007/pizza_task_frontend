export const addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const removeFromCart = obj => ({
  type: 'REMOVE_FROM_CART',
  payload: obj,
});

export const clearCart = obj => ({
  type: 'CLEAR_CART',
});

export const plus = obj => ({
  type: 'PLUS_AT_ORDER',
  payload: obj,
});

export const minus = id => ({
  type: 'MINUS_AT_ORDER',
  payload: id,
});
