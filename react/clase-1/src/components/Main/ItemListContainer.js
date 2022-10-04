import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from 'react-bootstrap';
import ItemList from "./ItemList";
import productList from "../../mockProducts"
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [filteredItems, setFilteredItems] = useState([])

    const handleSearchBar = (e) => {
        document.querySelectorAll('.card').forEach( product => {
            const word = product.textContent.toLowerCase()
            word.includes(e.target.value.toLowerCase()) ? product.classList.remove("d-none") : product.classList.add("d-none")
        })
    }
    
    const handleClickCategory = (e) => {
        setFilteredItems(items.filter( item => item.category === e.target.id))
    }
    
    const deleteFilters = () => {
        setFilteredItems(items)
    }
    
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productList)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts().then(response => {
            setItems(response)
            setFilteredItems(response)
            setCategories([...new Set(response.map(product => product.category))])
        })
        
    }, [])

    if(items.length === 0 ) return <Spinner animation="border" />

    return(
        <Container>
            <SearchBar onChangeEvent={handleSearchBar}></SearchBar>
            <CategoryBar categories={categories} onClickCategory={handleClickCategory} onClickDeleteFilter={deleteFilters}></CategoryBar>
            <Row>
                <ItemList products={filteredItems}></ItemList>
            </Row>
        </Container>
    )
}

export default ItemListContainer