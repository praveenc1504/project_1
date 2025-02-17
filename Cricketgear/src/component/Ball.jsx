import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductStyles.css";
import { useDispatch } from "react-redux";
import { addState } from "../store/cardSlice";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Ball = () => {
  const navigate = useNavigate();
  let dispatch =useDispatch();
  let additem =(p)=>{
    dispatch(addState(p))
  }
  
  const { products } = useContext(ProductContext);
  const ballProducts = products?.filter((p) => p.category?.toLowerCase() === "ball") || [];
  
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
    <>
      <NavBar />
      <div className="product-container">
        <h1 className="product-title">Balls</h1>
        <section className="product-grid">
          {ballProducts.length > 0 ? (
            ballProducts.map((p) => (
              <Card key={p.id || Math.random()} className="custom-card">
                <Card.Img
                  variant="top"
                  src={p.image || "https://via.placeholder.com/300"} // ✅ Default image if missing
                  alt={p.name || "Product Image"}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{p.name || "Unknown Product"}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${p.price || "N/A"} <br />
                    <strong>Rating:</strong> ⭐ {p.rating?.rate ?? "N/A"} ({p.rating?.count ?? 0} reviews)
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
            ))
          ) : (
            <p className="no-products-message">No Balls Available</p>
          )}
        </section>
      </div>
      <button className='addButton' onClick={() => navigate("/addProd")}>+</button>
    </>
  );
};

export default Ball;
