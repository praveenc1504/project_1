import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // ✅ Import Button
import "./ProductStyles.css"; // Import the styles
import NavBar from "./Navbar";

const Bat = () => {
  const { products } = useContext(ProductContext);
  const bats = products.filter((p) => p.category === "Bat");

  return (
    <>
      <NavBar/>
      <div className="product-container">
        <h1 className="product-title">Bats</h1>
        <section className="product-grid">
          {bats.length > 0 ? (
            bats.map((bat) => (
              <Card key={bat.id} className="custom-card">
                <Card.Img
                  variant="top"
                  src={bat.image}
                  alt={bat.title}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{bat.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${bat.price} <br />
                    <strong>Rating:</strong> ⭐ {bat.rating.rate} ({bat.rating.count} reviews)
                  </Card.Text>
                  <div className="button-container">
                    <Button className="green-button">Card</Button> {/* ✅ Fixed */}
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
    </>
  );
};

export default Bat;
