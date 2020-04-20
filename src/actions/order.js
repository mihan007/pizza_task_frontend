import appAxios from '../helpers/axios'

export const handleOrderSubmit = function (payload) {
  const postData = {
    cart: payload.cart,
    deliveryTo: payload.orderFields
  }
  appAxios.post('/api/v1/orders', postData).then(({ data }) => {
    payload.handleOrderSubmitted(data)
  })
  return {
    type: 'ORDER_FORM_SUBMIT',
    payload: payload
  }
}

export const handleOrderSubmitted = obj => ({
  type: 'ORDER_FORM_SUBMITTED',
  payload: obj
})

export const resetDeliveryForm = obj => ({
  type: 'ORDER_FORM_RESET',
  payload: obj
})

export const resetCartAndBackToIndexPage = function (payload) {
  return {
    type: 'ORDER_FORM_RESET',
    payload: payload
  }
}
