import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import AdminTableItems from './AdminTableItems'

const AdminTable = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const collectionProduct = collection(db, 'products')

    getDocs(collectionProduct).then(data => {
      const products = data.docs.map(product => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setItems(products)
    })
  }, [])

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>NOMBRE</th>
          <th scope='col'>CATEGORIA</th>
          <th scope='col'>PRECIO</th>
          <th scope='col'>STOCK</th>
          <th scope='col' />
        </tr>
      </thead>
      {items.map(product => <AdminTableItems product={product} key={product.id} />)}
    </table>
  )
}

export default AdminTable
