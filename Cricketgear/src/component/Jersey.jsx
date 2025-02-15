import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider"; 
import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // ✅ Added missing Button import
import "./ProductStyles.css";

const Jersey = () => {
  const { products } = useContext(ProductContext);
  const jerseyProducts = products.filter((p) => p.category.toLowerCase() === "jersey");

  return (
    <>
      <NavBar />
      <div className="product-container">
        <h1 className="product-title">Jerseys</h1>
        <section className="product-grid">
          {jerseyProducts.length > 0 ? (
            jerseyProducts.map((p) => (
              <Card key={p.id} className="custom-card">
                <Card.Img
                  variant="top"
                  src={p.image}
                  alt={p.title}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${p.price} <br />
                    <strong>Rating:</strong> ⭐ {p.rating.rate} ({p.rating.count} reviews)
                  </Card.Text>
                  <div className="button-container">
                    <Button className="green-button">Add to Cart</Button>
                    <Button variant="primary">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="no-products-message">No Jerseys Available</p>
          )}
        </section>
      </div>
    </>
  );
};

export default Jersey;
