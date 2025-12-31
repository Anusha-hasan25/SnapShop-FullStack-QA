import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import './cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart, cartTotal } = useCart();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <div className="empty-cart-content text-center">
          <ShoppingBag size={80} strokeWidth={1} color="#e5e7eb" className="mx-auto" />
          <h2 className="serif italic text-3xl mt-8 mb-4">YOUR SHOPPING BAG IS EMPTY</h2>
          <Link to="/gold" className="continue-shopping-btn">
            START SHOPPING <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-header serif italic uppercase">Your Bag ({cartItems.length})</h1>
        
        <div className="cart-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <div className="item-header">
                    <h3 className="serif tracking-[2px]">{item.name}</h3>
                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                      <X size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                  <p className="item-category uppercase font-bold text-[#C5A059]">{item.category}</p>
                  <div className="item-actions">
                    <div className="qty-controls">
                      <button onClick={() => addToCart(item, -1)}><Minus size={12} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item, 1)}><Plus size={12} /></button>
                    </div>
                    <p className="item-price">Rs {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h3 className="uppercase tracking-[4px]">Order Summary</h3>
            <div className="summary-row">
              <span className="text-gray-500">Subtotal</span>
              <span>Rs {cartTotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span className="text-gray-500 italic">Shipping</span>
              <span className="text-[#C5A059] font-bold tracking-[2px]">COMPLIMENTARY</span>
            </div>
            <div className="summary-row total border-t pt-6 mt-6">
              <span className="serif italic">Estimated Total</span>
              <span>Rs {cartTotal.toLocaleString()}</span>
            </div>

            {/* THE FIXED BUTTON: All Black with White Text */}
            <Link to="/checkout" className="checkout-btn">
              PROCEED TO CHECKOUT
            </Link>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
              <ShieldCheck size={16} strokeWidth={1} />
              <span className="text-[8px] tracking-[2px] uppercase">Secure Swarovski Payment</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;