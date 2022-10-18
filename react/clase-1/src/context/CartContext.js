import { createContext, useState } from "react"

export const CartContext = createContext()

const Provider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, amount) => {
        const productToAdd = {...product, amount}
        const productRepeated = cart.find(product => product.id === productToAdd.id)
        
        if(productRepeated !== undefined){
            setCart(cart.map((prod) => {
                if(prod === productRepeated){
                    prod.amount = amount
                    return prod
                }else{
                    return prod
                }
            }))
        }else{
            setCart([...cart,productToAdd])
        }
    }
    const eraseProduct = (e) => {
        const productToErase = Number(e.target.getAttribute('productid'))
        const newCart = cart.filter( prod => prod.id !== productToErase)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, eraseProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider