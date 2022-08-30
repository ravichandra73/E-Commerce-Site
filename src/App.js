import React from 'react';
import Header from './HomePage/Header/Header.js';
import './App.css';
import Home from './HomePage/Home/Home.js';
import {Routes,Route } from "react-router-dom"
import Checkout from './Checkout/Checkout.js';
import Signin from './SignIn/Signin.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<><Header></Header> <Home></Home></>} />
          <Route path='/checkout' element={<><Header></Header><Checkout></Checkout></>}></Route>
          <Route path='/signin' element={<><Signin></Signin></>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
