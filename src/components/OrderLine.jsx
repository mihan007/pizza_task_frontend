import { Button, Form, Grid, GridColumn, Image, List } from 'semantic-ui-react'
import React from 'react'

const OrderLineComponent = ({ title, id, image, addedCount, plus, minus }) => (
  <List selection verticalAlign="middle" divided>
    <List.Item>
      <Grid columns={2} verticalAlign={'middle'}>
        <GridColumn width={3}>
          <Image size={'tiny'} className={'orderImage'} verticalAlign='middle' src={image} alt={title} rounded/>
        </GridColumn>
        <GridColumn textAlign={'left'}>
          <List.Content>{title}</List.Content>
        </GridColumn>
        <GridColumn width={2} textAlign={'right'}>
          <List.Content verticalAlign={'middle'}>
            <Form>
              <Form.Group>
                <Button fluid size={'small'}>
                  -
                </Button>
                <Form.Field>
                  <input type='text' value={addedCount}/>
                </Form.Field>
                <Button fluid size={'small'}>
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
