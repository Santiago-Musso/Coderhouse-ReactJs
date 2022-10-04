import React from "react";
import CategoryItem from "./CategoryItem";
import { Button, ButtonGroup, Container } from "react-bootstrap";

const CategoryBar = ({categories,onClickCategory,onClickDeleteFilter}) => {
    return(
        <Container fluid className="d-flex justify-content-center">
            <ButtonGroup type="checkbox" onClick={onClickCategory}>
                <CategoryItem categories={categories}></CategoryItem>
            </ButtonGroup>
            <Button variant="light" id="deleteFilters" onClick={onClickDeleteFilter}>BORRAR FILTROS</Button>
        </Container>
    )
}

export default CategoryBar