import React from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardList.css"; // Ensure this CSS file is used
import { removeState } from "../store/cardSlice";

const CardList = () => {
 let dispatch = useDispatch(); 
  let product = useSelector((state) => state.card);
let HandletoDelete=(p)=>{
    dispatch(removeState(p))
}
  return (
    <>
      <NavBar />
      <div className="cardlist-container">
        <h1 className="cardlist-title">Your Selected Products</h1>
        <section className="cardlist-grid">
          {product.length > 0 ? (
            product.map((p) => (
              <Card key={p.id || Math.random()} className="cardlist-item">
                <div className="cardlist-img-container">
                  <Card.Img
                    variant="top"
                    src={p.image || "https://via.placeholder.com/300"}
                    alt={p.name || "Product Image"}
                    className="cardlist-img"
                  />
                </div>
                <Card.Body className="cardlist-body">
                  <Card.Title className="cardlist-name">
                    {p.name || "Unknown Product"}
                  </Card.Title>
                  <Card.Text className="cardlist-details">
                    <strong>Price:</strong> ${p.price || "N/A"} <br />
                    <strong>Rating:</strong> ⭐ {p.rating?.rate ?? "N/A"} ({p.rating?.count ?? 0} reviews)
                  </Card.Text>
                  <div className="cardlist-buttons">
        
                    <Button className="remove" onClick={()=>HandletoDelete(p.id)}>Remove</Button>
                    <Button className="buy-now-btn">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="cardlist-empty">Your cart is empty! Add some products.</p>
          )}
        </section>
      </div>
    </>
  );
};

export default CardList;