import React from 'react';
import NavBar from './NavBar';
import './NavBarc.css';
import Product from './Product'; // Fixed: Correct filename case
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate(); // Renamed 'call' to 'navigate'
  
   return (
    <>
     <NavBar />
  <button className='addButton' onClick={() => navigate("/addProd")}>+</button>
     <Product />
    </>
   );
};

export default Home;
