import React, { useEffect } from 'react';
import { ALL_PRODUCTS } from '../../data/product'; 
import ProductGrid from '../../components/ProductGrid';
import "../Collection.css";
import "../info/InfoPages.css"; 

const GoldCollection = () => {
  const goldItems = ALL_PRODUCTS.filter(item => item.category === 'gold');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">The Gold Gallery</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">
            Timeless 22K and 18K purity in every masterpiece
          </p>
        </header>
        <div className="mt-16">
          {/* Ensure ProductGrid has the swarovski heart logic inside */}
          <ProductGrid products={goldItems} />
        </div>
        <footer className="info-footer mt-20">
          <p className="serif italic text-xl tracking-[10px] uppercase">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};
export default GoldCollection;