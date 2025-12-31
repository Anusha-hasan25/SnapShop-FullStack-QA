import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Collection = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend se data mangwana
    const url = category 
      ? `http://127.0.0.1:8000/api/products?category=${category}`
      : `http://127.0.0.1:8000/api/products`;

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("API Error:", err));
  }, [category]);

  return (
    <div className="products-grid">
      {products.map(item => <ProductCard key={item.id} item={item} />)}
    </div>
  );
};