import React from "react"
import {Container, Navbar} from 'react-bootstrap';
import CartWidget from './CartWidget'


const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Brand href="#tienda">Tienda</Navbar.Brand>
                <Navbar.Brand href="#carrito"><CartWidget></CartWidget> Carrito</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar