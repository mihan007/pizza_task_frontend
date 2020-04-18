import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import OrderLine from '../containers/OrderLine'
import _ from 'lodash'

export default class OrderComponent extends Component {
  render () {
    return (
      <Grid centered columns={1} className={'order'}>
        <Grid.Column width={8}>
          <h1>Your order</h1>
          {_.sortBy(this.props.items, function (o) {return o.title}).map(product => (<OrderLine {...product} />))}
          {this.props.count === 0 ?
            <h4><i>Nothing. Maybe you aren't hungry yet?</i></h4>
            : [
              <span>Delivery price:
                €{(this.props.deliveryEurPrice) / 100},
                ${(this.props.deliveryUsdPrice) / 100}
              </span>,
              <p className={'totalLine'}>Total price:
                €{(this.props.totalEurPrice + this.props.deliveryEurPrice) / 100},
                ${(this.props.totalUsdPrice + this.props.deliveryUsdPrice)/100}</p>,
              <h2>Delivery Address</h2>,
              <h2>Contact information</h2>,
              <Button primary fluid>Place the order</Button>,
              <i>Work in progress...</i>
            ]
          }
        </Grid.Column>
      </Grid>
    )
  }
}
