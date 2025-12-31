import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../pages/buy.css';

/**
 * The Buy At Store Page component.
 * Displays information about the in-store shopping experience.
 * @returns {JSX.Element} The Buy At Store page JSX.
 */
function BuyAtStore() {
  return (
    <>
      <div className="page-container">
        <h1 className="page-heading">Buy At Store</h1>
        <p>At SnapShop 💎, we offer a seamless in-store shopping experience. Our friendly and professional staff are ready to assist you in finding the perfect piece of jewellery.</p>
        
        <h3>Step 1: Explore our collection.</h3>
        <p>Browse our extensive collection of silver jewellery, including rings, necklaces, and more.</p>

        <h3>Step 2: Get expert advice.</h3>
        <p>Our staff can provide personalized recommendations and answer any questions you have about our products.</p>

        <h3>Step 3: Make your purchase.</h3>
        <p>Complete your purchase with a variety of payment options available in-store.</p>

        <br/>
        <h3>OUR BRANCHES</h3>
        <p>In addition to our online store, you can visit us at our physical locations. We have branches in the following cities:</p>
        <p>
          <b>Islamabad Branch:</b>
          <br/>Plot No. 1, Street 1, Jinnah Avenue, Blue Area, Islamabad
        </p>
        <p>
          <b>Karachi Branch:</b>
          <br/>Shop No. 5, Main Tariq Road, Block 2, PECHS, Karachi
        </p>
        <p>
          <b>Lahore Branch:</b>
          <br/>15-C, Gulberg II, Main Boulevard, Lahore
        </p>
      </div>

    </>
  );
}

export default BuyAtStore;
