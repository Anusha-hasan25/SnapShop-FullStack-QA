import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../pages/how-to-order.css';

/**
 * The How to Order Page component.
 * Provides step-by-step instructions on how to place an order.
 * @returns {JSX.Element} The How to Order page JSX.
 */
function HowToOrder() {
  return (
    <>
     
      <div className="page-container p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">How to Order</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Ordering your favorite jewellery from SnapShop 💎 is easy. Just follow these simple steps to complete your purchase.
          </p>
          <div className="space-y-4">
            <p className="font-semibold">Step 1: Browse our collection.</p>
            <p>Explore our products by categories such as rings, necklaces, or earrings to find the perfect piece.</p>
            <p className="font-semibold">Step 2: Add to Cart.</p>
            <p>Once you've found an item you love, click "Add to Cart" to place it in your shopping cart.</p>
            <p className="font-semibold">Step 3: Proceed to Checkout.</p>
            <p>Click on the cart icon and then "Checkout" to review your order and enter your shipping and payment information.</p>
            <p className="font-semibold">Step 4: Place your order.</p>
            <p>Confirm your details and place your order. You will receive an order confirmation via email with all the details.</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default HowToOrder;
