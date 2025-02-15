import React, { useState } from 'react'
import NavBar from './NavBar';

const Addproducut = () => {
    const [name ,setName]=useState('');
    const [category ,setCategory]=useState('');
    const [price ,setPrice]=useState('');
  return (
    <>
    <NavBar/>
      <div className='Add-cord'>
        <h1>Add Productlist</h1>
        <div className='Add-input'>
            <label >Product Name</label>
            <input
             type="text" 
             value={name}
             onChange={(e)=>setName(e.target.value)}
            required
            />
        </div>
        <div className='Add-input'>
            <label >Category</label>
            <input
             type="text" 
             value={category}
             onChange={(e)=>setCategory(e.target.value)}
            required
            />
        </div>
        <div className='Add-input'>
            <label >price</label>
            <input
             type="text" 
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
            required
            />
        </div>
      </div>
    </>
  )
}

export default Addproducut;