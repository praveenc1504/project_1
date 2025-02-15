import React, { useState, useContext } from 'react';
import NavBar from './NavBar';
import { ProductContext } from './ProductProvider';
import './AddProduct.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const nav=useNavigate();
    const { products, setProducts } = useContext(ProductContext); // Use context
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);  // Image state
    const [preview, setPreview] = useState(""); // Preview for uploaded image

    // Handle image selection and preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);

            // Preview image before uploading
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    // Convert image to Base64
    const convertImageToBase64 = () => {
        return new Promise((resolve, reject) => {
            if (!image) {
                resolve(""); // No image selected
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const base64Image = await convertImageToBase64();
            const newProduct = { name, category, price, image: base64Image };

            fetch("http://localhost:4000/product", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct)
            })
            .then(response => response.json())
            .then(data => {
                setProducts([...products, data]); // Update product list
            
                Swal.fire({
                    title: "Custom width, padding, color, background.",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  }).then(() => {
                    nav("/home"); // Navigate after confirmation
                });
            })
            
            .catch(error => {
                console.error("Error adding product:", error);
                alert("Failed to add product");
            });
        } catch (error) {
            console.error("Image processing error:", error);
            alert("Failed to process image");
        }
    };

    return (
        <>
            <NavBar />
            <div className='add-product-container'>
                <h1 className='add-product-title'>Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <div className='add-product-input'>
                        <label className='add-product-label'>Product Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='add-product-input'>
                        <label className='add-product-label'>Category</label>
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                    </div>
                    <div className='add-product-input'>
                        <label className='add-product-label'>Price</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className='add-product-input'>
                        <label className='add-product-label'>Image</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} required />
                    </div>
                    {preview && <img src={preview} alt="Preview" className="preview-image" />}
                    <button className='add-product-button' type="submit">Add Product</button>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
