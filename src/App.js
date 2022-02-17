import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import ItemListContainer from "./pages/ItemList/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetail/ItemDetailContainer";
import CartContainer from "./pages/Cart/CartContainer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders';

import About from "./pages/About";
import Policy from './pages/Policy';

import Error404 from './pages/Page404';

// Contexts
import StoreContextProvider from './context/storeContext';

//Guards
import AuthGuard from "./guards/AuthGuard";


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

            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Register /> } />
            
            <Route path="/profile/:userId" element={ 
              <AuthGuard>
                <Profile />
              </AuthGuard>
            } />
            <Route path="/wishlist/:userId" element={ 
              <AuthGuard>
                <Wishlist />
              </AuthGuard>
            } />
            <Route path="/orders/:userId" element={ 
              <AuthGuard>
                <Orders />
              </AuthGuard>
            } />

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