import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import { ALL_PRODUCTS } from '../../data/product';
import '../info/InfoPages.css';
import "../Collection.css";

export default function WeddingCollection() {
  const { addToCart, toggleWishlist } = useCart();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Filter wedding products
  const weddingProducts = ALL_PRODUCTS.filter(item => item.category === 'wedding');

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">Wedding Collection</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">
            Complete jewellery sets for your special day
          </p>
        </header>

        {/* Info Boxes Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-6 border border-gray-100 text-center hover:shadow-lg transition-all">
            <div className="text-3xl mb-4">💍</div>
            <h3 className="serif uppercase tracking-widest text-sm mb-2">Complete Sets</h3>
            <p className="text-[11px] text-gray-500">Necklace, Earrings, Bangles</p>
          </div>
          <div className="p-6 border border-gray-100 text-center hover:shadow-lg transition-all">
            <div className="text-3xl mb-4">💎</div>
            <h3 className="serif uppercase tracking-widest text-sm mb-2">Customizable</h3>
            <p className="text-[11px] text-gray-500">Tailored to your preference</p>
          </div>
          <div className="p-6 border border-gray-100 text-center hover:shadow-lg transition-all">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="serif uppercase tracking-widest text-sm mb-2">Consultation</h3>
            <p className="text-[11px] text-gray-500">Free Expert Advice</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {weddingProducts.length > 0 ? (
            weddingProducts.map((item) => (
              <div key={item.id} className="product-card no-underline text-black">
                <div className="img-box relative overflow-hidden group">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-full aspect-square object-cover" />
                  </Link>
                  <button className="remove-wishlist absolute top-4 right-4" onClick={() => toggleWishlist(item)}><Heart size={18} /></button>
                </div>
                <div className="text-center pt-6">
                  <div className="uppercase text-[10px] tracking-[3px] text-gold mb-2 font-bold">Bridal Selection</div>
                  <h3 className="serif text-sm tracking-widest uppercase mb-2">{item.name}</h3>
                  <p className="font-bold mb-4">Rs {item.price.toLocaleString()}</p>
                  <button className="auth-action-btn w-full" onClick={() => addToCart(item, 1)}>
                    <ShoppingBag size={16} className="mr-2" /> VIEW COMPLETE SET
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full py-20">Wedding data pending in products.js</p>
          )}
        </div>
      </div>
    </div>
  );
}