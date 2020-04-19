import { Button, Form } from 'semantic-ui-react'
import React from 'react'

export default class DeliveryForm extends React.Component {
  render () {
    return (
      <div className={'contactForm'}>
        <h2>Delivery and contact information</h2>
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
        </Form>
        <br/>
        <Button primary fluid>Place the order</Button>
        <i>Work in progress...</i>
      </div>
    )
  }
}
