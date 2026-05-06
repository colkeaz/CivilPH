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
            <Link to="/" className="footer-logo">Civil<span className="logo-accent">PH</span></Link>
            <p className="footer-tagline">Connecting clients with PRC-licensed Civil Engineers across the Philippines.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Platform</h4>
              <Link to="/engineers">Find a Civil Engineer</Link>
              <Link to="/reference">Engineering Reference</Link>
              <Link to="/signup">Join as Civil Engineer</Link>
            </div>
            <div className="link-group">
              <h4 className="link-title">Legal</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/admin/verify">Verification Process</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CivilPH. All rights reserved. Made for the Philippines.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
