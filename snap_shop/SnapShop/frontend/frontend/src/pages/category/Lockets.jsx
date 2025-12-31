// src/pages/category/Lockets.jsx
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import "../Collection.css";
export default function CategoryLockets() {
  const lockets = [
    { id: 1, name: "Heart Locket", price: 25000, size: "Small", image: "❤️", canHoldPhoto: true },
    { id: 2, name: "Oval Locket", price: 35000, size: "Medium", image: "🥚", canHoldPhoto: true },
    { id: 3, name: "Round Locket", price: 45000, size: "Large", image: "⭕", canHoldPhoto: true },
    { id: 4, name: "Diamond Locket", price: 125000, size: "Medium", image: "💎", canHoldPhoto: false },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Lockets</h1>
      <p className="page-subtitle">Keep your memories close with our beautiful lockets</p>

      <div className="locket-features">
        <div className="feature">
          <div className="feature-icon">📸</div>
          <h4>Photo Holding</h4>
          <p>Most lockets can hold photos</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔓</div>
          <h4>Easy Open</h4>
          <p>Secure clasp mechanism</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📏</div>
          <h4>Multiple Sizes</h4>
          <p>Small to large available</p>
        </div>
      </div>

      <div className="products-grid">
        {lockets.map(locket => (
          <div key={locket.id} className="product-card locket-card">
            <div className="product-image">{locket.image}</div>
            <div className="size-badge">{locket.size}</div>
            <h3>{locket.name}</h3>
            {locket.canHoldPhoto && <div className="photo-badge">📸 Holds Photos</div>}
            <div className="price">PKR {locket.price.toLocaleString()}</div>
            <button className="add-to-cart-btn">Customize</button>
          </div>
        ))}
      </div>
    </div>
  );
}