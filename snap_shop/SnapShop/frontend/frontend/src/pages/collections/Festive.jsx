import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import { ALL_PRODUCTS } from '../../data/product'; // Global data import
import '../info/InfoPages.css'; // Navbar overlap fix
import "../Collection.css";

const FestiveCollection = () => {
  const { addToCart, toggleWishlist } = useCart();

  // Page refresh par top par scroll karein
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 1. SHORTCUT: Global data se 'festive' items filter karein
  const festiveItems = ALL_PRODUCTS.filter(item => item.category === 'festive');

  return (
    <div className="info-page-wrapper"> {/* Navbar ke niche space */}
      <div className="info-container">
        
        <header className="info-header text-center">
          <h1 className="serif italic">Festive Collection</h1>
          <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">
            Celebrate every occasion with SnapShop Luxe
          </p>
        </header>

        {/* Festive Occasions Icons (User Design) */}
        <div className="festive-occasions flex justify-center gap-10 my-16 text-center">
          <div className="occasion"> <div className="text-4xl mb-2">🌙</div> <h4 className="font-bold">Eid</h4> </div>
          <div className="occasion"> <div className="text-4xl mb-2">🪔</div> <h4 className="font-bold">Diwali</h4> </div>
          <div className="occasion"> <div className="text-4xl mb-2">🎄</div> <h4 className="font-bold">Christmas</h4> </div>
          <div className="occasion"> <div className="text-4xl mb-2">🎉</div> <h4 className="font-bold">New Year</h4> </div>
        </div>

        {/* 2. Standardized Product Grid */}
        <div className="product-grid">
          {festiveItems.map((item) => (
            <div key={item.id} className="product-card no-underline text-black">
              
              <div className="img-box relative overflow-hidden group">
                <Link to={`/product/${item.id}`}>
                  {/* Shortcut: item.image use karein aur images folder path */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </Link>
                <button className="remove-wishlist absolute top-4 right-4" onClick={() => toggleWishlist(item)}>
                  <Heart size={18} />
                </button>
              </div>

              <div className="text-center pt-6">
                <h3 className="serif text-sm tracking-widest uppercase mb-2">{item.name}</h3>
                <p className="font-bold mb-4">Rs {item.price.toLocaleString()}</p>
                
                {/* 3. Button Text White Fix */}
                <button 
                  className="auth-action-btn w-full" 
                  onClick={() => addToCart(item, 1)}
                >
                  <ShoppingBag size={16} className="mr-2" /> ADD TO BAG
                </button>
              </div>

            </div>
          ))}
        </div>

        <footer className="info-footer mt-20">
          <p className="serif italic text-xl tracking-[10px] uppercase">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default FestiveCollection;