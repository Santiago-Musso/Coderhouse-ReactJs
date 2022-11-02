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
import { Container, Row, Col } from 'react-bootstrap'

function App () {
  const REGRET = 'Coderhousers'

  return (
    <Provider>
      <BrowserRouter>
        <Container fluid>
          <Row> <Col><NavBar regret={REGRET} /></Col></Row>
          <Row>
            <Col>
              <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/category/:category' element={<ItemListContainer />} />
                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/checkout' element={<CheckoutForm />} />
                <Route exact path='/admin' element={<Admin />} />
                <Route exact path='/order/:id' element={<ShowCheckoutOrder />} />
                <Route exact path='/order' element={<SearchOrder />} />
              </Routes>
            </Col>
          </Row>
          <Row><Col><Footer /></Col></Row>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
