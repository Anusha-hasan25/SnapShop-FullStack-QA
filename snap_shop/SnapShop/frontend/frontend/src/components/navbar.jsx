import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  MapPin,
  X
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { cartCount } = useCart();
  const navigate = useNavigate();

  // --- TOGGLE MENU LOGIC ---
  const handleMenuToggle = (menuKey) => {
    if (activeMenu === menuKey) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuKey);
    }
  };

  // --- INTEGRATED SEARCH LOGIC ---
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const cleanTerm = searchTerm.trim();
    
    if (!cleanTerm) return;

    // Search overlay band karein aur input clear karein
    setShowSearch(false);
    setSearchTerm('');

    // URL parameter 'query' use karein jo SearchResults dhoond raha hai
    navigate(`/search?query=${encodeURIComponent(cleanTerm)}`);
  };

  const menuItems = {
    silver: { title: "SILVER", links: [{ name: "Rings", path: "/silver/rings" }, { name: "Necklaces", path: "/silver/necklaces" }, { name: "Bracelets", path: "/silver/bracelets" }, { name: "Earrings", path: "/silver/earrings" },{ name: "All Collections", path: "/silver" }] },
    gold: { title: "GOLD", links: [{ name: "Necklaces", path: "/gold/necklaces" }, { name: "Pendants", path: "/gold/pendants" }, { name: "Rings", path: "/gold/rings" },{ name: "All Collections", path: "/gold" }] },
    diamond: { title: "DIAMOND", links: [{ name: "Rings", path: "/diamond/rings" }, { name: "Pendants", path: "/diamond/pendants" }, { name: "Earrings", path: "/diamond/earrings" },{ name: "All Collections", path: "/diamond" }] },
    men: { title: "MEN", links: [{ name: "Bracelets", path: "/men/bracelets" }, { name: "Chains", path: "/men/chains" }, { name: "Rings", path: "/men/rings" },{ name: "All Collections", path: "/men" }] },
    gifts: { title: "GIFTS", links: [{ name: "Anniversary", path: "/gifts/anniversary" }, { name: "For Her", path: "/gifts/for-her" }, { name: "For Him", path: "/gifts/for-him" }] }
  };

  return (
    <header className="navbar-outer-wrapper">
      <div className="announcement-bar uppercase tracking-[2px]">
        COMPLIMENTARY SHIPPING ON ALL ORDERS ABOVE RS 10,000
      </div>

      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-top-row">
            <Link to="/buy-at-store" className="utility-item"><MapPin size={16} strokeWidth={1.5} /> STORES</Link>
            <Link to="/" className="brand-logo serif italic uppercase tracking-[5px]">SnapShop <span className="logo-icon">💎</span></Link>
            <div className="nav-top-right">
              <Link to="/account" className="utility-item"><User size={18} strokeWidth={1.5} /> ACCOUNT</Link>
              <Link to="/wishlist" className="utility-item"><Heart size={18} strokeWidth={1.5} /> WISHLIST</Link>
              <Link to="/cart" className="utility-item cart-link">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="cart-badge">{cartCount || 0}</span>
                CART
              </Link>
            </div>
          </div>

          <div className="nav-bottom-row">
            {Object.keys(menuItems).map((key) => (
              <div key={key} className="nav-item-container">
                <button 
                  className={`nav-link-btn ${activeMenu === key ? 'active' : ''} tracking-[3px]`}
                  onClick={() => handleMenuToggle(key)}
                >
                  {menuItems[key].title} 
                  <ChevronDown 
                    size={10} 
                    strokeWidth={1} 
                    className={activeMenu === key ? 'rotate-icon transition-transform' : ''} 
                  />
                </button>
              </div>
            ))}

            <button className="icon-btn search-trigger" onClick={() => setShowSearch(true)}>
              <Search size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* SEARCH OVERLAY */}
        {showSearch && (
          <>
            <div className="swarovski-search-overlay">
              <div className="search-container">
                <form className="search-form" onSubmit={handleSearchSubmit}>
                  <div className="search-input-wrapper">
                    <input 
                      type="text" 
                      placeholder="WHAT ARE YOU LOOKING FOR?" 
                      value={searchTerm} 
                      onChange={(e) => setSearchTerm(e.target.value)} 
                      autoFocus 
                      className="serif italic"
                    />
                    <button type="submit" className="search-submit-icon"><Search size={26} strokeWidth={1} /></button>
                  </div>
                </form>
                <button className="close-overlay" onClick={() => setShowSearch(false)}><X size={32} strokeWidth={1} /></button>
              </div>
            </div>
            <div className="search-backdrop" onClick={() => setShowSearch(false)} />
          </>
        )}

        {/* MEGA MENU */}
        {activeMenu && (
          <div className="mega-menu-overlay animate-fadeIn">
            <div className="mega-menu-content">
              <div className="mega-menu-column">
                <h4 className="tracking-[4px] text-[#C5A059]">EXPLORE {menuItems[activeMenu].title}</h4>
                <ul>
                  {menuItems[activeMenu].links.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} onClick={() => setActiveMenu(null)} className="hover:translate-x-2 transition-transform inline-block">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mega-menu-featured">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800" alt="Featured Jewelry" className="grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* BACKDROP */}
      {activeMenu && <div className="menu-backdrop" onClick={() => setActiveMenu(null)} />}
    </header>
  );
};

export default Navbar;