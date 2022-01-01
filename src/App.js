import React from 'react';

import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Error404 from './pages/Page404';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;