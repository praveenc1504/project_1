import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductStyles.css";

const Jersey = () => {
  const { products } = useContext(ProductContext);
  const jerseyProducts = products?.filter((p) => p.category?.toLowerCase() === "jersey") || [];

  return (
    <>
      <NavBar />
      <div className="product-container">
        <h1 className="product-title">Jerseys</h1>
        <section className="product-grid">
          {jerseyProducts.length > 0 ? (
            jerseyProducts.map((p) => (
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
                    <strong>Rating:</strong> ⭐ {p.rating?.rate || "N/A"} ({p.rating?.count || 0} reviews)
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
