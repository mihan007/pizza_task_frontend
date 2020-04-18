import { Button, Form, Grid, GridColumn, Image, List } from 'semantic-ui-react'
import React from 'react'

const OrderLineComponent = product => (
  <List selection verticalAlign="middle" divided>
    <List.Item>
      <Grid columns={2} verticalAlign={'middle'}>
        <GridColumn width={3}>
          <Image size={'tiny'} className={'orderImage'} verticalAlign='middle' src={product.image} alt={product.title} rounded/>
        </GridColumn>
        <GridColumn textAlign={'left'}>
          <List.Content>{product.title}</List.Content>
        </GridColumn>
        <GridColumn width={2} textAlign={'right'}>
          <List.Content verticalAlign={'middle'}>
            <Form>
              <Form.Group>
                <Button fluid size={'small'} onClick={() => product.minus(product)}>
                  -
                </Button>
                <Form.Field>
                  <input type='text' value={product.addedCount}/>
                </Form.Field>
                <Button fluid size={'small'} onClick={() => product.plus(product)}>
                  +
                </Button>
              </Form.Group>
            </Form>
          </List.Content>
        </GridColumn>
      </Grid>
    </List.Item>
  </List>
)

export default OrderLineComponent
