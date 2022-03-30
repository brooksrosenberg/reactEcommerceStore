import './App.css';
import { Home } from './pages/Home'
import Category from './components/Categories'
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
      </Routes>
    </Router>
  );
}

export default App;
