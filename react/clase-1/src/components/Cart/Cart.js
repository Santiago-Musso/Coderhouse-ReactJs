import CartListItem from './CartListItem'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'

const Cart = () => {
  const { cart, totalCartValue } = useContext(CartContext)

  const containerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: '77.5vh'
  }
  return cart.length === 0
    ? (
      <div style={containerStyle}>
        <h3>Todavia no hay productos en el carrito</h3>
        <h3>
          <Link className='text-decoration-none' to='/'>Click Aquí</Link>{' '} para agregar
        </h3>
      </div>
      )
    : (
      <div>
        <CartListItem />
        <h3 className='text-end p-4'>Total: ${totalCartValue()}</h3>
        <Link to='/checkout'>
          <div className='position-relative'>
            <Button className='btn btn-primary position-absolute top-0 end-0 m-3'>
              Checkout
            </Button>
          </div>
        </Link>
      </div>
      )
}

export default Cart
