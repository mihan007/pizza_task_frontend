import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import appAxios from '../helpers/axios'
import _ from 'lodash'

import ProductCard from '../containers/ProductCard'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'

class App extends Component {
  processData (data) {
    return _.transform(data.data, function (result, item) {
      result.push(_.merge({ 'id': item.id }, item.attributes))
    })
  }

  componentWillMount () {
    const { setProducts } = this.props
    appAxios.get('/products.json').then(({ data }) => {
      let processedData = this.processData(data)
      setProducts(processedData)
    })
  }

  render () {
    const { products, isReady } = this.props
    return (
      <Container>
        <Menu/>
        <Filter/>
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Loading...'
            : products.map((product, i) => <ProductCard key={i} {...product} />)}
        </Card.Group>
      </Container>
    )
  }
}

export default App
