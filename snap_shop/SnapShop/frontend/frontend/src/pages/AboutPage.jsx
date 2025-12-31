import React from 'react';
import { Heart, DollarSign, Headset, Shield, TrendingUp, Gem } from 'lucide-react';

// Reusable component for displaying core values
const ValueCard = ({ icon: Icon, title, content }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#d4af37] hover:shadow-2xl transition-all duration-300">
        <Icon className="w-10 h-10 text-[#d4af37] mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
    </div>
);

const AboutPage = () => (
    <div className="page-container bg-white">
        {/* Header Section */}
        <div className="space-y-6 mb-12 border-b pb-8 border-gray-200">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Our Story</h1>
            <h2 className="text-2xl font-extrabold text-[#d4af37]">SnapShop 💎: Timeless Elegance Since 2008</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                SnapShop brings you an unmatched range of products, each offering exceptional value. 
                We specialize in handcrafted silver jewellery, including bridal collections, rings, and necklaces.
            </p>
        </div>

        {/* Mission and Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Gem className="w-6 h-6 mr-2 text-[#d4af37]"/> Craftsmanship
                </h3>
                <p className="text-gray-600">
                    At SnapShop, we constantly seek new ideas and innovative designs, offering a perfect 
                    blend of trendy and traditional jewellery. Our focus is on offering an array of 
                    choices for customers who seek true value.
                </p>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-[#d4af37]"/> Growth
                </h3>
                <p className="text-gray-600">
                    The SnapShop journey started in 2008 in Karachi. We have since emerged as a leading 
                    Gold and Silver jewellery manufacturer in Pakistan, committed to continuous excellence.
                </p>
            </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="bg-gray-50 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ValueCard 
                    icon={Heart} 
                    title="QUALITY" 
                    content="Handmade pieces ensuring the highest grade and certified genuineness." 
                />
                <ValueCard 
                    icon={DollarSign} 
                    title="VALUE" 
                    content="Competitive pricing and flexible exchange policies to protect your investment." 
                />
                <ValueCard 
                    icon={Headset} 
                    title="SERVICE" 
                    content="Highest quality service and cash on delivery across Pakistan." 
                />
                <ValueCard 
                    icon={Shield} 
                    title="PEACE OF MIND" 
                    content="Unique free lifetime repair guarantee against manufacturing defects." 
                />
            </div>
        </div>
    </div>
);

export default AboutPage;