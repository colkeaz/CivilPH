import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              CE<span className="logo-accent">guradista</span>
            </Link>
            <p className="footer-tagline">
              Connecting you with licensed Civil Engineers for safe, affordable, and reliable structural consultations.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Platform</h4>
              <Link to="/engineers">Find an Engineer</Link>
              <Link to="/how-it-works">How it Works</Link>
              <Link to="/pricing">Pricing</Link>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Support</h4>
              <Link to="/reference">Reference Guide</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Legal</h4>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/refunds">Refund Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} CivilPH. All rights reserved.</p>
          <div className="replit-badge">
            <span>Made with Replit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
