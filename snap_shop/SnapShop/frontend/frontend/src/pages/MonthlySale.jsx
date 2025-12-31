// src/pages/MonthlySale.jsx
import React from 'react';

export default function MonthlySale() {
  const saleProducts = [
    { id: 1, name: "Silver Bangle Set", price: 15000, original: 20000, discount: 25, image: "💫" },
    { id: 2, name: "Gold Plated Ring", price: 12000, original: 18000, discount: 33, image: "💍" },
    { id: 3, name: "Crystal Necklace", price: 8500, original: 12000, discount: 29, image: "📿" },
    { id: 4, name: "Stud Earrings", price: 6500, original: 9000, discount: 28, image: "✨" },
  ];

  return (
    <div className="page-container">
      <div className="sale-header">
        <h1 className="page-title">Monthly Sale</h1>
        <div className="sale-badge">UP TO 50% OFF</div>
      </div>
      
      <div className="products-grid">
        {saleProducts.map(product => (
          <div key={product.id} className="product-card sale-card">
            <div className="discount-badge">-{product.discount}%</div>
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <div className="price-container">
              <div className="current-price">PKR {product.price.toLocaleString()}</div>
              <div className="original-price">PKR {product.original.toLocaleString()}</div>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}