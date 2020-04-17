import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class CheckoutMenuComponent extends Component {
  render () {
    return (
      <Menu fixed="top">
        <Menu.Item name="browse"><Link to='/'>Innosripta Pizza House</Link>&nbsp;<b>checkout your order</b></Menu.Item>
      </Menu>
    )
  }
}
