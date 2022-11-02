import { createContext, useState } from 'react'

export const CartContext = createContext()

const Provider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, amount) => {
    const productToAdd = { ...product, amount }
    const productRepeated = cart.find(product => product.id === productToAdd.id)

    if (productRepeated !== undefined) {
      setCart(
        cart.map(prod => {
          if (prod === productRepeated) {
            prod.amount = amount
            return prod
          } else {
            return prod
          }
        })
      )
    } else {
      setCart([...cart, productToAdd])
    }
  }
  const eraseProduct = e => {
    const productToErase = e.target.getAttribute('productid')
    const newCart = cart.filter(prod => prod.id !== productToErase)
    setCart(newCart)
  }
  const getQuantityProduct = id => {
    const product = cart.find(product => product.id === id)
    return product?.amount
  }
  const totalCartValue = () => {
    let totalValue = 0
    cart.map(product => {
      totalValue += product.price * product.amount
      return false
    })
    return totalValue
  }
  const clearCart = () => setCart([])

  const cartQuantityItems = () => {
    let quantityItems = 0

    cart.forEach(prod => {
      quantityItems += prod.amount
    })

    return quantityItems
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        eraseProduct,
        getQuantityProduct,
        totalCartValue,
        clearCart,
        cartQuantityItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default Provider
