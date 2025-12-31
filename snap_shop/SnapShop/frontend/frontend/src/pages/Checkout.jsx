import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderPayload = {
      name: formData.name,
      email: formData.email,
      total: cartTotal,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload)
      });

      const result = await response.json();

      if (response.ok) {
        clearCart();
        // Seeded order_id ke sath redirect
        navigate(`/order-success/${result.order_id}`); 
      } else {
        alert("Selection could not be reserved. Please try again.");
      }
    } catch (err) {
      alert("Connectivity issue. Ensure your boutique backend is active.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-wrapper">
        <header className="checkout-hero">
          <h1 className="serif italic text-5xl tracking-[10px] uppercase">Finalize Selection</h1>
          <div className="luxury-line"></div>
        </header>

        <div className="checkout-main-grid">
          {/* LEFT: MINIMALIST EDITORIAL FORM */}
          <div className="shipping-info">
            <h2 className="section-label">01. Delivery Destination</h2>
            <form onSubmit={handlePlaceOrder} className="editorial-form">
              <div className="floating-input">
                <input 
                  type="text" 
                  required 
                  placeholder="Full Name" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div className="floating-input">
                <input 
                  type="email" 
                  required 
                  placeholder="Email Address" 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              <div className="floating-input">
                <textarea 
                  required 
                  placeholder="Full Shipping Address" 
                  rows="3" 
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>
              
              <button type="submit" disabled={loading} className="luxury-submit-btn">
                {loading ? "RESERVING..." : "CONFIRM ORDER"} <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* RIGHT: LUXURY RECEIPT */}
          <aside className="order-receipt">
            <h2 className="section-label">02. Your Selection</h2>
            <div className="receipt-items">
              {cartItems.map(item => (
                <div key={item.id} className="receipt-row">
                  <div className="item-meta">
                    <span className="serif italic">{item.name}</span>
                    <span className="qty text-[9px] tracking-[2px]">QTY: {item.quantity}</span>
                  </div>
                  <span className="price text-sm font-medium">Rs {item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="receipt-totals">
              <div className="total-row sub">
                <span className="text-gray-400">Shipping</span>
                <span className="gold-text tracking-[2px]">COMPLIMENTARY</span>
              </div>
              <div className="total-row main">
                <span className="serif italic text-2xl">Total Amount</span>
                <span className="text-2xl font-bold">Rs {cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="secure-footer">
              <ShieldCheck size={14} strokeWidth={1} className="text-gray-300" />
              <span className="tracking-[3px] uppercase text-[8px] text-gray-400">Encrypted Swarovski Transaction</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;