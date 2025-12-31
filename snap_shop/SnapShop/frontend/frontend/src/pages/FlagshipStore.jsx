import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../pages/store.css';

/**
 * The Karachi Flagship Store Page component.
 * Provides details about the physical store location and experience.
 * @returns {JSX.Element} The Karachi Flagship Store page JSX.
 */
function KarachiFlagshipStore() {
  return (
    <>
     
      <div className="page-container p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">Karachi Flagship Store</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Visit our flagship store in Karachi to experience the full elegance of the SnapShop 💎 collection in person. Our knowledgeable staff will be delighted to guide you through our breathtaking silver and bridal jewellery collections.
          </p>
          <div className="space-y-4 mb-6">
            <h2 className="text-2xl font-bold">Store Location</h2>
            <p>123 Main Street, Karachi, Pakistan</p>
            <h2 className="text-2xl font-bold">Store Hours</h2>
            <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
            <p>Sunday: 12:00 PM - 7:00 PM</p>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default KarachiFlagshipStore;
