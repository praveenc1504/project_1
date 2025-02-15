import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductStyles.css";
import NavBar from "./NavBar";

const Bat = () => {
  const { products } = useContext(ProductContext);
  const bats = products?.filter((p) => p.category === "Bat") || [];

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
                    <Button className="green-button">Card</Button>
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
