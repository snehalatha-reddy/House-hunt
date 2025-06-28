import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Modals from './components/Modals';
import './App.css';

const App = () => {
  // Initial properties data
  const initialProperties = [
    {
      id: 1,
      name: "Modern Downtown Apartment",
      description: "Beautiful modern apartment in the heart of downtown.",
      address: "123 Main St, Cityville",
      type: "apartment",
      price: 1500,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 850,
      image: "https://placehold.co/600x400?text=Modern+Apartment"
    },
    {
      id: 2,
      name: "Cozy Suburban House",
      description: "Charming 3-bedroom house in a quiet neighborhood.",
      address: "456 Oak Ave, Suburbia",
      type: "house",
      price: 2000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      image: "https://placehold.co/600x400?text=Cozy+House"
    }
  ];

  // State management
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPostProperty, setShowPostProperty] = useState(false);
  const [properties, setProperties] = useState(initialProperties);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    type: ''
  });

  // Filter properties based on search criteria
  const filteredProperties = properties.filter(property => {
    return (
      (!searchParams.location || 
       property.address.toLowerCase().includes(searchParams.location.toLowerCase())) &&
      (!searchParams.minPrice || property.price >= parseInt(searchParams.minPrice)) &&
      (!searchParams.maxPrice || property.price <= parseInt(searchParams.maxPrice)) &&
      (!searchParams.bedrooms || property.bedrooms >= parseInt(searchParams.bedrooms)) &&
      (!searchParams.type || property.type === searchParams.type)
    );
  });

  // Handle property search
  const handleSearch = (params) => {
    setSearchParams(params);
  };

  // Handle adding new property
  const handleAddProperty = (newProperty) => {
    const propertyWithId = {
      ...newProperty,
      id: Date.now(), // Use timestamp for unique ID
      price: parseInt(newProperty.price),
      bedrooms: parseInt(newProperty.bedrooms),
      bathrooms: parseInt(newProperty.bathrooms),
      sqft: parseInt(newProperty.sqft)
    };
    setProperties([...properties, propertyWithId]);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          onLogin={() => setShowLogin(true)} 
          onRegister={() => setShowRegister(true)}
          onPostProperty={() => {
            if (!currentUser) {
              setShowLogin(true);
            } else if (currentUser.role === 'landlord') {
              setShowPostProperty(true);
            } else {
              alert('You must be a landlord to post properties');
            }
          }}
          currentUser={currentUser}
        />
        
        <Routes>
          <Route path="/" element={
            <Home 
              onSearch={handleSearch} 
              properties={filteredProperties} 
            />
          } />
          <Route path="/about" element={<About />} />
        </Routes>

        <Modals
          showLogin={showLogin}
          showRegister={showRegister}
          showPostProperty={currentUser?.role === 'landlord' && showPostProperty}
          onClose={() => {
            setShowLogin(false);
            setShowRegister(false);
            setShowPostProperty(false);
          }}
          onAddProperty={handleAddProperty}
          onLoginSuccess={(user) => {
            setCurrentUser(user);
            if (user.role === 'landlord') {
              setShowPostProperty(true);
            }
          }}
        />
      </div>
    </Router>
  );
};

export default App;
