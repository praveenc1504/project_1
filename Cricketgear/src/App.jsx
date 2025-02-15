import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Home from './component/Home';
import Bat from './component/Bat';
import Ball from './component/Ball';

import ProductProvider from "./component/ProductProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jersey from './component/jersey';

const App = () => {
  return (
    <ProductProvider>
      <Router>
       
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect "/" to "/login" */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/bat" element={<Bat />} /> 
          <Route path="/ball" element={<Ball />} /> 
          <Route path="/jersey" element={<Jersey />} /> 
          <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} /> {/* Handle unknown routes */}
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
