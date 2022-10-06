import React from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Main/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/Main/ItemDetailContainer';

function App() {
  const REGRET = 'Coderhousers'

  return (
    <BrowserRouter>
      <NavBar regret={REGRET}></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
  