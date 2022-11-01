import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import AdminTable from './AdminTable'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    img: '',
    category: ''
  })

  const handleChangesInput = e => {
    const changedValue = e.target.getAttribute('name')

    const item = {}
    item[changedValue] = e.target.value
    setNewItem({ ...newItem, ...item })
  }
  const addNewProduct = async () => {
    const collectionProduct = collection(db, 'products')
    const collectionCategories = collection(db, 'categories')
    const q = query(collectionCategories, where('name', '==', newItem.category))

    getDocs(q).then(data => {
      const category = data.docs.length

      if (category === 0) addDoc(collectionCategories, { name: newItem.category })
    })

    addDoc(collectionProduct, newItem).then(() => {
      setNewItem({
        name: '',
        price: '',
        stock: '',
        description: '',
        img: '',
        category: ''
      })
      toast.success('Producto agregado con exito!', {
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
    <Container className='w-75'>
      <div className='input-group m-2'>
        <Form.Control
          type='text'
          className='form-control'
          placeholder='Nombre producto'
          name='name'
          onChange={handleChangesInput}
          value={newItem.name}
        />
      </div>
      <div className='input-group m-2'>
        <Form.Control
          type='text'
          className='form-control'
          placeholder='Categoria'
          name='category'
          onChange={handleChangesInput}
          value={newItem.category}
        />
      </div>
      <div className='input-group m-2'>
        <Form.Control
          type='number'
          className='form-control'
          placeholder='Precio'
          name='price'
          onChange={handleChangesInput}
          value={newItem.price}
        />
      </div>
      <div className='input-group m-2'>
        <Form.Control
          type='number'
          className='form-control'
          placeholder='Stock'
          name='stock'
          onChange={handleChangesInput}
          value={newItem.stock}
        />
      </div>
      <div className='input-group m-2'>
        <Form.Control
          type='text'
          className='form-control'
          placeholder='URL Imagen'
          name='img'
          onChange={handleChangesInput}
          value={newItem.img}
        />
      </div>
      <div className='input-group m-2'>
        <Form.Control
          type='text'
          className='form-control'
          placeholder='Descripcion'
          name='description'
          onChange={handleChangesInput}
          value={newItem.description}
        />
      </div>
      <div className='input-group m-2'>
        <button
          type='button'
          className='btn btn-success'
          onClick={addNewProduct}
        >
          Agregar
        </button>
        <Link to='/'>
          <button type='button' className='btn btn-danger'>
            Salir
          </button>
        </Link>
      </div>
      <AdminTable />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Container>
  )
}

export default Admin
