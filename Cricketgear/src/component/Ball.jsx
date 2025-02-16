import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductStyles.css";
import { useDispatch } from "react-redux";
import { addState } from "../store/cardSlice";
const Ball = () => {
  
  let dispatch =useDispatch();
  let additem =(p)=>{
    dispatch(addState(p))
  }
  
  const { products } = useContext(ProductContext);
  const ballProducts = products?.filter((p) => p.category?.toLowerCase() === "ball") || [];
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
                    <Button className="green-button" onClick={()=> additem(p)}>Add to Cart</Button>
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
    </>
  );
};

export default Ball;
