import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from 'react-bootstrap';
import ItemList from "./ItemList";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import {useParams} from 'react-router-dom'
import {collection, getDocs} from  'firebase/firestore'
import {db} from '../../services/firebaseConfig'


const ItemListContainer = () => {
    const {category} = useParams()
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)

    const handleSearchBar = (e) => {
        document.querySelectorAll('.card').forEach( product => {
            const word = product.textContent.toLowerCase()
            word.includes(e.target.value.toLowerCase()) ? product.classList.remove("d-none") : product.classList.add("d-none")
        })
    }

    useEffect(() => {
        const collectionProduct = collection(db, 'products')

        getDocs(collectionProduct)
            .then(data => {
            const products = data.docs.map( product => {
                    return({
                        id :product.id,
                        ...product.data()
                    })
            })
            category === undefined ? setItems(products) : setItems(products.filter(products => products.category === category))
            setCategories([...new Set(products.map(product => product.category))])
            setLoader(false)
        })
        return () => setLoader(true)
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