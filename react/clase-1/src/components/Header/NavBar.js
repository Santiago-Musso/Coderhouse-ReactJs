import React from 'react'
import CartWidget from './CartWidget'
import { Container, Navbar, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({ regret }) => {
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Link to='/'>
          <img
            src='https://raw.githubusercontent.com/Santiago-Musso/Coderhouse/main/images/logoheader.webp'
            alt='Logo Heladeria Trapani'
          />
        </Link>
        <Col sm='8' className='text-center'>
          <h6>Bienvenido {regret}!</h6>
        </Col>
        <Col>
          <Navbar.Brand>
            <Link to='/cart' className='text-decoration-none text-dark'>
              <CartWidget /> Carrito
            </Link>
          </Navbar.Brand>
        </Col>
      </Container>
    </Navbar>
  )
}

export default NavBar
