import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import {doc, getDoc, collection} from  'firebase/firestore'
import {db} from '../../services/firebaseConfig'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        const collectionProd = collection(db,'products')
        const docRef = doc(collectionProd,id)
        getDoc(docRef).then(product => {
            setProduct({
                id: product.id, 
                ...product.data()
            })
        })
    }, [id])

    return(
        <ItemDetail product={product}></ItemDetail>
    )
}

export default ItemDetailContainer