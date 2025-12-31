import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SnapShop Hero Section
 * Recreates the dark card design with yellow borders.
 */
function hero() {
  return (
    <section className="px-4 py-6">
      <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#FFD700] leading-tight mb-6">
            Exquisite <br />
            Jewellery for <br />
            Every Occasion
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-md font-light">
            Discover our collection of handcrafted jewellery pieces with premium quality diamonds and gold.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/category/rings" className="bg-[#FFD700] text-black font-bold px-10 py-4 rounded-xl no-underline hover:bg-yellow-500 transition-all uppercase text-sm tracking-widest">
              Shop Now
            </Link>
            <Link to="/best-sellers" className="border-2 border-[#FFD700] text-[#FFD700] font-bold px-10 py-4 rounded-xl no-underline hover:bg-[#FFD700] hover:text-black transition-all uppercase text-sm tracking-widest">
              View Collections
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative border-2 border-[#FFD700] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1000" 
              alt="SnapShop Jewellery" 
              className="w-full max-w-lg h-auto object-cover transform hover:scale-105 transition duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default hero;