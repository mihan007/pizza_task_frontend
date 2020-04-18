import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import OrderLine from '../containers/OrderLine'
import _ from 'lodash'

export default class OrderComponent extends Component {
  render () {
    return (
      <Grid centered columns={1} className={'order'}>
        <Grid.Column width={8}>
          <h2>Your order</h2>
          {_.sortBy(this.props.items, function (o) {return o.title}).map(product => (<OrderLine {...product} />))}
          {this.props.count > 0 ? '' : <h4><i>Nothing. Maybe you aren't hungry yet?</i></h4>}
          <i>Work in progress...</i>
        </Grid.Column>
      </Grid>
    )
  }
}
