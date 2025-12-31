import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ item }) => {
  const { toggleWishlist, wishlist, addToCart } = useCart(); //
  
  const isFavorite = wishlist.some(fav => fav.id === item.id); //

  return (
    <div className="product-card group relative flex flex-col items-center text-center">
      <div className="product-image-wrapper relative overflow-hidden bg-[#F9F9F9] w-full aspect-[4/5] mb-6">
        <Link to={`/product/${item.id}`}>
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </Link>

        {/* Swarovski Heart */}
        <button 
          className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 shadow-sm
            ${isFavorite ? 'bg-red-50' : 'bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100'}`}
          onClick={() => toggleWishlist(item)}
        >
          <Heart 
            size={18} 
            fill={isFavorite ? "#e63946" : "none"} 
            color={isFavorite ? "#e63946" : "#333"} 
          />
        </button>

        <button 
          className="absolute bottom-0 left-0 w-full bg-black text-white py-4 text-[10px] tracking-[3px] 
            translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-bold uppercase"
          onClick={() => addToCart(item, 1)}
        >
          Add to Bag
        </button>
      </div>

      <div className="product-info px-2">
        <p className="text-[9px] tracking-[4px] text-[#C5A059] font-bold uppercase mb-2">SnapShop {item.category}</p>
        <h3 className="serif text-sm tracking-wide mb-2 uppercase">{item.name}</h3>
        <p className="text-sm font-medium text-gray-900">Rs {item.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;