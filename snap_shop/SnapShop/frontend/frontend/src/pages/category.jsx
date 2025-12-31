import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CategoryPage.css';

// Mock Data for all categories
const allProducts = [
  { id: 1, name: "Stellar Silver Ring", price: "PKR 15,000", img: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg", category: "rings" },
  { id: 2, name: "Mesmera Necklace", price: "PKR 125,000", img: "https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg", category: "necklaces" },
  { id: 3, name: "Luna Silver Bracelet", price: "PKR 25,000", img: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg", category: "bracelets" },
  { id: 4, name: "Classic Gold Band", price: "PKR 85,000", img: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg", category: "rings" },
];

const CategoryPage = () => {
  const { categoryName } = useParams(); // Gets 'rings', 'necklaces', etc. from URL

  // Filter products based on the URL category
  const filteredProducts = allProducts.filter(item => item.category === categoryName);

  return (
    <div className="category-page">
      <header className="category-header">
        <h1 className="category-title">{categoryName?.toUpperCase()}</h1>
        <p className="category-count">{filteredProducts.length} Items found</p>
      </header>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <div className="image-wrapper">
                  <img src={product.img} alt={product.name} />
                  <div className="quick-view">Quick View</div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="no-products">
            <h2>Our {categoryName} collection is arriving soon.</h2>
            <Link to="/shop" className="back-btn">Explore Other Collections</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;