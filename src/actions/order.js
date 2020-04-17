export const plus = obj => ({
  type: 'PLUS_AT_ORDER',
  payload: obj,
});

export const minus = id => ({
  type: 'MINUS_AT_ORDER',
  payload: id,
});
