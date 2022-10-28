import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({categories}) => {
    // Mapea las categorias del estado del parent y las muestra debajo del navbar
    return(
        categories.map(category => <Link key={category} to={`/category/${category}`} className="text-decoration-none m-1 text-dark">{category.toUpperCase()}</Link>)
    )
}

export default CategoryItem