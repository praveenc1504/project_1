import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/product")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {product.length > 0 ? (
          product.map((p) => (
            <Card key={p.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p.image} alt={p.name} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {p.category} <br />
                  <strong>Description:</strong> {p.description} <br />
                  <strong>Price:</strong> ${p.price} <br />
                  <strong>Rating:</strong> ⭐ {p.rating}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
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
