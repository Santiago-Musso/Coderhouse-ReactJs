import React from "react";
import {Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Item = ({product}) =>{

    const imgStyle = {
        height: '250px'
    }

    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="text-center">
                <Card.Img variant="top" src={product.img} style={imgStyle}></Card.Img>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Body>${product.price}</Card.Body>
                    <Link to={`/item/${product.id}`} className="text-decoration-none text-white bg-secondary rounded p-1">Ver detalle</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item