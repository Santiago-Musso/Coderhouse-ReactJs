import { db } from '../../services/firebaseConfig'
import { deleteDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const AdminTableItems = ({ product }) => {
  const deleteProduct = e => {
    const idToErase = e.target.getAttribute('id')
    deleteDoc(doc(db, 'products', idToErase))
      .then(() => {
        toast.success('Producto borrado con exito!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      })
  }

  return (
    <>
      <tbody>
        <tr>
          <td className='col'>{product.name}</td>
          <td className='col'>{product.category}</td>
          <td className='col'>${product.price}</td>
          <td className='col'>{product.stock}</td>
          <td>
            <button
              className='btn-close'
              id={product.id}
              onClick={deleteProduct}
            />
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default AdminTableItems
