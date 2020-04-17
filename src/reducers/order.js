const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_AT_ORDER":
      return state;
    case "MINUS_AT_ORDER":
      return state;
    default:
      return state;
  }
};
