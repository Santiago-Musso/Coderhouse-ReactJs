import { useState } from 'react'
import { Button, Container, Form, FormGroup, FormLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchOrder = () => {
  const [order, setOrder] = useState('')

  const handleChange = e => {
    setOrder(e.target.value)
  }
  const handleSubmit = e => e.preventDefault()

  return (
    <Container className='d-flex justify-content-center' style={{ height: '70vh' }}>
      <Form className='m-auto w-50' onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Ingrese numero de pedido</FormLabel>
          <Form.Control type='text' value={order} onChange={handleChange} />
        </FormGroup>
        <FormGroup className='d-flex flex-row-reverse'>
          <Button className='m-2'><Link className='text-decoration-none text-white' to={`/order/${order}`}>Buscar</Link></Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default SearchOrder
