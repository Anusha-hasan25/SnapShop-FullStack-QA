import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart, Trash2 } from 'lucide-react';
import './info/InfoPages.css';
import "./Collection.css";

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center pt-20">
          <h1 className="serif italic text-4xl mb-4">My Wishlist</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-500">Your favorite pieces from SnapShop</p>
        </header>

        {wishlist.length === 0 ? (
          <div className="text-center py-32">
            <p className="serif italic text-gray-400 mb-8">Your wishlist is currently empty.</p>
            <Link to="/gold" className="auth-action-btn px-10 py-3 no-underline inline-block">CONTINUE SHOPPING</Link>
          </div>
        ) : (
          /* --- FIXED GRID FOR SMALLER IMAGES --- */
          <div className="product-grid mt-16">
            {wishlist.map((item) => (
              <div key={item.id} className="product-card group no-underline text-black">
                {/* Image Container with fixed aspect ratio */}
                <div className="img-box relative overflow-hidden aspect-square bg-gray-50">
                  <Link to={`/product/${item.id}`}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </Link>
                  
                  {/* Swarovski Active Heart */}
                  <button 
                    className="swarovski-heart-btn is-active absolute top-4 right-4 z-10 p-2 rounded-full" 
                    onClick={() => toggleWishlist(item)}
                  >
                    <Heart size={18} fill="#e63946" color="#e63946" />
                  </button>
                </div>

                <div className="text-center pt-6 px-2">
                  <h3 className="serif text-sm tracking-widest uppercase mb-2">{item.name}</h3>
                  <p className="font-bold mb-4">Rs {item.price.toLocaleString()}</p>
                  
                  <div className="flex flex-col gap-2">
                    <button 
                      className="auth-action-btn w-full flex items-center justify-center gap-2" 
                      onClick={() => addToCart(item, 1)}
                    >
                      <ShoppingBag size={16} /> ADD TO BAG
                    </button>
                    
                    <button 
                      className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-red-500 mt-2 transition-colors"
                      onClick={() => toggleWishlist(item)}
                    >
                      Remove from favorites
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;