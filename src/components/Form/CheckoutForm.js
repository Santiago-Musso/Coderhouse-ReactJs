import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Form, Button, Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import ShowOrderNumber from './ShowOrderNumber'

const CheckoutForm = () => {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    emailRepeated: '',
    phoneNumber: ''
  })
  const [loader, setLoader] = useState(false)
  const [errorEmail, setErrorEmail] = useState('')
  const [order, setOrder] = useState('')

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
    e.preventDefault()

    if (user.email === user.emailRepeated) {
      setLoader(true)
      const newOrder = {
        buyer: user,
        items: cart,
        total: totalCartValue(),
        date: serverTimestamp()
      }

      const ordersCollection = collection(db, 'orders')

      addDoc(ordersCollection, newOrder)
        .then(result => {
          setOrder(result.id)
          clearCart()
        })
        .catch(error => console.error(error))
        .finally(setLoader(false))
    } else {
      setErrorEmail('border border-danger')
    }
  }

  const handleChangesInputs = e => {
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
    : order !== ''
      ? (
        <ShowOrderNumber>{order}</ShowOrderNumber>
        )
      : cart.length === 0
        ? (
          <div style={containerStyle}>
            <h3>Todavia no hay productos en el carrito</h3>
            <h3>
              <Link className='text-decoration-none' to='/'>Click Aquí</Link> para agregar
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
                  onChange={handleChangesInputs}
                  name='email'
                  value={user.email}
                />
                <Form.Label>Repetir email</Form.Label>
                <Form.Control
                  className={errorEmail}
                  type='email'
                  placeholder='Repetir email'
                  onChange={handleChangesInputs}
                  name='emailRepeated'
                  value={user.emailRepeated}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  onChange={handleChangesInputs}
                  value={user.name}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicLastName'>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Apellido'
                  name='lastName'
                  onChange={handleChangesInputs}
                  value={user.lastName}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Telefono'
                  name='phoneNumber'
                  onChange={handleChangesInputs}
                  value={user.phoneNumber}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Realizar compra
              </Button>
            </Form>
          </Container>
          )
}

export default CheckoutForm
