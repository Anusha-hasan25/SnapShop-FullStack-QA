import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import '../info/InfoPages.css';
import "../Collection.css";

const ForHimGifts = () => {
  // 1. wishlist state ko context se nikaalein
  const { addToCart, toggleWishlist, wishlist } = useCart(); 
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const forHimProducts = [
    { id: 'him-1', name: "Onyx Signet Ring", price: 18500, image: "/images/men-onyx-ring.jpg", category: "For Him" },
    { id: 'him-2', name: "Sterling Silver Cuban Chain", price: 55000, image: "/images/men-cuban-chain.jpg", category: "For Him" },
    { id: 'him-3', name: "Matte Black Steel Bracelet", price: 12000, image: "/images/him-black-bracelet.jpg", category: "For Him" },
    { id: 'him-4', name: "Executive Leather Band", price: 15000, image: "/images/him-leather-band.jpg", category: "For Him" },
  ];

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">Gifts For Him</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">Sophisticated designs for the modern gentleman</p>
        </header>
        <div className="product-grid mt-16">
          {forHimProducts.map((item) => {
            // 2. Har item ke liye isFavorite check karein
            const isFavorite = wishlist.some(fav => fav.id === item.id);
            
            return (
              <div key={item.id} className="product-card no-underline text-black group">
                <div className="img-box relative overflow-hidden group bg-gray-50">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>
                  
                  {/* --- SWAROVSKI HEART ICON --- */}
                  <button 
                    className={`swarovski-heart-btn absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 
                      ${isFavorite ? 'is-active bg-red-50' : 'bg-white/80'}`} 
                    onClick={() => toggleWishlist(item)}
                  >
                    <Heart 
                      size={18} 
                      fill={isFavorite ? "#e63946" : "none"} 
                      color={isFavorite ? "#e63946" : "currentColor"} 
                    />
                  </button>
                </div>
                <div className="text-center pt-6">
                  <h3 className="serif text-sm tracking-widest uppercase mb-2">{item.name}</h3>
                  <p className="font-bold mb-4">Rs {item.price.toLocaleString()}</p>
                  <button className="auth-action-btn w-full" onClick={() => addToCart(item, 1)}>ADD TO BAG</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForHimGifts;