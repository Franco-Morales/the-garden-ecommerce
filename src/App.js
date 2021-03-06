import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import ItemListContainer from "./pages/ItemList/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetail/ItemDetailContainer";
import CartContainer from "./pages/Cart/CartContainer";
// auth
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from './pages/Profile';
import WishlistContainer from './pages/Wishlist/WishlistContainer';
import OrdersContainer from './pages/Orders/OrdersContainer';
import OrderDetailContainer from "./pages/OrderDetail/OrderDetailContainer";

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
            <Route path="/product/:prodId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <CartContainer /> } />

            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Register /> } />
            
            <Route path="/profile/:userId" element={ 
                <AuthGuard>
                  <Profile />
                </AuthGuard>
              } 
            />
            <Route path="/wishlist/:userId" element={ 
                <AuthGuard>
                  <WishlistContainer />
                </AuthGuard>
              } 
            />
            <Route path="/orders/:userId" element={ 
                <AuthGuard>
                  <OrdersContainer />
                </AuthGuard>
              } 
            />
            <Route path="/orders/:userId/order/:orderId" element={ 
                <AuthGuard>
                  <OrderDetailContainer />
                </AuthGuard>
              } 
            />
            
            <Route path="/about" element={ <About /> } />
            <Route path="/policy" element={ <Policy /> } />
            <Route path="*" element={ <Error404 /> } />
          </Routes>
        <Footer />
        <ToastContainer pauseOnHover hideProgressBar autoClose={1500} />
      </StoreContextProvider>
    </Router>
  );
}

export default App;