import './App.css';
import { Home } from './pages/Home'
import Category from './components/Categories'
import RegisterPlaceholder from './components/RegisterPlaceholder';
// <<<<<<< shoppingcart
// import SignIn from './components/SignIn';
// import Pay from './components/Pay';
// import Cart from './pages/Shoppingcart';
// import Success from './components/Success';

// =======
// // <<<<<<< login-page
// // import SignIn from './components/SignIn';
// // =======
// // import Pay from './components/Pay'
// // import Success from './components/Success';

// // >>>>>>> main
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
// <<<<<<< shoppingcart
//           path='/signin'
//           element={<SignIn/>}
//           />
//           <Route
//           path='/pay'
//           element={<Pay/>}
//         />
//         <Route
//           path='/success'
//           element={<Success/>}
//         />
//         <Route
//           path='/cart'
//           element={<Cart/>}
// =======
// // <<<<<<< login-page
// //           path='/signin'
// //           element={<SignIn/>}
// // =======
// //           path='/pay'
// //           element={<Pay/>}
// //         />
// //         <Route
// //           path='/success'
// //           element={<Success/>}
// // >>>>>>> main
// >>>>>>> main
        />
      </Routes>
    </Router>
  );
}

export default App;
