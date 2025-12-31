import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import '../info/InfoPages.css';
import "../Collection.css";
const DiamondPendants = () => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const products = [
    { id: 'dp-1', name: "Teardrop Diamond Pendant", price: 125000, image: "/images/diamond-pendant-teardrop.jpg", category: "Diamond" },
    { id: 'dp-2', name: "Celestial Star Pendant", price: 85000, image: "/images/diamond-pendant-star.jpg", category: "Diamond" },
  ];

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center pt-20">
          <h1 className="serif italic text-4xl mb-4">Diamond Pendants</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">Elegant drops that capture every light</p>
        </header>
        <div className="product-grid mt-16">
          {products.map((item) => {
            const isFavorite = wishlist.some(fav => fav.id === item.id);
            return (
              <div key={item.id} className="product-card no-underline text-black group">
                <div className="img-box relative overflow-hidden bg-gray-50">
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
                <div className="text-center pt-6 px-2">
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
export default DiamondPendants;