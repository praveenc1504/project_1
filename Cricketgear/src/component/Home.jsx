import React from 'react';
import NavBar from './Navbar';
import Product from './product';
import './NavBarc.css';

const Home = () => {
  return (
    <>
     
     <NavBar/>
     <button className='addButton'>+</button>
      <Product />
      
    </>
  );
};

export default Home;