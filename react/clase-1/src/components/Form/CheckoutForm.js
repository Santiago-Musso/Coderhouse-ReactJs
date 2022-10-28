import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Form, Button, Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const CheckoutForm = () => {
  const [user, setUser] = useState({})
  const [loader, setLoader] = useState(false)

  const containerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: '77.5vh'
  }

  const { cart, totalCartValue, clearCart } = useContext(CartContext)

  const handleSumbit = e => {
    setLoader(true)
    e.preventDefault()

    const order = {
      buyer: user,
      items: cart,
      total: totalCartValue(),
      date: serverTimestamp()
    }

    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, order)
      .then(result => {
        clearCart()
        console.log(order, result.id)
      })
      .catch(error => console.error(error))
      .finally(setLoader(false))
  }

  const handleChanges = e => {
    const changedValue = e.target.getAttribute('name')

    const userProps = {}
    userProps[changedValue] = e.target.value
    setUser({ ...user, ...userProps })
  }

  return loader
    ? (
      <Container
        style={{ height: '80vh' }}
        className='d-flex justify-content-center'
      >
        <Spinner animation='border' className='m-auto' />
      </Container>
      )
    : cart.length === 0
      ? (
        <div style={containerStyle}>
          <h3>Todavia no hay productos en el carrito</h3>
          <h3>
            <Link className='text-decoration-none' to='/'>
              Click Aquí
            </Link>{' '}
            para agregar
          </h3>
        </div>
        )
      : (
        <Container className='w-50'>
          <Form onSubmit={handleSumbit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Ingresar email'
                onChange={handleChanges}
                name='email'
              />
              <Form.Label>Repetir email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Repetir email'
                name='emailRepeated'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nombre'
                name='name'
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicLastName'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type='text'
                placeholder='Apellido'
                name='lastName'
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Telefono'
                name='phoneNumber'
                onChange={handleChanges}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Enviar orden
            </Button>
          </Form>
        </Container>
        )
}

export default CheckoutForm
