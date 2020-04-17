import React, { Component } from 'react'
import { Button, Menu, Popup } from 'semantic-ui-react'
import CartComponent from './Cart'
import { Link } from 'react-router-dom'

export default class IndexMenuComponent extends Component {
  render () {
    let Products = this.props.items.map(product => (<CartComponent {...product} />))
    return (
      <Menu fixed="top">
        <Menu.Item name="browse">Innosripta Pizza House</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="signup">
            Total: &nbsp; <b>€{this.props.totalEurPrice / 100}, ${this.props.totalUsdPrice / 100}</b>&nbsp;
          </Menu.Item>

          <Popup
            trigger={
              <Menu.Item name="help">
                Shopping Cart (<b>{this.props.count}</b>)
              </Menu.Item>
            }
            content={[Products, <Link to="/checkout"><Button fluid primary>Order</Button></Link>]}
            on="click"
            disabled={this.props.totalEurPrice === 0}
            hideOnScroll
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
