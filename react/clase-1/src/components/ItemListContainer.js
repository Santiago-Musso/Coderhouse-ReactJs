import React from "react";
import {Container, Navbar, Row,Col} from 'react-bootstrap';
import CartWidget from './CartWidget'


const ItemListContainer = (props) => {
    return(
        <Container>
            <Row>
                <Col sm='6' className="text-center"><h6>Bienvenido {props.saludo}!</h6></Col>
                <Col><Navbar.Brand href="#home">Home</Navbar.Brand></Col>
                <Col><Navbar.Brand href="#tienda">Tienda</Navbar.Brand></Col>
                <Col><Navbar.Brand href="#carrito"><CartWidget></CartWidget> Carrito</Navbar.Brand></Col>               
            </Row>               
        </Container>
    )
}

export default ItemListContainer