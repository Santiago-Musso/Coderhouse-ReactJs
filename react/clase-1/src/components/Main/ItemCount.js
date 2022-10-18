import { useState } from "react"
import { Button, Container, FormControl } from "react-bootstrap"

const ItemCount = ({stock,onClick}) => {
    const [amount, setAmount] = useState(0)

    const handleClick = (e) => {
        if(e.target.innerText === '-' && amount > 0){
            setAmount(lastAmount => lastAmount - 1)
        }else if (e.target.innerText === '+' && amount < stock){
            setAmount(lastAmount => lastAmount + 1)
        }
    }

    return(
        <Container className="d-flex flex-column align-items-center w-50">
            <Container className="d-flex">
                <Button className="btn-secondary" onClick={handleClick}>-</Button>
                <FormControl type="number" className="text-center" disabled readOnly value={amount}></FormControl>
                <Button className="btn-secondary" onClick={handleClick}>+</Button>
            </Container>
            <Button className="btn btn-secondary" onClick={onClick} amount={amount}>Añadir al carrito</Button>
        </Container>
    )
}


export default ItemCount