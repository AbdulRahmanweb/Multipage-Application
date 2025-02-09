import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFount';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import products from './Components/ProductData';
import PostDetails from './Components/PostDetails';


function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
      <Route path='products' element={<Products />} />
      <Route path='products/:id' element={<ProductDetails />} />
      <Route path='/post/:id' element={<PostDetails />} />
    </Routes>
  </>);
}

export default App;
