import React, { Component } from 'react'
import { Menu, Popup, List, Button, Image, Sticky } from 'semantic-ui-react'

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Remove
        </Button>
      </List.Content>
      <Image avatar src={image}/>
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
)
export default class MenuComponent extends Component {
  render () {
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
            content={this.props.items.map(product => (
              <CartComponent {...product} />
            ))}
            on="click"
            hideOnScroll
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
