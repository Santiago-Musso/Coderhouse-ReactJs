import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return(
        products.map( product => <Item product={product} key={product.id}></Item> )
    )
}

export default ItemList