import React from 'react';
import PageLayout from '../components/PageLayout.jsx';
import { Heart, DollarSign, Headset, Shield, TrendingUp, Gem } from 'lucide-react';

// Reusable component for displaying core values
const ValueCard = ({ icon: Icon, title, content }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-2xl transition-all duration-300">
        <Icon className="w-10 h-10 text-teal-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
    </div>
);

const AboutPage = () => (
    <PageLayout title="Our Story: The Heart of SnapShop">
        
        {/* Header Section */}
        <div className="space-y-6 mb-12 border-b pb-8 border-gray-200">
            <h2 className="text-3xl font-extrabold text-teal-700">SnapShop 💎: Timeless Elegance Since 2008</h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
                SnapShop brings you an unmatched range of products, each offering exceptional value. We specialize in handcrafted silver jewellery, including bridal collections, rings, necklaces, and tops & earrings for all genders.
            </p>
        </div>

        {/* Mission and Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Gem className="w-6 h-6 mr-2 text-teal-600"/> Craftsmanship & Quality
                </h3>
                <p className="text-gray-600">
                    At SnapShop, we constantly seek new ideas and innovative designs, while offering a perfect blend of trendy and traditional jewellery. We meticulously follow industry trends, ensuring our collections are always fresh. Our focus is on offering an array of choices for customers who seek true value in fine jewellery.
                </p>
                <p className="text-gray-600 border-l-4 border-teal-400 pl-4 italic">
                    "Through the years, SnapShop has been successful in shaping the minds of its diverse clientele to choose quality silver for bridal jewellery, setting a new standard in the market."
                </p>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-teal-600"/> Our Growth Journey
                </h3>
                <p className="text-gray-600">
                    The SnapShop Jewellers journey started in 2008 from Karachi, Pakistan. We have since emerged as a leading integrated Gold and Silver jewellery manufacturer and retailer in Pakistan, committed to continuous growth.
                </p>
                 <p className="text-gray-600">
                    We intend to continue crafting the finest pieces of jewellery for our customers in the coming times, ensuring each piece is one-of-a-kind, adding exceptional value and purpose to your life.
                </p>
            </div>
        </div>

        {/* Core Value Proposition Section */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-inner">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Core Value Proposition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <ValueCard 
                    icon={Heart} 
                    title="QUALITY" 
                    content="We source conflict-free gems from reliable suppliers. Each piece is handmade, ensuring the highest grade and certified genuineness." 
                />
                <ValueCard 
                    icon={DollarSign} 
                    title="VALUE" 
                    content="Competitive pricing monitored against competitors. Flexible exchange and return policies to ensure your investment is protected." 
                />
                <ValueCard 
                    icon={Headset} 
                    title="SERVICE" 
                    content="Delivering the highest quality service. We offer 'Gold Jewellery Excellence in Silver' and provide COD (cash on delivery) across Pakistan, and overseas delivery." 
                />
                <ValueCard 
                    icon={Shield} 
                    title="PEACE OF MIND" 
                    content="We offer a unique free lifetime repair guarantee against manufacturing defects, proving our confidence in our craftsmanship." 
                />
                <ValueCard 
                    icon={TrendingUp} 
                    title="GROWTH" 
                    content="Established in Karachi in 2008, we are a leading integrated Gold and Silver manufacturer and retailer focused on long-term value and expansion." 
                />
            </div>
        </div>
    </PageLayout>
);

export default AboutPage;