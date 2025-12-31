import React, { useEffect } from 'react';
import './InfoPages.css';

const RefundPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header">
          <h1>Refund Policy</h1>
          <p className="text-[10px] tracking-[3px] text-gray-400">GUARANTEED AUTHENTICITY</p>
        </header>

        <div className="highlight-box">
          <h2 className="serif text-2xl mb-2 italic">7-Day Return Guarantee</h2>
          <p className="text-xs tracking-widest opacity-80">Valid exclusively for manufacturing defects.</p>
        </div>

        <section className="info-section">
          <h2>Returns & Eligibility</h2>
          <p>
            To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
          </p>
        </section>

        <section className="info-section">
          <h2>Documentation</h2>
          <p>
            The **Certificate of Authenticity** provided at the time of purchase must accompany all return requests. Without this document, the request cannot be processed.
          </p>
        </section>

        <footer className="info-footer">
          <p className="text-[10px] font-bold tracking-[4px] uppercase mb-4">SnapShop Luxe Quality Assurance</p>
          <p className="serif italic text-xl tracking-[10px]">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;