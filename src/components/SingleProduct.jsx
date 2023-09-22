import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';

const SingleProduct = ({product}) => {
  return (
    <div className='products'>
      <Card>
      <Card.Img variant='top' src={product.image} alt={product.name} />
      <Card.Body className='py-4'>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle style={{paddingBottom: 10}}>
          <span>₹ {product.price.split(".")[0]}</span>
          {product.fastDelivery ? (
            <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )
          }
          <Rating rating={product.ratings} />
        </Card.Subtitle>
        <Button disabled={!product.inStock} variant="primary">
          {!product.inStock ? "Out of Stock" : "Add to Cart"}
        </Button>
        <Button variant="danger">Remove from cart</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct;