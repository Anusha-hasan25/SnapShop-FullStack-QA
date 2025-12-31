import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import '../info/InfoPages.css';
import "../Collection.css";

const ForHerGifts = () => {
  const { addToCart, toggleWishlist, wishlist } = useCart(); // Added wishlist
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const forHerProducts = [
    { id: 'her-1', name: "Rose Gold Heart Pendant", price: 45000, image: "/images/her-heart-pendant.jpg", category: "For Her" },
    { id: 'her-2', name: "Diamond Stud Earrings", price: 125000, image: "/images/diamond-studs.jpg", category: "For Her" },
    { id: 'her-3', name: "Pearl Drop Bracelet", price: 35000, image: "/images/pearl-drop-bracelet.jpg", category: "For Her" },
    { id: 'her-4', name: "Crystal Halo Ring", price: 85000, image: "/images/her-halo-ring.jpg", category: "For Her" },
  ];

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">Gifts For Her</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-500">Exquisite pieces for the woman of your life</p>
        </header>
        <div className="product-grid mt-16">
          {forHerProducts.map((item) => {
            // Swarovski Logic
            const isFavorite = wishlist.some(fav => fav.id === item.id);
            
            return (
              <div key={item.id} className="product-card no-underline text-black group">
                <div className="img-box relative overflow-hidden group bg-gray-50">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>
                  
                  {/* Swarovski Functional Heart */}
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

export default ForHerGifts;