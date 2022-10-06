import React, { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import {useParams} from 'react-router-dom'
import productList from "../../mockProducts"
import ItemCount from "./ItemCount"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    const imgStyle = {
        height: '400px',
        width: '400px'
    }

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productList)
            }, 500)
        })
    }

    useEffect( () => {
        getProducts().then(response => {
            setProduct(response.find(product => product.id === Number(id)))
        })
    }, [id])

    return(
        <Card>
            <Card.Body className="d-flex">
                <Card.Img variant="top" src={product.img} style={imgStyle} className='rounded' />
                <Container className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Body>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        ${product.price}
                        <ItemCount stock={product.stock}></ItemCount>
                    </Card.Body>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default ItemDetailContainer