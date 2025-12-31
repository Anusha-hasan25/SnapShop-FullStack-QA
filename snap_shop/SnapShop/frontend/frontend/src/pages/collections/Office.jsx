import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import { ALL_PRODUCTS } from '../../data/product'; // Global data import
import '../info/InfoPages.css'; 
import "../Collection.css";

export default function OfficeCollection() {
  const { addToCart, toggleWishlist } = useCart();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Filter products from global list
  const officeProducts = ALL_PRODUCTS.filter(item => item.category === 'office');

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">Office Wear Collection</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">
            Professional and elegant jewellery for the workplace
          </p>
        </header>

        {/* Office Guidelines - Styled for Luxury */}
        <div className="bg-gray-50 p-8 my-12 border-l-4 border-black text-left max-w-2xl mx-auto">
          <h3 className="serif italic text-2xl mb-4">💼 Professional Guidelines</h3>
          <ul className="space-y-2 text-sm tracking-wide uppercase">
            <li>• Keep it simple and professional</li>
            <li>• Avoid overly flashy pieces</li>
            <li>• Choose subtle designs for comfort</li>
          </ul>
        </div>

        <div className="product-grid mt-10">
          {officeProducts.length > 0 ? (
            officeProducts.map((item) => (
              <div key={item.id} className="product-card no-underline text-black">
                <div className="img-box relative overflow-hidden group">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>
                  <button className="remove-wishlist absolute top-4 right-4" onClick={() => toggleWishlist(item)}><Heart size={18} /></button>
                </div>
                <div className="text-center pt-6">
                  <h3 className="serif text-sm tracking-widest uppercase mb-2">{item.name}</h3>
                  <p className="font-bold mb-4 text-gray-600 italic text-[12px]">{item.desc}</p>
                  <p className="font-bold mb-4">Rs {item.price.toLocaleString()}</p>
                  <button className="auth-action-btn w-full" onClick={() => addToCart(item, 1)}>
                    <ShoppingBag size={16} className="mr-2" /> ADD TO BAG
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full py-20 italic">No office wear found. Update products.js with category: 'office'</p>
          )}
        </div>
      </div>
    </div>
  );
}