import React from 'react';

const SortingDropdown = ({ sortOption, setSortOption }) => {
    
    // Handler function to update the sort option state
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div className="flex items-center space-x-2 text-sm">
            <label htmlFor="sort-by" className="text-gray-600 font-medium">
                Sort By:
            </label>
            
            <select
                id="sort-by"
                value={sortOption}
                onChange={handleSortChange}
                className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            >
                {/* Default/Relevance Sort */}
                <option value="best-match">Best Match</option> 
                
                {/* Time-Based Sort */}
                <option value="newest">Newest Arrivals</option> 
                
                {/* Price Sorts */}
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>

                {/* Optional: Popularity/Rating */}
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option> 
            </select>
        </div>
    );
};

export default SortingDropdown;