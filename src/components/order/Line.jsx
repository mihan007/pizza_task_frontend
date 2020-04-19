import { Button, Form, Grid, GridColumn, Image, List } from 'semantic-ui-react'
import React from 'react'

export default class Line extends React.Component {
  render () {
    return (
      <List selection verticalAlign="middle" divided>
        <List.Item>
          <Grid columns={2} verticalAlign={'middle'}>
            <GridColumn width={3}>
              <Image size={'tiny'} className={'orderImage'} verticalAlign='middle' src={this.props.image}
                     alt={this.props.title} rounded/>
            </GridColumn>
            <GridColumn textAlign={'left'}>
              <List.Content>{this.props.title}</List.Content>
            </GridColumn>
            <GridColumn width={2} textAlign={'right'}>
              <List.Content verticalAlign={'middle'}>
                <Form>
                  <Form.Group>
                    <Button fluid size={'small'} onClick={() => this.props.minus(this.props)}>
                      -
                    </Button>
                    <Form.Field>
                      <input type='text' value={this.props.addedCount}/>
                    </Form.Field>
                    <Button fluid size={'small'} onClick={() => this.props.plus(this.props)}>
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
  }
}
