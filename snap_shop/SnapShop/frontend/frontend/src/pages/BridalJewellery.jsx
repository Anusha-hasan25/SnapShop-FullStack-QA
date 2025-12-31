import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCommon.css';
import CategoryTemplate from '../../components/CategoryTemplate';

const products = [
  { id: 'b1', name: "Royal Polki Set", price: "PKR 1,250,000", img: "https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg" },
  { id: 'b2', name: "Bridal Diamond Choker", price: "PKR 3,500,000", img: "https://images.pexels.com/photos/15155621/pexels-photo-15155621.jpeg" },
];

const BridalJewellery = () => (
  <div className="category-container bridal-theme">
    <header className="category-hero">
      <div className="hero-content">
        <h1>The Bridal Gallery</h1>
        <p>Heirlooms for your most beautiful beginning</p>
      </div>
    </header>
    <div className="product-grid">
      {products.map(p => (
        <Link key={p.id} to={`/product/${p.id}`} className="product-card">
          <div className="img-box"><img src={p.img} alt={p.name} /></div>
          <h3>{p.name}</h3>
          <p className="price">{p.price}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default BridalJewellery;