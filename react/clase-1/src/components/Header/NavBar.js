import React from "react"
import CartWidget from "./CartWidget";
import {Container, Navbar, Col} from 'react-bootstrap';

const NavBar = ({regret}) => {
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <a href="/"><img src="https://raw.githubusercontent.com/Santiago-Musso/Coderhouse/main/images/logoheader.webp" alt="Logo Heladeria Trapani"></img></a>
                <Col sm='6' className="text-center"><h6>Bienvenido {regret}!</h6></Col>
                <Col><Navbar.Brand href="/">Home</Navbar.Brand></Col>
                <Col><Navbar.Brand href="#tienda">Tienda</Navbar.Brand></Col>
                <Col><Navbar.Brand href="#carrito"><CartWidget></CartWidget> Carrito</Navbar.Brand></Col>  
            </Container>
        </Navbar>
    )
}

export default NavBar