import React, { useContext } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({product}) => {
    const {addToCart} = useContext(CartContext)

    const imgStyle = {
        height: '400px',
        width: '400px'
    }

    const handleClick = (e) => {
        const amountSelected = Number(e.target.getAttribute('amount'))
        addToCart(product,amountSelected)
    }

    return(
        <Card>
            <Card.Body className="d-flex">
                <Card.Img variant="top" src={product.img} style={imgStyle} className='rounded' />
                <Container className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Body>
                        <p>{product.description}</p>
                        ${product.price}
                        <ItemCount stock={product.stock} onClick={handleClick}></ItemCount>
                    </Card.Body>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail