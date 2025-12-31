// src/pages/category/Pendants.jsx
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import "../Collection.css";
export default function CategoryPendants() {
  const pendants = [
    { id: 1, name: "Initial Pendant", price: 35000, style: "Initial", image: "🔠", personalizable: true },
    { id: 2, name: "Religious Pendant", price: 45000, style: "Religious", image: "🕉️", personalizable: false },
    { id: 3, name: "Geometric Pendant", price: 25000, style: "Geometric", image: "🔷", personalizable: false },
    { id: 4, name: "Nature Pendant", price: 55000, style: "Nature", image: "🌿", personalizable: false },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Pendants</h1>
      <p className="page-subtitle">Express yourself with meaningful pendants</p>

      <div className="pendant-styles">
        <div className="style">
          <div className="style-icon">🔠</div>
          <h4>Initial</h4>
          <p>Personalized with letters</p>
        </div>
        <div className="style">
          <div className="style-icon">🕉️</div>
          <h4>Religious</h4>
          <p>Spiritual symbols</p>
        </div>
        <div className="style">
          <div className="style-icon">🔷</div>
          <h4>Geometric</h4>
          <p>Modern designs</p>
        </div>
        <div className="style">
          <div className="style-icon">🌿</div>
          <h4>Nature</h4>
          <p>Floral and leaf designs</p>
        </div>
      </div>

      <div className="products-grid">
        {pendants.map(pendant => (
          <div key={pendant.id} className="product-card">
            <div className="product-image">{pendant.image}</div>
            <div className="style-tag">{pendant.style}</div>
            <h3>{pendant.name}</h3>
            {pendant.personalizable && <div className="personalize-badge">Can be Personalized</div>}
            <div className="price">PKR {pendant.price.toLocaleString()}</div>
            <button className="add-to-cart-btn">
              {pendant.personalizable ? 'Add Initial' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}