import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    <header className={`header ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'light-mode' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Civil<span className="logo-accent">PH</span>
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
