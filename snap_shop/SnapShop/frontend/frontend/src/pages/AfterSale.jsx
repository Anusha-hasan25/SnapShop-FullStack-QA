import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../pages/aftersale.css';
import CategoryTemplate from '../../components/CategoryTemplate';
/**
 * The After-Sales Service Page component.
 * Displays information about the company's jewellery repair and service policies.
 * @returns {JSX.Element} The After-Sales Service page JSX.
 */
function AfterSales() {
  return (
    <>
      <div className="page-container">
        <h1 className="page-heading">After-Sales Service for Jewellery</h1>
        <p>All our repairs are done in our own workshop by experts in the field. Our jewellery, be it silver or gold, can be repaired anytime you feel it requires.</p>
        <p>Silver jewellery repairs include, lacquer and rhodium re-plating, 24 carat gold plating, soldering of any broken item, resizing and stone replacement.</p>
        
        <h2>Sops:</h2>
        <ul>
          <li>Pieces brought for repair should be bought from SnapShop.</li>
          <li>Repair takes approximately 10 to 15 working days.</li>
          <li>There are no charges for one time repair on our products, but after that charges are applied.</li>
          <li>Charges applied are direct expenses occurred on the repairs without any markup.</li>
          <li>It is our sincere effort to return the item to its original appearance.</li>
        </ul>

        <h2>How to:</h2>
        <p>If you would like to take advantage of our after-sales service, please return or drop off at your nearest SnapShop Store.</p>
      </div>
     
    </>
  );
}

export default AfterSales;
