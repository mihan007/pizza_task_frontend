import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import appAxios from '../helpers/axios'
import _ from 'lodash'

import ProductCard from '../containers/ProductCard'
import Filter from '../containers/Filter'
import IndexMenu from '../containers/Menu'
import Order from '../containers/Order'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import CheckoutMenu from './CheckoutMenu'

class App extends Component {
  processData (data) {
    return _.transform(data.data, function (result, item) {
      result.push(_.merge({ 'id': item.id }, item.attributes))
    })
  }

  componentWillMount () {
    const { setProducts } = this.props
    appAxios.get('/api/v1/products').then(({ data }) => {
      let processedData = this.processData(data)
      setProducts(processedData)
    })
  }

  render () {
    const { products, isReady } = this.props
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <IndexMenu/>
              <Filter/>
              <Card.Group itemsPerRow={4}>
                {!isReady
                  ? 'Loading...'
                  : products.map((product, i) => <ProductCard key={i} {...product} />)}
              </Card.Group>
            </Route>
            <Route exact path="/checkout">
              <CheckoutMenu/>
              <Order/>
            </Route>
          </Switch>
        </Router>
      </Container>
    )
  }
}

export default App