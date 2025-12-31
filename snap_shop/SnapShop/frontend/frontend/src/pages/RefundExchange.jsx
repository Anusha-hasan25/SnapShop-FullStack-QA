import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../pages/refund.css';

/**
 * The Refund Policy Page component.
 * Displays the company's refund and exchange policies.
 * @returns {JSX.Element} The Refund Policy page JSX.
 */
function Refund() {
  return (
    <>
     
      <div className="page-container">
        <h1 className="page-heading">Refund Policy</h1>

        <h2>REFUND & EXCHANGE POLICY</h2>
        <p>
          - Not loving your purchase? No problem! You've got 7 days from delivery to return or swap it.
          <br />- Make sure what you're sending back is unused, in its original packaging, with all the labels and stickers still on.
          <br />- This only applies to orders in Pakistan. For international orders, reach out to our customer support for assistance.
        </p>

        <h3>HOW TO SEND ITEMS BACK</h3>
        <p>
          - Shoot us an email at info@heritagejewels.com.pk, telling us why you want to return the items and sharing your order details.
          <br />- Once our team says it's okay, send the package back to our Warehouse.
          <br />- Remember, you'll need to cover the cost of returning the items.
        </p>

        <h3>WHEN WILL YOU GET YOUR REFUND</h3>
        <p>
          - We aim to process your return within 7 working days.
        </p>

        <h3>REFUND DETAILS</h3>
        <p>
          - If your purchase just didn't work out, we'll give you a full refund.
          <br />- Unfortunately, we can't refund the shipping and handling charges.
          <br />- It might take about 7 working days to process the refund, depending on your payment method.
        </p>

        <h3>REFUND & EXCHANGE POLICY AFTER PRODUCT IS USED</h3>
        <p>
          Even if you have used our Product you can still get it exchanged or get a refund
          <br />Below is our Refund and Exchange Policy
          <br />Refund : 30% of Sale Price
          <br />Exchange : 50% of Sale Price
        </p>

      </div>
     
    </>
  );
}

export default Refund;
