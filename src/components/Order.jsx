import React, { Component } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import OrderLine from '../containers/OrderLine'
import _ from 'lodash'

export default class OrderComponent extends Component {
  render () {
    return (
      <Grid centered columns={1} className={'order'}>
        <Grid.Column width={8}>
          <h2>Your order</h2>
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
                ${(this.props.totalUsdPrice + this.props.deliveryUsdPrice) / 100}</p>,
              <h2>Delivery and contact information</h2>,
              <Form>
                <Form.Group>
                  <Form.Input label='Address' placeholder='Address' width={16}/>
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Name' placeholder='Name' width={6}/>
                  <Form.Input label='Email' placeholder='Email' width={6}/>
                  <Form.Input label='Phone' placeholder='Phone' width={4}/>
                </Form.Group>
                <Form.Checkbox label='Please call me to confirm the order'/>
              </Form>,
              <br/>,
              <Button primary fluid>Place the order</Button>,
              <i>Work in progress...</i>
            ]
          }
        </Grid.Column>
      </Grid>
    )
  }
}
