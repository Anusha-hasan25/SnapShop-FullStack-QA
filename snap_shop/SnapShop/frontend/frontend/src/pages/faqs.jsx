import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../pages/faqs.css';

/**
 * The FAQ Page component.
 * Displays a list of frequently asked questions and answers.
 * @returns {JSX.Element} The FAQ page JSX.
 */
function FAQ() {
  return (
    <>
    
      <div className="page-container">
        <h1 className="page-heading">Frequently Asked Questions</h1>
        
        <h3>Are the products made of pure silver?</h3>
        <p>Yes, all our products are made of pure 925 sterling silver.</p>

        <h3>Are the products offered online different from those available at the store?</h3>
        <p>No, all our products are the same, although some styles may not be available online. If you wish to purchase an item seen in one of our stores, but not on the online store, please write to our customer service and we will make it happen for you.</p>

        <h3>Are the prices offered online the same as on the store?</h3>
        <p>Yes, all our products, be those on the store, or online, carry the same prices.</p>

        <h3>Is there a limit on online purchase?</h3>
        <p>No, there is no limit to purchases and you can shop for as much as you want.</p>
        
        <h3>What modes of payment are accepted for online order?</h3>
        <p>For online orders, you may pay through any of the following modes of payments: Cash on Delivery | All Local / International Debit & Credit Cards | PayPal | QisstPay</p>

        <h3>How does the cash-on-delivery mode work?</h3>
        <p>Only customers in Pakistan can avail our cash-on-delivery service. It is only when the order arrives at your doorstep that you make the payment. Please make sure you have the exact amount of cash on you because our delivery agents do not carry any change.</p>

        <h3>What should I expect to happen once I place an online order?</h3>
        <p>As soon as you place an order, you will receive a confirmation from us, via phone call or email, within the following 24 hours (your order number will be included).</p>

        <h3>What is the delivery time?</h3>
        <p>The delivery time depends on the availability of stock, and the quantity ordered. All deliveries across Pakistan are made within 10-15 days. For international orders, customers must provide up to 2.5 weeks in case of courier, and 3-4 weeks in case of airmail for processing and delivery of orders. In the event of any order that cannot be processed within a specified time, you will be informed.</p>

        <h3>What if an item I have ordered is out of stock?</h3>
        <p>In case an item is not in stock, you need not worry as we will have it specifically made for you. The time to craft the ordered item depends on the quantity, and the style. You will be informed about the delivery shortly after the order gets confirmed.</p>

        <h3>How do I track my order?</h3>
        <p>You can track your order through the confirmation e-mail. Click on ‘track order’ and enter your order number to see the status of your order.</p>

        <h3>What if I have misplaced my order number?</h3>
        <p>In case you misplace your order number, please write to heritage.jewels@hotmail.com with your full name, address, email address, customer ID, and the order-placing date. Alternatively, you can track your orders by providing a specific date range as to when the order was placed.</p>

        <h3>What is my customer ID?</h3>
        <p>Once you register and place an order, you will receive a confirmation email that includes your order number, and your customer ID. You can use this ID for any changes required in your personal information submitted during registration or about the order you have placed. Please note that you can only make changes in the order within 24 hours of placing it; any changes after 24 hours will not be accepted.</p>

        <h3>What is an error message in order status?</h3>
        <p>The ‘error’ message in order status is displayed only when our staff has queries regarding the order. You will be contacted shortly by our agent, via phone call, or email, following which the error message would be no-longer. Likewise, if you have any queries, or wish to make changes to your order, please feel free to write to us at heritage.jewels@hotmail.com.</p>

        <h3>How do I change or cancel an order?</h3>
        <p>If you wish to cancel, or change your order, please write to us at heritage.jewels@hotmail.com with your customer ID. Please make sure you do so within 24 hours of placing the order. We are afraid that any requests later may not be processed as we cannot cancel, or change an order once it has been entered into the manufacturing process. However, we will do our utmost to entertain you.</p>

        <h3>How do I take care of my Heritage silver jewellery products?</h3>
        <p>To maintain the quality of Heritage’s silver jewellery, we suggest you avoid exposing it to water, and perfumes. Sweating may also fade the polish of the product.</p>

        <h3>Do you offer customized orders?</h3>
        <p>Yes, we do offer customized orders. It is always a pleasure to tailor products to customers’ liking.</p>

        <h3>How do I place an order for customized items?</h3>
        <p>For custom orders, please call us on the number mentioned on the website. Our customer representative will then guide you.</p>

        <h3>What is the refund and exchange policy?</h3>
        <p>Please note that we do not offer full refunds, once a product has been purchased. If, for some reason, you do not like your order, you can return it and get a 30% refund of the price. Alternatively, you can exchange the product for 50% of the price.</p>
      </div>
      
    </>
  );
}

export default FAQ;
