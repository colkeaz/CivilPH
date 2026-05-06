import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../images/Logo.png';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'light-mode' : ''}`}>
      <div className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={logoImg} alt="CEguradista Logo" className="logo-img" />
          <span className="logo-text">CEguradista</span>
        </Link>

        {/* HAMBURGER */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* NAV */}
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
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

      </div>
    </header>
  );
};

export default Header;