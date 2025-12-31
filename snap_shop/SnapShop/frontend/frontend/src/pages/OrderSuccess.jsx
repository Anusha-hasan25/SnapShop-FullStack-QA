import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const { orderId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="success-page">
      <div className="success-container">
        <header className="success-header">
          <div className="success-icon-wrapper">
            <CheckCircle size={64} strokeWidth={1} className="gold-icon" />
          </div>
          <h1 className="serif italic text-5xl tracking-[10px] uppercase mt-10">Masterpiece Reserved</h1>
          <div className="luxury-divider"></div>
        </header>

        <main className="success-content">
          <p className="order-id-label">Order Reference</p>
          <h2 className="order-number">#{orderId}</h2>
          
          <p className="success-description">
            Thank you for choosing SnapShop. Your selection is being prepared with the utmost care and will be dispatched to your destination shortly.
          </p>

          <div className="success-actions">
            {/* The Black Button */}
            <Link to="/" className="continue-btn-black">
              Return to Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </main>

        <footer className="success-footer">
          <div className="footer-links-wrapper">
            <span>Secure Transaction</span>
            <span className="luxury-dot">•</span>
            <span>Handcrafted Quality</span>
            <span className="luxury-dot">•</span>
            <span>Boutique Service</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OrderSuccess;