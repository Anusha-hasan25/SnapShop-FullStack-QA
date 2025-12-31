import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import '../info/InfoPages.css';
import "../Collection.css";const GoldNecklaces = () => {
  const { addToCart, toggleWishlist, wishlist } = useCart(); // Added wishlist
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const products = [
    { id: 'gn-1', name: "Traditional Bridal Set", price: 850000, image: "/images/gold-bridal-choker.jpg", category: "Gold" },
    { id: 'gn-2', name: "22K Gold Choker", price: 320000, image: "/images/gold-choker-22k.jpg", category: "Gold" },
    { id: 'gn-3', name: "Minimalist Gold Chain", price: 45000, image: "/images/gold-minimal-chain.jpg", category: "Gold" },
  ];

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center">
          <h1 className="serif italic">Gold Necklaces</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">Timeless 22K and 18K purity in every masterpiece</p>
        </header>
        <div className="product-grid mt-16">
          {products.map((item) => {
            const isFavorite = wishlist.some(fav => fav.id === item.id); // Swarovski logic
            return (
              <div key={item.id} className="product-card no-underline text-black group">
                <div className="img-box relative overflow-hidden">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>
                  <button 
                    className={`swarovski-heart-btn absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 ${isFavorite ? 'is-active bg-red-50' : 'bg-white/80'}`} 
                    onClick={() => toggleWishlist(item)}
                  >
                    <Heart size={18} fill={isFavorite ? "#e63946" : "none"} color={isFavorite ? "#e63946" : "currentColor"} />
                  </button>
                </div>
                <div className="text-center pt-6">
                  <h3 className="serif text-sm tracking-widest uppercase mb-2">{item.name}</h3>
                  <p className="font-bold mb-4">Rs {item.price.toLocaleString()}</p>
                  <button className="auth-action-btn w-full flex items-center justify-center gap-2" onClick={() => addToCart(item, 1)}>
                    <ShoppingBag size={16} /> ADD TO BAG
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default GoldNecklaces;