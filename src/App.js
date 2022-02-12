import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ItemListContainer from "./pages/ItemList/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetail/ItemDetailContainer";
import CartContainer from "./pages/Cart/CartContainer";
import About from "./pages/About";
import Policy from './pages/Policy';

import Error404 from './pages/Page404';

import StoreContextProvider from './context/storeContext';


function App() {
  return (
    <Router>
      <StoreContextProvider>
        <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/products" element= { <ItemListContainer /> } />
            <Route path="/category/:cid" element={ <ItemListContainer /> } />
            <Route path="/product/:uid" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <CartContainer /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/policy" element={ <Policy /> } />
            <Route path="*" element={ <Error404 /> } />
          </Routes>
        <Footer />
      </StoreContextProvider>
    </Router>
  );
}

export default App;