import React from 'react';
import { ChevronLeft } from 'lucide-react';

/**
 * PageLayout Component
 * Wraps all main page content to provide consistent styling (margins, max-width),
 * a title banner, and a functional back button for nested pages.
 * * @param {object} props
 * @param {React.ReactNode} props.children - The content of the specific page.
 * @param {string} props.title - The primary title displayed on the page.
 * @param {function} [props.onBack] - Optional function to handle navigation back (e.g., in Product Detail).
 * @returns {JSX.Element}
 */
const PageLayout = ({ children, title, onBack }) => (
  // Outer container: Centers content, provides responsive padding, ensures minimum height
  <div className="p-4 md:p-8 lg:p-12 w-full max-w-7xl mx-auto min-h-[80vh] flex flex-col">
    
    {/* Optional Back Button */}
    {onBack && (
      <button 
        onClick={onBack}
        className="flex items-center text-teal-600 hover:text-teal-800 mb-4 font-medium transition"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Back
      </button>
    )}
    
    {/* Title Banner: Bold, prominent header with a teal separator */}
    <h1 className="text-4xl font-extrabold text-gray-800 mb-6 pb-2 border-b-4 border-teal-400/70">
      {title}
    </h1>
    
    {/* Main Content Area: The polished "middle element" container */}
    <div className="flex-grow bg-white p-6 md:p-10 rounded-xl shadow-2xl border border-gray-100">
        {children}
    </div>
  </div>
);

export default PageLayout;