import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Product.css";


const Product = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchProduct = async () => {
      await fetch("http://localhost:4000/product")
        .then((response) => response.json())
        .then((data) => {setProduct(data)})
        .catch((error) => console.error("Error fetching products:", error));
    }
    fetchProduct();
  }, []);

  return (
    <div className="product-container">
      <section className="product-grid">
      {product.length > 0 ? (
          product.map((p) => (
            <Card key={p.id} className="custom-card"> 
              <Card.Img variant="top" src={p.image} alt={p.title} style={{height:"300px"}} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {p.category} <br />
                  <strong>Price:</strong> ${p.price} <br />
                  <strong>Rating:</strong> ⭐ {p.rating.rate} ({p.rating.count} reviews)
                </Card.Text>
                <div className='button-container'>
                <Button variant="secondary" style={{background:"green",width:"100px"}}>card</Button>
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
