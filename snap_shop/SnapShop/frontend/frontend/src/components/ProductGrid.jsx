import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import './ProductGrid.css';

function ProductGrid({ products }) {
  const { addToCart } = useCart();

  if (!products || products.length === 0) {
    return <p className="loading-message">Loading Masterpieces...</p>;
  }

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-area">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="grid-image" />
              </Link>
              {/* Premium Swarovski Style Button */}
              <button 
                className="swarovski-add-btn" 
                onClick={() => addToCart(product, 1)}
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                <span>QUICK ADD</span>
              </button>
            </div>
            
            <Link to={`/product/${product.id}`} className="grid-info-link">
              <div className="product-info">
                <h3 className="grid-product-name">{product.name}</h3>
                <p className="grid-product-price">Rs {product.price.toLocaleString()}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;