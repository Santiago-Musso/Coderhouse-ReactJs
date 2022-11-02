import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const { cartQuantityItems } = useContext(CartContext)
  const quantityItems = cartQuantityItems()

  return quantityItems !== 0
    ? (
      <>
        ({quantityItems})
        <i className='fa-solid fa-cart-shopping' />
      </>
      )
    : (
      <i className='fa-solid fa-cart-shopping' />
      )
}

export default CartWidget
