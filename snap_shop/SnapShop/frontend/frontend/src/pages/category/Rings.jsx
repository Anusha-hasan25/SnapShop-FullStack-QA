// src/pages/gifts/Anniversary.jsx
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import "../Collection.css";
export default function AnniversaryGifts() {
  const anniversaryGifts = [
    { id: 1, name: "His & Hers Rings", price: 225000, years: "Any", image: "💑", couple: true },
    { id: 2, name: "Eternity Band", price: 185000, years: "10+", image: "💍", milestone: "10 Years" },
    { id: 3, name: "Diamond Pendant", price: 125000, years: "5", image: "💎", milestone: "5 Years" },
    { id: 4, name: "Pearl Set", price: 85000, years: "1", image: "🐚", milestone: "1st Year" },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Anniversary Gifts</h1>
      <p className="page-subtitle">Celebrate your love with timeless jewellery</p>

      <div className="milestone-guide">
        <h3>💝 Anniversary Milestones</h3>
        <div className="milestones">
          <div className="milestone">
            <div className="year">1st</div>
            <div className="material">Gold</div>
          </div>
          <div className="milestone">
            <div className="year">5th</div>
            <div className="material">Silver</div>
          </div>
          <div className="milestone">
            <div className="year">10th</div>
            <div className="material">Diamond</div>
          </div>
          <div className="milestone">
            <div className="year">25th</div>
            <div className="material">Silver</div>
          </div>
          <div className="milestone">
            <div className="year">50th</div>
            <div className="material">Gold</div>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {anniversaryGifts.map(gift => (
          <div key={gift.id} className="product-card anniversary-card">
            <div className="product-image">{gift.image}</div>
            {gift.milestone && <div className="milestone-badge">{gift.milestone}</div>}
            {gift.couple && <div className="couple-badge">His & Hers</div>}
            <h3>{gift.name}</h3>
            <div className="years">Perfect for {gift.years} {gift.years === "Any" ? "anniversary" : "year anniversary"}</div>
            <div className="price">PKR {gift.price.toLocaleString()}</div>
            <button className="add-to-cart-btn">Add Engraving</button>
          </div>
        ))}
      </div>
    </div>
  );
}