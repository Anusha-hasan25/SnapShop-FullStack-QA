import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import '../info/InfoPages.css';
import "../Collection.css";
const SilverEarrings = () => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const products = [
    { id: 'se-1', name: "Silver Hoop Earrings", price: 6500, image: "/images/silver-hoops.jpg", category: "Silver" },
    { id: 'se-2', name: "Minimalist Silver Studs", price: 3500, image: "/images/silver-studs.jpg", category: "Silver" },
    { id: 'se-3', name: "Silver Drop Earrings", price: 9500, image: "/images/gold-drop-earrings.jpg", category: "Silver" },
  ];

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header text-center pt-20">
          <h1 className="serif italic text-4xl mb-4">Silver Earrings</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">Shimmering accents in sterling silver</p>
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
export default SilverEarrings;