import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from 'react-bootstrap';
import ItemList from "./ItemList";
import productList from "../../mockProducts"
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {
    const {category} = useParams()
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])

    const handleSearchBar = (e) => {
        document.querySelectorAll('.card').forEach( product => {
            const word = product.textContent.toLowerCase()
            word.includes(e.target.value.toLowerCase()) ? product.classList.remove("d-none") : product.classList.add("d-none")
        })
    }

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productList)
            }, 500)
        })
    }

    useEffect(() => {
        getProducts().then(response => {
            category === undefined ? setItems(response) : setItems(response.filter(products => products.category === category))
            setCategories([...new Set(response.map(product => product.category))])
        })
    }, [category])

    if(items.length === 0 ) return <Spinner animation="border"/>

    return(
        <Container>
            <SearchBar onChangeEvent={handleSearchBar}></SearchBar>
            <CategoryBar categories={categories}></CategoryBar>
            <Row>
                <ItemList products={items}></ItemList>
            </Row>
        </Container>
    )
}

export default ItemListContainer