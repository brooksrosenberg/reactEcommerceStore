import './App.css';
import { Home } from './pages/Home'
import Category from './components/Categories'
import RegisterPlaceholder from './components/RegisterPlaceholder';
import SignIn from './components/SignIn';
import Pay from './components/Pay';
import Cart from './pages/Shoppingcart';
import Success from './components/Success';
import Product from './pages/Product';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import ProductList from './components/ProductList';


function App() {
  return ( 
    <Router>
      <Navbar/>
      <Announcement/>
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
        <Route 
          path='/product'
          element={<Product/>}
        />
        <Route 
          path='/product/:id'
          element={<Product/>}
        />  
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
