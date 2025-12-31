// src/pages/NewArrivals.jsx
import React from 'react';

export default function NewArrivals() {
  const newProducts = [
    { id: 1, name: "Diamond Tennis Bracelet", price: 125000, image: "💎" },
    { id: 2, name: "Rose Gold Pendant", price: 45000, image: "🌹" },
    { id: 3, name: "Pearl Drop Earrings", price: 28000, image: "🐚" },
    { id: 4, name: "Men's Gold Chain", price: 95000, image: "⛓️" },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">New Arrivals</h1>
      <p className="page-subtitle">Fresh styles just added to our collection</p>
      
      <div className="products-grid">
        {newProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <div className="price">PKR {product.price.toLocaleString()}</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}