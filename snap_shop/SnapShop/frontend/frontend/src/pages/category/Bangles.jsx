// src/pages/category/Bangles.jsx - With Skeleton
import React, { useState, useEffect } from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import "../Collection.css";
export default function Bangles() {
  const [loading, setLoading] = useState(true);
  const [bangles, setBangles] = useState([]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const data = [
        { id: 1, name: "Gold Bangles Set", price: 185000, quantity: 8, weight: "65g", image: "💫" },
        { id: 2, name: "Silver Bangles", price: 45000, quantity: 6, weight: "45g", image: "⭕" },
        { id: 3, name: "Diamond Bangle", price: 285000, quantity: 1, weight: "22g", image: "💎" },
        { id: 4, name: "Choora Set", price: 125000, quantity: 21, weight: "85g", image: "👰" },
      ];
      setBangles(data);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="page-container">
      {/* Page Title Skeleton */}
      {loading ? (
        <>
          <div className="page-title-skeleton"></div>
          <div className="page-subtitle-skeleton"></div>
        </>
      ) : (
        <>
          <h1 className="page-title">Bangles</h1>
          <p className="page-subtitle">Traditional and modern bangles for every occasion</p>
        </>
      )}

      {/* Info Cards Skeleton */}
      <div className="bangle-info">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="info-skeleton">
              <div className="info-icon-skeleton"></div>
              <div className="info-title-skeleton"></div>
              <div className="info-text-skeleton"></div>
            </div>
          ))
        ) : (
          <>
            <div className="info">
              <div className="info-icon">📏</div>
              <h4>Size Guide</h4>
              <p>2.25" - 2.75" diameter</p>
            </div>
            <div className="info">
              <div className="info-icon">⚖️</div>
              <h4>Weight Range</h4>
              <p>15g - 100g per piece</p>
            </div>
            <div className="info">
              <div className="info-icon">🎁</div>
              <h4>Sets Available</h4>
              <p>2 to 21 pieces</p>
            </div>
          </>
        )}
      </div>

      {/* Products Grid Skeleton */}
      <div className="products-grid">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="product-card-skeleton">
              <div className="product-image-skeleton"></div>
              <div className="product-title-skeleton"></div>
              <div className="product-details-skeleton">
                <div className="detail-skeleton"></div>
                <div className="detail-skeleton"></div>
              </div>
              <div className="product-price-skeleton"></div>
              <div className="product-btn-skeleton"></div>
            </div>
          ))
        ) : (
          bangles.map(bangle => (
            <div key={bangle.id} className="product-card bangle-card">
              <div className="product-image">{bangle.image}</div>
              <div className="bangle-quantity">{bangle.quantity} pieces</div>
              <h3>{bangle.name}</h3>
              <div className="bangle-details">
                <span>Weight: {bangle.weight}</span>
                <span>Pieces: {bangle.quantity}</span>
              </div>
              <div className="price-section">
                <span className="price">₹{bangle.price.toLocaleString('en-IN')}</span>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}