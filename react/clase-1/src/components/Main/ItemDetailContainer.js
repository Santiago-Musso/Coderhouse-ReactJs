import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import productList from "../../mockProducts"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

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
        <ItemDetail product={product}></ItemDetail>
    )
}

export default ItemDetailContainer