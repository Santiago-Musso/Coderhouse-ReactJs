import React from "react";
import CategoryItem from "./CategoryItem";
import { ButtonGroup, Container } from "react-bootstrap";

const CategoryBar = ({categories}) => {
    return(
        <Container fluid className="d-flex justify-content-center">
            <ButtonGroup type="checkbox">
                <CategoryItem categories={categories}></CategoryItem>
            </ButtonGroup>
        </Container>
    )
}

export default CategoryBar