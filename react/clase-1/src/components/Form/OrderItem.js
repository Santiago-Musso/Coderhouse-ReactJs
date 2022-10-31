import React from 'react'
import { Card, Container } from 'react-bootstrap'

const OrderItem = ({ product }) => {
  const imgStyle = {
    height: '120px',
    width: '120px'
  }

  return (
    <Card>
      <Card.Body className='d-flex'>
        <Card.Img src={product.img} style={imgStyle} className='rounded' />
        <Container className='d-flex flex-column'>
          <Card.Title className='d-flex justify-content-between'>
            {product.name}
          </Card.Title>
          <Card.Body>
            <p>{product.description}</p>
            <div className='d-flex justify-content-between'>
              <h6 className='d-block'>Cantidad: {product.amount}</h6>
              <h6 className='d-block'>${product.price * product.amount}</h6>
            </div>
          </Card.Body>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default OrderItem
