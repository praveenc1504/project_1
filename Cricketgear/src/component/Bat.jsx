import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductStyles.css";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { addState } from "../store/cardSlice";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Bat = () => {
  const navigate = useNavigate();
  let dispatch =useDispatch();
  let additem =(p)=>{
     dispatch(addState(p))
   }
  const { products } = useContext(ProductContext);
  const bats = products?.filter((p) => p.category === "Bat") || [];
  
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
        <h1 className="product-title">Bats</h1>
        <section className="product-grid">
          {bats.length > 0 ? (
            bats.map((bat) => (
              <Card key={bat.id} className="custom-card">
                <Card.Img
                  variant="top"
                  src={bat.image || "https://via.placeholder.com/300"} // ✅ Default image if missing
                  alt={bat.name || "Product Image"}
                  style={{ height: "300px" }}
                  
                />
                <Card.Body>
                  <Card.Title>{bat.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${bat.price} <br />
                    <strong>Rating:</strong> ⭐ {bat.rating?.rate || "N/A"} ({bat.rating?.count || 0} reviews)
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
            <p>No Bats Available</p>
          )}
        </section>
      </div>
      <button className='addButton' onClick={() => navigate("/addProd")}>+</button>
    </>
  );
};

export default Bat;
