import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from 'react-bootstrap';
import ItemList from "./ItemList";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where} from  'firebase/firestore'
import {db} from '../../services/firebaseConfig'

const ItemListContainer = () => {
    const {category} = useParams() //Lee el parametro 
    const [items, setItems] = useState([]) //Estado de todos los items
    const [categories, setCategories] = useState([]) //Estado de las categorias agregadas dinamicamente
    const [loader, setLoader] = useState(true) //Estado del loader

    //Al ir tecleando le agrega display-none a los productos que no coincidan con la busqueda
    const handleSearchBar = (e) => {
        document.querySelectorAll('.card').forEach( product => {
            const word = product.textContent.toLowerCase()
            word.includes(e.target.value.toLowerCase()) ? product.classList.remove("d-none") : product.classList.add("d-none")
        })
    }

    useEffect(() => {
        const collectionProduct = collection(db, 'products')
        const collectionCategories = collection(db, 'categories')

        const reference =  category 
            ? query(collectionProduct, where('category', '==', category))
            : collectionProduct

        getDocs(reference)
            .then(data => {
            const products = data.docs.map( product => {
                    return({
                        id :product.id,
                        ...product.data()
                    })
            })
            setItems(products)
            //Saca el loader una vez que cargan todos los items
            setLoader(false)
        })

        getDocs(collectionCategories)
            .then(data => {
                const categories = data.docs.map( category => {
                    return (category.data().name)
                })
                setCategories(categories)
        })
        
        return () => setLoader(true) //Limpia el loader
    }, [category])

    return(
        loader
        ?   <Container style={{height: '80vh'}} className="d-flex justify-content-center" ><Spinner animation="border" className="m-auto"/></Container>
        :   <Container>
                <SearchBar onChangeEvent={handleSearchBar}></SearchBar>
                <CategoryBar categories={categories}></CategoryBar>
                <Row>
                    <ItemList products={items}></ItemList>
                </Row>
            </Container>
        
    )
}

export default ItemListContainer