import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'

const ProductCard = product => {
  const { title, description, price_eur, price_usd, image, addToCart, addedCount } = product
  return (
    <Card>
      <div className="card-image">
        <Image src={image} alt={title}/>
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{description}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name="eur"/> {price_eur / 100}&nbsp;<Icon name="usd"/> {price_usd / 100}
      </Card.Content>
      <Button onClick={addToCart.bind(this, product)}>
        Add {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  )
}

export default ProductCard
