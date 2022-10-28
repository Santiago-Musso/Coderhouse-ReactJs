import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import {doc, getDoc, collection} from  'firebase/firestore'
import {db} from '../../services/firebaseConfig'
import ItemDetail from "./ItemDetail"
import { ToastContainer } from "react-toastify"
import { Container, Spinner } from "react-bootstrap"
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = () => {
    const {id} = useParams() // ID de cada producto en la BDD
    const [product, setProduct] = useState({}) // Estado del producto a mostrar
    const [loader, setLoader] = useState(true)

    useEffect( () => {
        const collectionProd = collection(db,'products')
        const docRef = doc(collectionProd,id)
        getDoc(docRef).then(product => {
            setProduct({
                id: product.id, 
                ...product.data()
            })
            setLoader(false)
        })

        return ()=> setLoader(true)
    }, [id])

    return(
        loader
        ?   <Container style={{height: '80vh'}} className="d-flex justify-content-center" ><Spinner animation="border" className="m-auto"/></Container>
        :
            <>
                <ItemDetail product={product}></ItemDetail>
                <ToastContainer/>
            </> 

    )
}

export default ItemDetailContainer