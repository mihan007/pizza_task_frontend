import React, { Component } from 'react'
import OrderList from '../../containers/order/LinesAndTotal'
import OrderForm from '../../containers/order/DeliveryForm'

export default class NonEmpty extends Component {
  render () {
    return (
      <div>
        <OrderList />
        <OrderForm />
      </div>
    )
  }
}
