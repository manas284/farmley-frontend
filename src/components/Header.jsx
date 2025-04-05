import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Farmley</Link>
      </div>

      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
      </nav>

      <div className="search-login-cart">
        <input type="text" placeholder="Search..." className="search-bar" />
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
        <Link to="/cart" className="cart-icon">
          🛒<span className="cart-count">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
