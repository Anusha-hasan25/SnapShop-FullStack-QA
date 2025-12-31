import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// --- Reusable Sub-Component: FilterGroup ---
// A collapsible section for categories like 'Material' or 'Stone Type'
const FilterGroup = ({ title, children }) => {
    // Basic state to manage open/close (in a real app, this should handle its own collapse state)
    const [isOpen, setIsOpen] = React.useState(true); 

    return (
        <div className="border-b border-gray-200 py-4">
            <button 
                className="flex justify-between items-center w-full text-lg font-semibold text-gray-800 hover:text-black"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {isOpen && <div className="mt-3 space-y-2">{children}</div>}
        </div>
    );
};


// --- Main Component: FilterPanel ---
const FilterPanel = ({ filters, setFilters }) => {

    // Helper data for filter options
    const MATERIAL_OPTIONS = ['Gold', 'Silver', 'Platinum', 'Rose Gold'];
    const STONE_OPTIONS = ['Diamond', 'Sapphire', 'Pearl', 'Emerald', 'CZ'];

    // Generic handler for checkbox updates
    const handleFilterChange = (group, value) => {
        setFilters(prevFilters => {
            const currentValues = prevFilters[group];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value) // Remove if already exists
                : [...currentValues, value];             // Add if new
            
            return {
                ...prevFilters,
                [group]: newValues,
            };
        });
    };

    // Handler for price slider (simplified for checkboxes in this example)
    const handlePriceChange = (min, max) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            priceRange: [min, max],
        }));
    };


    return (
        <div className="p-4 bg-white rounded-lg shadow-sm sticky top-20">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Filter Products</h3>

            {/* 1. Material Filter Group */}
            <FilterGroup title="Material">
                {MATERIAL_OPTIONS.map((material) => (
                    <label key={material} className="flex items-center text-sm cursor-pointer">
                        <input 
                            type="checkbox" 
                            checked={filters.material.includes(material)}
                            onChange={() => handleFilterChange('material', material)}
                            className="mr-2 rounded text-black border-gray-300 focus:ring-black"
                        />
                        {material}
                    </label>
                ))}
            </FilterGroup>

            {/* 2. Stone Type Filter Group */}
            <FilterGroup title="Stone Type">
                {STONE_OPTIONS.map((stone) => (
                    <label key={stone} className="flex items-center text-sm cursor-pointer">
                        <input 
                            type="checkbox" 
                            checked={filters.stoneType.includes(stone)}
                            onChange={() => handleFilterChange('stoneType', stone)}
                            className="mr-2 rounded text-black border-gray-300 focus:ring-black"
                        />
                        {stone}
                    </label>
                ))}
            </FilterGroup>

            {/* 3. Price Range Filter Group (Simplified) */}
            <FilterGroup title="Price Range">
                {/* In a real app, this would be a Price Slider component.
                    For this basic setup, we'll use simple range buttons/inputs. 
                */}
                <div className="space-y-1">
                    <p className="text-sm font-medium">Current: ${filters.priceRange[0]} - ${filters.priceRange[1]}</p>
                    <button 
                        onClick={() => handlePriceChange(0, 500)} 
                        className="w-full text-left p-1 text-sm rounded hover:bg-gray-100"
                    >
                        Under $500
                    </button>
                    <button 
                        onClick={() => handlePriceChange(500, 2000)} 
                        className="w-full text-left p-1 text-sm rounded hover:bg-gray-100"
                    >
                        $500 - $2000
                    </button>
                    {/* ... more price range options ... */}
                </div>
            </FilterGroup>
            
            {/* Optional: Clear Filters Button */}
            <button 
                onClick={() => setFilters({ material: [], priceRange: [0, 5000], stoneType: [] })}
                className="mt-6 w-full py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
            >
                Clear All Filters
            </button>
        </div>
    );
};

export default FilterPanel;