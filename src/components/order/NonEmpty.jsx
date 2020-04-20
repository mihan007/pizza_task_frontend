import React, { Component } from 'react'
import LinesAndTotal from '../../containers/order/LinesAndTotal'
import DeliveryForm from '../../containers/order/DeliveryForm'

export default class NonEmpty extends Component {
  render () {
    return (
      <div>
        <LinesAndTotal />
        <DeliveryForm />
      </div>
    )
  }
}
