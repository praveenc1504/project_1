import React from 'react';
import NavBar from './NavBar';

import './NavBarc.css';
import Product from './Product';

const Home = () => {
  return (
    <>
     
     <NavBar/>
     <button className='addButton'>+</button>
      <Product/>
      
    </>
  );
};

export default Home;