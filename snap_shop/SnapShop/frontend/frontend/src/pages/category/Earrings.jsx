// src/pages/category/Earrings.jsx
import React, { useState } from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import "../Collection.css";
export default function CategoryEarrings() {
  const [typeFilter, setTypeFilter] = useState('all');
  
  const earrings = [
    { id: 1, name: "Diamond Studs", price: 185000, type: "studs", material: "Gold", image: "✨" },
    { id: 2, name: "Gold Hoops", price: 45000, type: "hoops", material: "Gold", image: "⭕" },
    { id: 3, name: "Pearl Drops", price: 85000, type: "drops", material: "Silver", image: "💧" },
    { id: 4, name: "Silver Huggies", price: 25000, type: "huggies", material: "Silver", image: "🌀" },
  ];

  const filteredEarrings = typeFilter === 'all' 
    ? earrings 
    : earrings.filter(earring => earring.type === typeFilter);

  const earringTypes = [
    { id: 'studs', name: 'Studs', icon: '✨' },
    { id: 'hoops', name: 'Hoops', icon: '⭕' },
    { id: 'drops', name: 'Drops', icon: '💧' },
    { id: 'huggies', name: 'Huggies', icon: '🌀' },
    { id: 'chandelier', name: 'Chandelier', icon: '💡' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Earrings</h1>
      <p className="page-subtitle">Complete collection of earrings for every style</p>

      <div className="earring-type-filters">
        <h3>Filter by Type:</h3>
        <div className="type-buttons">
          <button className={`type-btn ${typeFilter === 'all' ? 'active' : ''}`} onClick={() => setTypeFilter('all')}>
            All Types
          </button>
          {earringTypes.map(type => (
            <button 
              key={type.id}
              className={`type-btn ${typeFilter === type.id ? 'active' : ''}`} 
              onClick={() => setTypeFilter(type.id)}
            >
              {type.icon} {type.name}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredEarrings.map(earring => (
          <div key={earring.id} className="product-card">
            <div className="product-image">{earring.image}</div>
            <div className="earring-type-badge">{earring.type}</div>
            <h3>{earring.name}</h3>
            <div className="material">Material: {earring.material}</div>
            <div className="price">PKR {earring.price.toLocaleString()}</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}