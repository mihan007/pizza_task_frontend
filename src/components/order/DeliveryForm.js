import { Button, Form } from 'semantic-ui-react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Field } from 'redux-form'

export default function DeliveryForm (props) {
  const history = useHistory()

  const resetCart = function () {
    history.push('/')
    props.resetCartAndBackToIndexPage()
  }

  function renderCheckbox (field) {
    return (<Form.Checkbox
      checked={!!field.input.value}
      name={field.input.name}
      label={field.label}
      onChange={(e, { checked }) => field.input.onChange(checked)}
      disabled={props.order_id}
    />)
  }

  return (
    <div className={'contactForm'}>
      <h2>Delivery and contact information</h2>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group>
          <Field
            component={Form.Input}
            name="address"
            label='Address'
            placeholder='Address'
            width={16}
            required
            disabled={props.order_id}
          />
        </Form.Group>
        <Form.Group>
          <Field
            component={Form.Input}
            name="name"
            label='Name'
            placeholder='Name'
            width={6}
            disabled={props.order_id}
          />
          <Field
            component={Form.Input}
            name="email"
            label='Email'
            placeholder='Email'
            width={6}
            disabled={props.order_id}
          />
          <Field
            component={Form.Input}
            name="phone"
            label='Phone'
            placeholder='Phone'
            width={4}
            required
            disabled={props.order_id}
          />
        </Form.Group>
        <Field
          component={renderCheckbox}
          label="Please call me to confirm the order"
          name="isCallRequired"
        />
        <br/>
        {props.order_id ?
          [<h4>We will deliver order at {props.ready_at}</h4>,
            <p>To track progress and return to the order later use the link&nbsp;
              <wbr/>
              <Link target={'_blank'}
                    to={'/order/' + props.order_id}>{window.location.protocol + '//' + window.location.host + '/order/' + props.order_id}</Link>
            </p>
          ] : ''}
        {props.order_id ?
          <Button onClick={resetCart} fluid secondary size={'mini'} className={'backToPizzaListBtn'}>Clear
            shopping cart and back to the pizza list</Button> :
          <Link to='/'>
            <Button fluid secondary size={'mini'} className={'backToPizzaListBtn'}>Back to the pizza list</Button>
          </Link>
        }
        {props.order_id ? '' :
          <Button
            primary
            fluid
            type={'submit'}
            loading={props.loading}
            disabled={props.loading}>Place the order
          </Button>
        }
      </Form>
      <i>Work in progress...</i>
    </div>
  )
}
