import _ from 'lodash'
import React from 'react'
import Line from '../../containers/order/Line'

export default class LinesAndTotal extends React.Component {
  render () {
    return (
      <div>
        {_.sortBy(this.props.items, function (o) {return o.title}).map(product => (<Line {...product} />))}
        <span>Delivery price: €{(this.props.deliveryEurPrice) / 100}, ${(this.props.deliveryUsdPrice) / 100}</span>
        <p className={'totalLine'}>
          Total price:
          €{(this.props.totalEurPrice + this.props.deliveryEurPrice) / 100},&nbsp;
          ${(this.props.totalUsdPrice + this.props.deliveryUsdPrice) / 100}
        </p>
      </div>
    )
  }
}
