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


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <ItemListContainer /> } />
        <Route path="/category/:cid" element={ <ItemListContainer /> } />
        <Route path="/product/:uid" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/policy" element={ <Policy /> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;