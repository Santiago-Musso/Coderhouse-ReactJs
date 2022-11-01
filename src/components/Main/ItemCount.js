import { useEffect, useState } from 'react'
import { Button, Container, FormControl } from 'react-bootstrap'

const ItemCount = ({ stock, onClick, initial = 1 }) => {
  const [amount, setAmount] = useState(initial)

  const handleClick = e => {
    if (e.target.innerText === '-' && amount > 1) {
      setAmount(lastAmount => lastAmount - 1)
    } else if (e.target.innerText === '+' && amount < stock) {
      setAmount(lastAmount => lastAmount + 1)
    }
  }

  useEffect(() => {
    setAmount(initial)
  }, [initial])

  return (
    <Container className='d-flex flex-column align-items-center w-50'>
      <Container className='d-flex'>
        <Button className='btn-secondary' onClick={handleClick}>-</Button>
        <FormControl
          type='number'
          className='text-center'
          disabled
          readOnly
          value={amount}
        />
        <Button className='btn-secondary' onClick={handleClick}>+</Button>
      </Container>
      <Button className='btn btn-secondary' onClick={onClick} amount={amount}>
        Añadir al carrito
      </Button>
    </Container>
  )
}

export default ItemCount
