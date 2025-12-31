import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCommon.css';
import CategoryTemplate from '../components/CategoryTemplate';
const bestSellers = [
  { id: 1, name: "Mesmera Mixed Cuts Necklace", price: "PKR 125,000", img: "https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, name: "Stellar Solitaire Ring", price: "PKR 250,000", img: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, name: "Gilded Hoop Earrings", price: "PKR 45,000", img: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, name: "Riviera Diamond Bracelet", price: "PKR 550,000", img: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const BestSellers = () => (
  <div className="category-container">
    <header className="category-header">
      <h1 className="category-title">Signature Best Sellers</h1>
      <p className="category-count">The pieces everyone is falling in love with.</p>
    </header>
    <div className="product-grid">
      {bestSellers.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="product-card">
          <div className="img-box">
            <img src={product.img} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default BestSellers;