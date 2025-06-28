import React, { useState } from 'react';

const Modals = ({ 
  showLogin, 
  showRegister, 
  showPostProperty, 
  onClose, 
  onAddProperty,
  onLoginSuccess
}) => {
  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    role: 'tenant' 
  });
  const [propertyForm, setPropertyForm] = useState({
    name: '',
    description: '',
    address: '',
    type: 'apartment',
    price: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    image: ''
  });

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // In a real app, authenticate with backend here
    onLoginSuccess({
      name: 'Test User',
      email: loginForm.email,
      role: 'landlord' // or 'tenant' based on your logic
    });
    onClose();
  };

  // Handle register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // In a real app, register with backend here
    onLoginSuccess({
      name: registerForm.name,
      email: registerForm.email,
      role: registerForm.role
    });
    onClose();
  };

  // Handle property form submission
  const handlePropertySubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      name: propertyForm.name,
      description: propertyForm.description,
      address: propertyForm.address,
      type: propertyForm.type,
      price: propertyForm.price,
      bedrooms: propertyForm.bedrooms,
      bathrooms: propertyForm.bathrooms,
      sqft: propertyForm.sqft,
      image: propertyForm.image || 'https://placehold.co/600x400?text=Property+Image'
    };
    onAddProperty(newProperty);
    setPropertyForm({
      name: '',
      description: '',
      address: '',
      type: 'apartment',
      price: '',
      bedrooms: '',
      bathrooms: '',
      sqft: '',
      image: ''
    });
    onClose();
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'number' && value < 0) return; // Prevent negative numbers
    
    if (e.target.form.id === 'login-form') {
      setLoginForm({...loginForm, [name]: value});
    } else if (e.target.form.id === 'register-form') {
      setRegisterForm({...registerForm, [name]: value});
    } else if (e.target.form.id === 'property-form') {
      setPropertyForm({...propertyForm, [name]: value});
    }
  };

  return (
    <>
      {/* Login Modal */}
      {showLogin && (
        <div className="modal active">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Login</h2>
              <button className="close-button" onClick={onClose}>&times;</button>
            </div>
            <form id="login-form" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input 
                  type="email" 
                  id="login-email" 
                  name="email"
                  value={loginForm.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input 
                  type="password" 
                  id="login-password" 
                  name="password"
                  value={loginForm.password}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-actions">
                <button type="button" className="form-button cancel-button" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="form-button submit-button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="modal active">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Register</h2>
              <button className="close-button" onClick={onClose}>&times;</button>
            </div>
            <form id="register-form" onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="register-name">Full Name</label>
                <input 
                  type="text" 
                  id="register-name" 
                  name="name"
                  value={registerForm.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input 
                  type="email" 
                  id="register-email" 
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input 
                  type="password" 
                  id="register-password" 
                  name="password"
                  value={registerForm.password}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-role">I want to</label>
                <select 
                  id="register-role" 
                  name="role"
                  value={registerForm.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="tenant">Find a rental</option>
                  <option value="landlord">List my property</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="button" className="form-button cancel-button" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="form-button submit-button">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Post Property Modal */}
      {showPostProperty && (
        <div className="modal active">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Post a Property</h2>
              <button className="close-button" onClick={onClose}>&times;</button>
            </div>
            <form id="property-form" onSubmit={handlePropertySubmit}>
              <div className="form-group">
                <label htmlFor="property-name">Property Name</label>
                <input 
                  type="text" 
                  id="property-name" 
                  name="name"
                  value={propertyForm.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="property-description">Description</label>
                <textarea 
                  id="property-description" 
                  name="description"
                  value={propertyForm.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="property-address">Address</label>
                <input 
                  type="text" 
                  id="property-address" 
                  name="address"
                  value={propertyForm.address}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="property-type">Property Type</label>
                <select 
                  id="property-type" 
                  name="type"
                  value={propertyForm.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="property-price">Price ($ per month)</label>
                <input 
                  type="number" 
                  id="property-price" 
                  name="price"
                  min="0"
                  value={propertyForm.price}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="property-bedrooms">Bedrooms</label>
                <input 
                  type="number" 
                  id="property-bedrooms" 
                  name="bedrooms"
                  min="0"
                  value={propertyForm.bedrooms}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="property-bathrooms">Bathrooms</label>
                <input 
                  type="number" 
                  id="property-bathrooms" 
                  name="bathrooms"
                  min="0"
                  value={propertyForm.bathrooms}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="property-sqft">Size (sq ft)</label>
                <input 
                  type="number" 
                  id="property-sqft" 
                  name="sqft"
                  min="0"
                  value={propertyForm.sqft}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="property-image">Image URL</label>
                <input 
                  type="url" 
                  id="property-image" 
                  name="image"
                  value={propertyForm.image}
                  onChange={handleInputChange}
                  placeholder="Leave blank for placeholder image"
                />
              </div>
              <div className="form-actions">
                <button type="button" className="form-button cancel-button" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="form-button submit-button">
                  Post Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
