// Pehli line mein useState add kar diya gaya hai
import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate , Link} from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/product'; 
import { useCart } from '../context/CartContext';
import { Heart, ChevronLeft, Plus, Minus, Globe, Shield } from 'lucide-react';
import "./Collection.css";
import "./productDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = ALL_PRODUCTS.find(item => item.id === productId);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!product) return <div className="product-detail-page text-center serif italic">Product not found.</div>;

  const isFavorite = wishlist.some(fav => fav.id === product.id);

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 hover:text-black transition-all">
          <ChevronLeft size={12} /> BACK
        </button>
      </div>

      <div className="detail-container">
        {/* LEFT: IMAGE */}
        <div className="relative overflow-hidden group">
          <img src={product.image} alt={product.name} className="main-product-image" />
          <button 
            className={`swarovski-heart-btn absolute top-6 right-6 p-3 rounded-full ${isFavorite ? 'is-active' : ''}`}
            onClick={() => toggleWishlist(product)}
          >
            <Heart size={22} fill={isFavorite ? "#e63946" : "none"} color={isFavorite ? "#e63946" : "#ccc"} />
          </button>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="product-info-details">
          <p className="brand-name">SnapShop Boutique</p>
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-price text-gold">Rs {product.price.toLocaleString()}</p>
          
          <div className="detail-description">
            <p>"{product.desc || 'A signature Swarovski creation embodying the essence of modern luxury.'}"</p>
          </div>

          <div className="purchase-actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={14}/></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}><Plus size={14}/></button>
            </div>
            
            <button className="add-to-cart-btn" onClick={() => addToCart(product, quantity)}>
              ADD TO SHOPPING BAG
            </button>
          </div>

          <div className="trust-badges">
            <div className="badge-item"><Globe size={18} strokeWidth={1}/> Sustainable Design</div>
            <div className="badge-item"><Shield size={18} strokeWidth={1}/> 2-Year Warranty</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;