import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Product from './Components/Products/Product';
import Category from './Components/Category/Category';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<>
            <Home />
            <Category />
            <Product />
          </>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
