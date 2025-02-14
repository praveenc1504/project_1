import React from 'react';
import NavBar from './NavBar.jsx'; // Ensure the path is correct
import Product from './Product.jsx';

const Home = () => {
  return (
    <>
     
      <NavBar /> {/* Ensure NavBar is rendered here */}
      <Product />
    </>
  );
};

export default Home;