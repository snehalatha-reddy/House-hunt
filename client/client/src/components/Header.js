import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogin, onRegister, onPostProperty, currentUser }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">House<span>Hunt</span></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {currentUser?.role === 'landlord' && (
            <li><button onClick={onPostProperty}>Post Property</button></li>
          )}
        </ul>
      </nav>
      <div className="auth-buttons">
        {currentUser ? (
          <span>Welcome, {currentUser.name}</span>
        ) : (
          <>
            <button onClick={onLogin}>Login</button>
            <button onClick={onRegister}>Register</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
