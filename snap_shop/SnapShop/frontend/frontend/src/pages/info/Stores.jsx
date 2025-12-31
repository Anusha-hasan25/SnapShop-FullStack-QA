import React, { useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';
import './InfoPages.css';

const Stores = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header">
          <h1>Our Flagship Store</h1>
          <p className="text-[10px] tracking-[3px] text-gray-400">VISIT THE WORLD OF LUXE</p>
        </header>

        <div className="highlight-box">
          <h2 className="serif text-2xl mb-2 italic">Karachi Boutique</h2>
          <p className="text-xs tracking-widest opacity-80">Experience our collections in person.</p>
        </div>

        <section className="info-section">
          <h2>Location & Contact</h2>
          <div className="space-y-6 mt-6">
            <p className="flex gap-4 items-start">
              <MapPin size={20} className="text-black shrink-0" />
              <span>Plot 12-C, Zamzama Blvd, Phase 5, DHA, Karachi, Pakistan.</span>
            </p>
            <p className="flex gap-4 items-start">
              <Clock size={20} className="text-black shrink-0" />
              <span>Monday - Saturday: 11:00 AM - 9:00 PM<br/>Sunday: Closed</span>
            </p>
          </div>
        </section>

        <section className="text-center mt-12">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block border border-black px-10 py-4 text-[10px] font-bold tracking-[4px] hover:bg-black hover:text-white transition-all uppercase"
          >
            Open in Google Maps
          </a>
        </section>

        <footer className="info-footer">
          <p className="serif italic text-xl tracking-[10px]">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default Stores;