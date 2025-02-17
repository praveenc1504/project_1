import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider"; 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addState } from "../store/cardSlice";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  let nav = useNavigate();
  let dispatch = useDispatch();
  
  let additem = (p) => {
    dispatch(addState(p));
  };

  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }
  const notify = () => {
  toast("✌️ Add cart successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    style: {backgroundColor: "#00bcd4"}, // Unique orange-red color
  });
};

  return (
    <div className="product-container">
      <section className="product-grid">
        {products.slice().reverse().map((p) => ( // Reverse the array here
          <Card key={p.id || Math.random()} className="custom-card">
            <Card.Img 
              variant="top" 
              src={p.image || "https://via.placeholder.com/300"} 
              alt={p.title || "No Title Available"} 
              style={{ height: "300px" }} 
            />
            <Card.Body>
              <Card.Title>{p.name || "No Name"}</Card.Title>
              <Card.Text>
                <strong>Category:</strong> {p.category || "N/A"} <br />
                <strong>Price:</strong> ${p.price || "N/A"} <br />
                <strong>Rating:</strong> ⭐ {p.rating?.rate || "N/A"} ({p.rating?.count || 0} reviews)
              </Card.Text>
              <div className="button-container">
                <Button variant="secondary" onClick={() =>{notify();additem(p)}} style={{ background: "green", width: "100px" }}>
                  Cart
                </Button>
                <ToastContainer style={{ zIndex: 10000, marginTop: "30px" }} />
                <Button variant="primary">Buy Now</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Product;
