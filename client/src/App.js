import './App.css';
import { Home } from './pages/Home'
import Category from './components/Categories'
import RegisterPlaceholder from './components/RegisterPlaceholder';
import SignIn from './components/SignIn';
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
      </Routes>
    </Router>
  );
}

export default App;
