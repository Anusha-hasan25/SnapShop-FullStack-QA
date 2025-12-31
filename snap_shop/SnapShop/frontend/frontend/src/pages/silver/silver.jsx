import React, { useEffect } from 'react';
import { ALL_PRODUCTS } from '../../data/product'; // Global data import
import ProductGrid from '../../components/ProductGrid';
import "../Collection.css";
import "../info/InfoPages.css"; 

const SilverCollection = () => {
  const silverItems = ALL_PRODUCTS.filter(item => item.category === 'silver');

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">Sterling Silver</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">
            Contemporary elegance and minimalist charm in pure silver
          </p>
        </header>

        <div className="mt-16">
          <ProductGrid products={silverItems} />
        </div>

        <footer className="info-footer mt-20">
          <p className="serif italic text-xl tracking-[10px] uppercase">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default SilverCollection;