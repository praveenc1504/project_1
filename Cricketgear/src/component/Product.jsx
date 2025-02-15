import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider"; 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";

const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-container">
      <section className="product-grid">
        {products.length > 0 ? (
          products.map((p) => (
            <Card key={p.id} className="custom-card">
              <Card.Img variant="top" src={p.image} alt={p.title} style={{ height: "300px" }} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {p.category} <br />
                  <strong>Price:</strong> ${p.price} <br />
                  <strong>Rating:</strong> ⭐ {p.rating.rate} ({p.rating.count} reviews)
                </Card.Text>
                <div className="button-container">
                  <Button variant="secondary" style={{ background: "green", width: "100px" }}>
                    Card
                  </Button>
                  <Button variant="primary">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </section>
    </div>
  );
};

export default Product;
