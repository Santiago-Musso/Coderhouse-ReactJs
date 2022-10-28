import { createContext, useState } from 'react'

export const CartContext = createContext()

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]) // Estado del carrito

  const addToCart = (product, amount) => {
    const productToAdd = { ...product, amount }
    const productRepeated = cart.find(product => product.id === productToAdd.id) // Chequea si hay algun producto repetido

    if (productRepeated !== undefined) {
      setCart(
        cart.map(prod => {
          // Si el producto repetido setea el producto con la nueva cantidad
          if (prod === productRepeated) {
            prod.amount = amount
            return prod
          } else {
            return prod
          }
        })
      )
    } else {
      // Si el producto no esta repetido lo agrega normalmente
      setCart([...cart, productToAdd])
    }
  }

  // Borra el producto obteniendo el ID guardado en el atributo del boton en el carrito
  const eraseProduct = e => {
    const productToErase = e.target.getAttribute('productid')
    const newCart = cart.filter(prod => prod.id !== productToErase)
    setCart(newCart)
  }
  // Devuelve la cantidad del producto en el carrito si es que ya ha sido adicionado
  const getQuantityProduct = id => {
    const product = cart.find(product => product.id === id)
    return product?.amount
  }
  // Devuelve el importe total del carrito
  const totalCartValue = () => {
    let totalValue = 0
    cart.map(product => {
      totalValue += product.price * product.amount
      return false
    })
    return totalValue
  }
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        eraseProduct,
        getQuantityProduct,
        totalCartValue,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default Provider
