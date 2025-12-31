import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';

// Layout Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

// Core Pages
import Home from './pages/home';
import Account from './pages/Account'; 
import SearchResults from './pages/SearchResults';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout'; 
import OrderSuccess from './pages/OrderSuccess'; 
import ProductDetail from './pages/ProductDetailPage';
import AdminDashboard from './pages/AdminDashboard'; // Naya Page

// --- COLLECTIONS & CATEGORIES ---
import GoldCollection from './pages/gold/gold';
import SilverCollection from './pages/silver/silver';
import DiamondCollection from './pages/diamond/diamond';
import MenCollection from './pages/men/Men'; 
import GoldNecklaces from './pages/gold/Necklaces';
import GoldPendants from './pages/gold/Pendants';
import GoldRings from './pages/gold/Rings';
import SilverBracelets from './pages/silver/Bracelets';
import SilverEarrings from './pages/silver/Earrings';
import SilverRings from './pages/silver/Rings';
import SilverNecklaces from './pages/silver/Necklaces';
import DiamondEarrings from './pages/diamond/Earrings'; 
import DiamondPendants from './pages/diamond/Pendants'; 
import DiamondRings from './pages/diamond/Rings'; 
import MenBracelets from './pages/men/Bracelets';
import MenChains from './pages/men/Chains';
import MenRings from './pages/men/Rings';

// --- GIFTS & INFO ---
import ForHerGifts from './pages/gifts/ForHer';
import ForHimGifts from './pages/gifts/ForHim';
import AnniversaryGifts from './pages/gifts/Anniversary';
import About from './pages/info/About';
import Terms from './pages/info/Terms';
import PrivacyPolicy from './pages/info/PrivacyPolicy';
import RefundPolicy from './pages/info/RefundPolicy';
import Stores from './pages/info/Stores';
import SizeGuide from'./pages/info/SizeGuide';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow"> 
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success/:orderId" element={<OrderSuccess />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/account" element={<Account />} />
                
                

                {/* Collections */}
                <Route path="/gold" element={<GoldCollection />} />
                <Route path="/gold/necklaces" element={<GoldNecklaces />} />
                <Route path="/gold/pendants" element={<GoldPendants />} />
                <Route path="/gold/rings" element={<GoldRings />} />
                <Route path="/silver" element={<SilverCollection />} />
                <Route path="/silver/necklaces" element={<SilverNecklaces />} />
                <Route path="/silver/earrings" element={<SilverEarrings />} />
                <Route path="/silver/rings" element={<SilverRings />} />
                <Route path="/silver/bracelets" element={<SilverBracelets />} />
                <Route path="/diamond" element={<DiamondCollection />} />
                <Route path="/diamond/earrings" element={<DiamondEarrings />} />
                <Route path="/diamond/pendants" element={<DiamondPendants />} />
                <Route path="/diamond/rings" element={<DiamondRings />} />
                <Route path="/men" element={<MenCollection />} />
                <Route path="/men/bracelets" element={<MenBracelets />} />
                <Route path="/men/chains" element={<MenChains />} />
                <Route path="/men/rings" element={<MenRings />} />
                <Route path="/gifts/for-her" element={<ForHerGifts />} />
                <Route path="/gifts/for-him" element={<ForHimGifts />} />
                <Route path="/gifts/anniversary" element={<AnniversaryGifts />} />

                {/* Info Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/size-guide" element={<SizeGuide />} />

                <Route path="*" element={<div className="pt-48 text-center">404: Page Not Found</div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;