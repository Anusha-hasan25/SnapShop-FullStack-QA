import React, { useEffect } from 'react';
import './InfoPages.css';

const SizeGuide = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sizes = [
    { mm: "15.7 mm", us: "5" },
    { mm: "16.5 mm", us: "6" },
    { mm: "17.3 mm", us: "7" },
    { mm: "18.1 mm", us: "8" },
    { mm: "19.0 mm", us: "9" },
  ];

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header">
          <h1>Ring Size Guide</h1>
          <p className="text-[10px] tracking-[3px] text-gray-400">FIND YOUR PERFECT FIT</p>
        </header>

        <section className="info-section">
          <h2>How to Measure</h2>
          <p>
            For the most accurate fit, measure the inside diameter of a ring that fits you perfectly. Match the measurement in millimeters (mm) with our chart below.
          </p>
        </section>

        <div className="overflow-x-auto my-10 border border-gray-100">
          <table className="w-full text-center">
            <thead>
              <tr className="bg-black text-white text-[11px] tracking-widest uppercase">
                <th className="py-4 border-r border-gray-800">Inside Diameter (mm)</th>
                <th className="py-4">US Size</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-600 italic">{s.mm}</td>
                  <td className="py-4 font-bold text-black">{s.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="info-footer">
          <p className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Ensure the ring is not too tight for comfort.</p>
          <p className="serif italic text-xl tracking-[10px] mt-6">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default SizeGuide;