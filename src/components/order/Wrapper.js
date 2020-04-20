import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Empty from './Empty'
import NonEmpty from '../../containers/order/NonEmpty'

export default class Wrapper extends Component {
  render () {
    return (
      <Grid centered columns={1} className={'order'}>
        <Grid.Column width={8}>
          <h2>Your order</h2>
          {this.props.count > 0 ? <NonEmpty/> : <Empty/>}
        </Grid.Column>
      </Grid>
    )
  }
}
