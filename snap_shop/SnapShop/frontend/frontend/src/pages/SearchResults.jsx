import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || searchParams.get('q') || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`http://127.0.0.1:8000/api/search?q=${query}`)
        .then(res => res.json())
        .then(data => setResults(data));
    }
  }, [query]);

  return (
    <div className="search-results-page pt-32 px-10">
      <h1 className="serif mb-10">Results for "{query}"</h1>
      <div className="products-grid">
        {results.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};
export default SearchResults;