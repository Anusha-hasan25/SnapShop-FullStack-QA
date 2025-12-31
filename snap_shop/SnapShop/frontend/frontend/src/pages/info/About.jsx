import React, { useEffect } from 'react';
import './InfoPages.css';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header">
          <h1>About SnapShop Luxe</h1>
          <p className="text-[10px] tracking-[3px] text-gray-400">MASTERS OF LIGHT SINCE 2025</p>
        </header>

        <section className="info-section">
          <h2>Our Heritage</h2>
          <p>
            Founded in the heart of Karachi, **SnapShop Luxe** was born from a vision to transform raw metals and precious stones into symbols of eternal light. Our journey began with a single promise: to provide jewelry that tells a story of elegance and precision.
          </p>
        </section>

        <div className="highlight-box">
          <h2 className="serif text-xl mb-2 italic">The Poetry of Brilliance</h2>
          <p className="text-xs tracking-widest opacity-80">Every diamond is hand-selected and cut to reveal its unique soul.</p>
        </div>

        <section className="info-section">
          <h2>Craftsmanship</h2>
          <p>
            We blend global luxury standards with traditional Pakistani artistry. Every piece is crafted by master artisans who have dedicated their lives to the perfection of jewelry making. At SnapShop, jewelry is not just an accessory—it is a legacy.
          </p>
        </section>

        <footer className="info-footer">
          <p className="serif italic text-xl tracking-[10px]">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default About;