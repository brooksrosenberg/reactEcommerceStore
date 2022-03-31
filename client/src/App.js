import './App.css';
import { Home } from './pages/Home'
import Category from './components/Categories'
import RegisterPlaceholder from './components/RegisterPlaceholder';
import SignIn from './components/SignIn';
import Pay from './components/Pay';
import Cart from './pages/Shoppingcart';
import Success from './components/Success';

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
          path='/signin'
          element={<SignIn/>}
          />
          <Route
          path='/pay'
          element={<Pay/>}
        />
        <Route
          path='/success'
          element={<Success/>}
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
