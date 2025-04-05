import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-column">
          <h4>Customer Support</h4>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/support">Contact Support</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Stay updated with Farmley’s latest offers and products.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Farmley. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
