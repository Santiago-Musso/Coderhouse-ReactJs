/* eslint-disable no-unused-vars */
import { doc, getDoc, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'
import ErrorNotFound from '../NotFound/ErrorNotFound'
import OrderListItem from './OrderListItem'

const ShowCheckoutOrder = () => {
  const { id } = useParams()
  const [order, setOrder] = useState({})
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState(false)

  const getOrder = async () => {
    const collectionOrder = collection(db, 'orders')
    const docRef = doc(collectionOrder, id)

    getDoc(docRef)
      .then(data => {
        const orderInfo = data.data()
        if (orderInfo) {
          orderInfo.date = new Date(orderInfo.date.seconds * 1000).toLocaleString()
          setOrder({ ...orderInfo, id })
          setLoader(false)
        } else {
          setError(true)
          setLoader(false)
        }
      })
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
    : error
      ? (
        <ErrorNotFound />
        )
      : (
        <Container className='w-50'>
          <h3>Datos de la orden</h3>
          <h6>
            Nombre: {order.buyer.name}
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
