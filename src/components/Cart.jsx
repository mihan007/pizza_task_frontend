import { Button, Image, List } from 'semantic-ui-react'
import React from 'react'

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={() => removeFromCart(id)} color="red">
          Remove
        </Button>
      </List.Content>
      <Image avatar src={image}/>
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
)

export default CartComponent;
