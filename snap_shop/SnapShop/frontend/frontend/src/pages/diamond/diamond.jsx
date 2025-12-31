import React, { useEffect } from 'react';
import { ALL_PRODUCTS } from '../../data/product';
import ProductGrid from '../../components/ProductGrid';
import "../Collection.css";
import "../info/InfoPages.css"; 

const DiamondCollection = () => {
  // Global data se diamonds filter karein
  const diamondItems = ALL_PRODUCTS.filter(item => item.category === 'diamond');
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">Diamond Brilliance</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">
            Brilliance that lasts a lifetime for your special moments
          </p>
        </header>
        
        <div className="mt-16">
          <ProductGrid products={diamondItems} />
        </div>

        <footer className="info-footer mt-20">
          <p className="serif italic text-xl tracking-[10px] uppercase">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default DiamondCollection;