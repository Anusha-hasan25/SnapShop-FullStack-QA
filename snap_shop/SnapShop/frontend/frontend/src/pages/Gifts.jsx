import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCommon.css';

const Gifts = () => (
  <div className="category-container gifts-theme">
    <header className="category-hero" style={{backgroundImage: "url('https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg')"}}>
      <div className="hero-content">
        <h1>The Art of Gifting</h1>
        <p>Find the perfect expression of love</p>
      </div>
    </header>
    
    <div className="product-grid">
      <div className="product-card">
        <div className="img-box"><img src="https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg" alt="Anniversary" /></div>
        <h3>Gifts for Anniversary</h3>
        <Link to="/gold" style={{fontSize: '11px', color: '#888'}}>View Selection</Link>
      </div>
      <div className="product-card">
        <div className="img-box"><img src="https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg" alt="Birthday" /></div>
        <h3>Gifts for Birthday</h3>
        <Link to="/silver" style={{fontSize: '11px', color: '#888'}}>View Selection</Link>
      </div>
    </div>
  </div>
);

export default Gifts;