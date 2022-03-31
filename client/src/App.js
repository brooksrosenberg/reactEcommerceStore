import './App.css';
import { Home } from './pages/Home'
import Category from './components/Categories'
import RegisterPlaceholder from './components/RegisterPlaceholder';
// <<<<<<< login-page
// import SignIn from './components/SignIn';
// =======
// import Pay from './components/Pay'
// import Success from './components/Success';

// >>>>>>> main
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
// <<<<<<< login-page
//           path='/signin'
//           element={<SignIn/>}
// =======
//           path='/pay'
//           element={<Pay/>}
//         />
//         <Route
//           path='/success'
//           element={<Success/>}
// >>>>>>> main
        />
      </Routes>
    </Router>
  );
}

export default App;
