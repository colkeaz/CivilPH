import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          CE<span className="logo-accent">guradista</span>
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/engineers" className="nav-item">Engineers</Link>
          <Link to="/reference" className="nav-item">Reference Guide</Link>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="btn-text">Log In</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
