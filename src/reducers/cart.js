import _ from 'lodash'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_AT_ORDER':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'MINUS_AT_ORDER':
      const amountOfProduct = _.filter(state.items, function (o) { if (o.id === action.payload.id) return o }).length
      let shouldRemove = true
      if (amountOfProduct === 1) {
        shouldRemove = window.confirm('Do you want to completely remove ' + action.payload.title + ' pizza from the order?')
      }
      if (!shouldRemove) {
        return state
      }
      return {
        ...state,
        items: _.without(state.items, _.find(state.items, { id: action.payload.id }))
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(o => o.id !== action.payload)
      }
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }
    default:
      return state
  }
};
