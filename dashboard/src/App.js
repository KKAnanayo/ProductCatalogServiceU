import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Topbar from './Pages/Topbar'; // Import the Topbar component

function App() {
  return (
    <Router>
      <div>
        <Topbar /> {/* Topbar will always be visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;