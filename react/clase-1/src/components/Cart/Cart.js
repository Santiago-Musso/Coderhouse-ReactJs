import React, {useContext} from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const {cart, eraseProduct} = useContext(CartContext)
    
    return (
        cart.map(prod => <CartItem product={prod} key={prod.id} handleEvents={eraseProduct}></CartItem>)
    )
}

export default Cart
