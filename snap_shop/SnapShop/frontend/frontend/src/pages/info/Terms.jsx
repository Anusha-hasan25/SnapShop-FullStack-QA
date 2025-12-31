import React, { useEffect } from 'react';
import './Terms.css';

const Terms = () => {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-wrapper">
      <div className="terms-container">
        <header className="terms-header">
          <h1>TERMS OF USE</h1>
          <p className="last-updated">EFFECTIVE AS OF DECEMBER 2025</p>
        </header>

        <section className="terms-section">
          <h2>1. OVERVIEW</h2>
          <p>
            Welcome to **SnapShop Luxe**. This website is operated by our team for your personal shopping experience. 
            By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. PRODUCT AUTHENTICITY</h2>
          <p>
            Every piece of jewelry, whether **Gold**, **Silver**, or **Diamond**, is guaranteed for its purity as described. 
            We provide certificates of authenticity with all premium purchases to ensure you receive the quality SnapShop is known for.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. INTELLECTUAL PROPERTY</h2>
          <p>
            All content included on this site, such as text, graphics, logos, images, and jewelry designs, is the property of **SnapShop Luxe** or its content suppliers. 
            The compilation of all content on this site is the exclusive property of our brand.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. PURCHASE & PAYMENT</h2>
          <p>
            We reserve the right to refuse any order you place with us. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail or billing address/phone number provided at the time the order was made.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. LIMITATION OF LIABILITY</h2>
          <p>
            SnapShop Luxe does not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. 
            The jewelry is provided 'as is' and 'as available' for your use, without any representation, warranties, or conditions of any kind.
          </p>
        </section>

        <footer className="terms-footer">
          <p>If you have any questions regarding these terms, please contact our support team.</p>
          <p className="contact-email">legal@snapshopluxe.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Terms;