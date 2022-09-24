import React from "react"
import {Container, Navbar} from 'react-bootstrap';
import ItemListContainer from './ItemListContainer'

const SALUDO = 'Coderhousers'

const NavBar = () => {
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <a href="#home"><img src="https://raw.githubusercontent.com/Santiago-Musso/Coderhouse/main/images/logoheader.webp" alt="Logo Heladeria Trapani"></img></a>
                <ItemListContainer saludo={SALUDO}></ItemListContainer>
            </Container>
        </Navbar>
    )
}

export default NavBar