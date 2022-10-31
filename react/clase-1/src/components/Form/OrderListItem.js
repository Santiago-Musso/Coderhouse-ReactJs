import React from 'react'
import OrderItem from './OrderItem'

const OrderListItem = ({ children }) => {
  return children.map(prod => (
    <OrderItem
      product={prod}
      key={prod.id}
    />
  ))
}

export default OrderListItem
