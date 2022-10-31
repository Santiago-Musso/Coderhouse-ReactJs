import { doc, getDoc, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'
import OrderListItem from './OrderListItem'

const ShowCheckoutOrder = () => {
  const { id } = useParams()
  const [order, setOrder] = useState({})
  const [loader, setLoader] = useState(true)

  const getOrder = async () => {
    const collectionOrder = collection(db, 'orders')
    const docRef = doc(collectionOrder, id)

    const data = (await getDoc(docRef)).data()
    data.date = (new Date(data.date.seconds * 1000)).toLocaleString()
    setOrder({ ...data, id })
    setLoader(false)
  }

  useEffect(() => {
    getOrder()
  }, [id])

  return loader
    ? (
      <Container
        style={{ height: '80vh' }}
        className='d-flex justify-content-center'
      >
        <Spinner animation='border' className='m-auto' />
      </Container>
      )
    : (
      <Container className='w-50'>
        <h3>Datos de la orden</h3>
        <h6>
          Nombre: {order.buyer.name} Apellido: {order.buyer.lastName}
        </h6>
        <h6>Fecha y hora: {order.date}</h6>
        <h6>Numero de orden: {order.id}</h6>
        <h6>Pedido: </h6>
        <OrderListItem>{order.items}</OrderListItem>
        <h4 className='text-end'>Total: ${order.total}</h4>
      </Container>
      )
}

export default ShowCheckoutOrder
