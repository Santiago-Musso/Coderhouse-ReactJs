import React from "react";
import { Button } from "react-bootstrap";

const CategoryItem = ({categories}) => {
    return(
        categories.map(category => <Button variant="light" key={category} id={category}>{category.toUpperCase()}</Button>)
    )
}

export default CategoryItem