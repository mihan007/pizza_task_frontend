const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER_FORM_SUBMIT':
      return {
        ...state,
        loading: true
      }
    case 'ORDER_FORM_SUBMITTED':
      return {
        ...state,
        loading: false,
        id: action.payload.order_id,
        ready_at: action.payload.ready_at
      }
    case 'ORDER_FORM_RESET':
      return {
        ...state,
        loading: false,
        id: '',
        ready_at: ''
      }
    default:
      return state
  }
};
