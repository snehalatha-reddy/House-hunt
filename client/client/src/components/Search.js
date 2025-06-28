import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    type: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <div className="search-container">
      <h2>Find Your Perfect Home</h2>
      <form onSubmit={handleSubmit}>
        <div className="search-filters">
          <div className="filter-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="City, street or address"
              value={searchParams.location}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="filter-group">
            <label htmlFor="type">Property Type</label>
            <select
              id="type"
              name="type"
              value={searchParams.type}
              onChange={handleInputChange}
            >
              <option value="">Any Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="studio">Studio</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Price Range</label>
            <div className="price-range">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                value={searchParams.minPrice}
                onChange={handleInputChange}
              />
              <span>to</span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={searchParams.maxPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="filter-group">
            <label htmlFor="bedrooms">Bedrooms</label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={searchParams.bedrooms}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
        <button type="submit" className="search-button">Search Properties</button>
      </form>
    </div>
  );
};

export default Search;
