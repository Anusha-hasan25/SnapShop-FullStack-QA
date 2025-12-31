import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Context access karein

const CategoryTemplate = ({ title, description, products }) => {
  const { searchQuery } = useCart(); // Global search term

  // Filtering Logic: Har page ke liye yahan handle hogi
  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="category-container p-10">
      <header className="mb-10 text-center">
        <h1 className="serif italic text-5xl mb-4">{title}</h1>
        {/* Bold description for luxury feel */}
        <p className="text-[11px] tracking-[4px] uppercase text-gray-900 font-bold">
          {description}
        </p>
      </header>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="product-card no-underline text-black">
              <div className="img-box overflow-hidden bg-gray-50 mb-4">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-[12px] font-bold tracking-widest uppercase">{item.name}</h3>
              <p className="text-gold font-semibold mt-1">PKR {item.price.toLocaleString()}</p>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 uppercase tracking-[3px] text-xs text-gray-400 font-bold">
            No jewellery found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryTemplate;