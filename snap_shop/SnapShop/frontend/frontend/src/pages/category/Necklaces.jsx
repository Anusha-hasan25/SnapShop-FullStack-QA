// src/pages/category/Necklaces.jsx
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import "../Collection.css";


export default function CategoryNecklaces() {
  const necklaces = [
    { id: 1, name: "Gold Chain", price: 185000, length: "20 inches", style: "Chain", image: "⛓️" },
    { id: 2, name: "Pearl Strand", price: 85000, length: "18 inches", style: "Strand", image: "🐚" },
    { id: 3, name: "Diamond Choker", price: 225000, length: "16 inches", style: "Choker", image: "💎" },
    { id: 4, name: "Layered Necklace", price: 125000, length: "22 inches", style: "Layered", image: "✨" },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Necklaces</h1>
      <p className="page-subtitle">Complete collection of necklaces in all styles</p>

      <div className="length-guide">
        <h3>📏 Necklace Length Guide</h3>
        <div className="lengths">
          <div className="length">
            <div className="length-name">Choker</div>
            <div className="length-size">14-16 inches</div>
          </div>
          <div className="length">
            <div className="length-name">Princess</div>
            <div className="length-size">17-19 inches</div>
          </div>
          <div className="length">
            <div className="length-name">Matinee</div>
            <div className="length-size">20-24 inches</div>
          </div>
          <div className="length">
            <div className="length-name">Opera</div>
            <div className="length-size">28-34 inches</div>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {necklaces.map(necklace => (
          <div key={necklace.id} className="product-card">
            <div className="product-image">{necklace.image}</div>
            <div className="necklace-style">{necklace.style}</div>
            <h3>{necklace.name}</h3>
            <div className="necklace-length">Length: {necklace.length}</div>
            <div className="price">PKR {necklace.price.toLocaleString()}</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}