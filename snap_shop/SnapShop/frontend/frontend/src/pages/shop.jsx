import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

// Separate images for every item
const allProducts = [
  { id: 1, name: "Mesmera Necklace", price: "PKR 125,000", img: "https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg", category: "necklaces" },
  { id: 2, name: "Stellar Silver Ring", price: "PKR 15,000", img: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg", category: "rings" },
  { id: 3, name: "Rose Gold Band", price: "PKR 45,000", img: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg", category: "rings" },
  { id: 4, name: "Luxury Diamond Bracelet", price: "PKR 550,000", img: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg", category: "bracelets" },
  { id: 5, name: "Onyx Men's Ring", price: "PKR 12,000", img: "https://images.pexels.com/photos/1616091/pexels-photo-1616091.jpeg", category: "men" }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop-page">
      <div className="shop-controls">
        <input 
          type="text" 
          placeholder="Search our collection..." 
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card">
              <div className="img-box"><img src={product.img} alt={product.name} /></div>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </Link>
          ))
        ) : (
          <div className="no-results">No items match your search.</div>
        )}
      </div>
    </div>
  );
};

export default Shop;