// src/pages/CasualJewellery.jsx
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';

export default function CasualJewellery() {
  const casualProducts = [
    { id: 1, name: "Everyday Hoops", price: 8500, material: "Silver", image: "⭕" },
    { id: 2, name: "Minimalist Ring", price: 6500, material: "Sterling", image: "💍" },
    { id: 3, name: "Stackable Bangles", price: 12000, material: "Silver", image: "💫" },
    { id: 4, name: "Simple Pendant", price: 9500, material: "Silver", image: "📿" },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Casual Jewellery</h1>
      <p className="page-subtitle">Everyday elegance for your daily style</p>
      
      <div className="products-grid">
        {casualProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <div className="product-material">{product.material}</div>
            <div className="price">PKR {product.price.toLocaleString()}</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}