import React from 'react';

import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Policy from './pages/Policy';

import Error404 from './pages/Page404';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <ProductList /> } />
        <Route path="/product/:uid" element={ <ProductDetail /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/policy" element={ <Policy /> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;