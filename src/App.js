import React from 'react'
import './App.css'
import NavBar from './components/Header/NavBar'
import ItemListContainer from './components/Main/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/Main/ItemDetailContainer'
import Provider from './context/CartContext'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import CheckoutForm from './components/Form/CheckoutForm'
import Admin from './components/Admin/Admin'
import ShowCheckoutOrder from './components/Order/ShowCheckoutOrder'
import SearchOrder from './components/Order/SearchOrder'

function App () {
  const REGRET = 'Coderhousers'

  return (
    <Provider>
      <BrowserRouter>
        <NavBar regret={REGRET} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutForm />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/order/:id' element={<ShowCheckoutOrder />} />
          <Route path='/order' element={<SearchOrder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App