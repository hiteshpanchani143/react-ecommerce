import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
               <Route  path='/'  element={<> <Home/>  </>}/>
               <Route path='/login' element={<LoginPage/>}/>
               <Route path='/signin' element={<SignUpPage/>}/>
               <Route path='/cart' element={<CartPage/>}/>
               <Route path='/checkout' element={<Checkout/>}/>
               <Route path='/product-details' element={<ProductDetailsPage/>}/>
           </Routes>
          </BrowserRouter>
    </div>
  );
}
export default App;

