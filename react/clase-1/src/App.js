import React from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Main/ItemListContainer'

function App() {
  const REGRET = 'Coderhousers'

  return (
    <React.Fragment>
      <NavBar regret={REGRET}></NavBar>
      <main>
        <ItemListContainer></ItemListContainer>
      </main>
    </React.Fragment>
  )
}

export default App;
  