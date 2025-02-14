import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Home from './component/Home';
import NavBar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (    
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} /> 
        </Routes>
    </Router>
  );
};

export default App;