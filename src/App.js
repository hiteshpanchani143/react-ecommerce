import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
               <Route path='/' element={<LoginPage/>}/>
               <Route  path='/home'  element={<> <Home/>  </>}/>
               <Route path='/signin' element={<SignUpPage/>}/>
           </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

