import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/cart' exact>
          <Cart />
        </Route>
      </Routes>
    </div>
  )
}

export default App;