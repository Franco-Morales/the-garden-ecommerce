import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ItemListContainer from "./pages/ItemList/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetail/ItemDetailContainer";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Policy from './pages/Policy';

import Error404 from './pages/Page404';
import CartContextProvider from './context/cartContext';


function App() {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/products" element={ <ItemListContainer /> } />
          <Route path="/category/:cid" element={ <ItemListContainer /> } />
          <Route path="/product/:uid" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/policy" element={ <Policy /> } />
          <Route path="*" element={ <Error404 /> } />
        </Routes>
        <Footer />
      </CartContextProvider>
    </Router>
  );
}

export default App;