import './App.css';
import { Home } from './pages/Home'
import Category from './components/Categories'
import Cart from './pages/Shoppingcart';
import RegisterPlaceholder from './components/RegisterPlaceholder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/category'
          element={<Category/>}
        />
        <Route
          path='/register'
          element={<RegisterPlaceholder/>}
        />
        <Route
          path='/cart'
          element={<Cart/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
