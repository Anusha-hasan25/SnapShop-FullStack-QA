import React, { useEffect } from 'react';
import './InfoPages.css';

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header">
          <h1>Privacy Policy</h1>
          <p className="text-[10px] tracking-[3px] text-gray-400">LAST UPDATED: DECEMBER 2025</p>
        </header>

        <section className="info-section">
          <h2>1. Data Collection</h2>
          <p>
            At **SnapShop Luxe**, we respect your privacy. We only collect essential information like your name, shipping address, and email to process your luxury jewelry orders efficiently.
          </p>
        </section>

        <div className="highlight-box">
          <p className="tracking-widest uppercase text-xs">Your data is secured with industry-standard SSL encryption.</p>
        </div>

        <section className="info-section">
          <h2>2. Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you.
          </p>
        </section>

        <footer className="info-footer">
          <p className="serif italic text-xl tracking-[10px]">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;