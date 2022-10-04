import React from "react";
import { InputGroup, Form} from "react-bootstrap";

const SearchBar = ({onChangeEvent}) => {
    return(
    <InputGroup className="mb-3 w-75 m-auto">
        <Form.Control onChange={onChangeEvent} placeholder="Buscar productos..."/>
    </InputGroup>
    )
}

export default SearchBar