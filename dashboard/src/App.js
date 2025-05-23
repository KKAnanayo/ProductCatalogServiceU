import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Topbar from './Pages/Topbar'; 
import ProductDetails from './Pages/ProductDetails';
import About from './Pages/About'; 
function App() {
  return (
    <Router>
      <div>
        <Topbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;