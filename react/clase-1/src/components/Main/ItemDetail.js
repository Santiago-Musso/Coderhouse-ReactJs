import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import ItemCount from './ItemCount'
import { toast } from 'react-toastify'

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityProduct } = useContext(CartContext)

  const imgStyle = {
    height: '400px',
    width: '400px'
  }

  // Setea en el carrito la cantidad y el producto leyendo el atributo amount del boton, dispara el toast
  const handleClick = e => {
    const amountSelected = Number(e.target.getAttribute('amount'))
    addToCart(product, amountSelected)
    toast.success('Producto agregado correctamente', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

  return (
    <Card>
      <Card.Body className='d-flex'>
        <Card.Img
          variant='top'
          src={product.img}
          style={imgStyle}
          className='rounded'
        />
        <Container className='d-flex flex-column'>
          <Card.Title>{product.name}</Card.Title>
          <Card.Body>
            <p>{product.description}</p>${product.price}
            <ItemCount
              stock={product.stock}
              onClick={handleClick}
              initial={getQuantityProduct(product.id)}
            />
          </Card.Body>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail
