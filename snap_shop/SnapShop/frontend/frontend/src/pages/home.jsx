import React from 'react';
import ProductGrid from '../components/ProductGrid'; // Adjust path if needed
import './Home.css';

// 1. DATA: This is what was missing. Your grid needs this array to show items.
const jewelryData = [
  { 
    id: 1, 
    name: "Diamond Solitaire Ring", 
    price: 250000, 
    image: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg",
    category: "silver"
  },
  { 
    id: 2, 
    name: "Gold Bridal Choker", 
    price: 450000, 
    image: "https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg",
    category: "gold"
  },
  { 
    id: 3, 
    name: "Silver Infinity Bracelet", 
    price: 15000, 
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
    category: "silver"
  },
  { 
    id: 4, 
    name: "Classic Diamond Studs", 
    price: 85000, 
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
    category: "diamond"
  }
];

const Home = () => {
  return (
    <div className="home-page" style={{ paddingTop: '160px' }}>
      <section className="hero-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', letterSpacing: '4px' }}>
          THE HOLIDAY COLLECTION
        </h1>
        <p style={{ letterSpacing: '2px', color: '#666' }}>DISCOVER THE ART OF GIFTING</p>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2 style={{ fontSize: '12px', letterSpacing: '3px', marginBottom: '30px', textAlign: 'center' }}>
            FEATURED MASTERPIECES
          </h2>
          
          {/* 2. CONNECTION: We pass the data into the grid here */}
          <ProductGrid products={jewelryData} />
        </div>
      </section>
    </div>
  );
};

export default Home;