import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../images/Logo.png';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'light-mode' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">

        <Link to="/" className="logo">
          <img src={logoImg} alt="CivilPH" className="logo-img" />
          <span className="logo-text">CEguradista</span>
        </Link>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/engineers" className="nav-item">Engineers</Link>
          <Link to="/reference" className="nav-item">Reference Guide</Link>
          <div className="mobile-only mobile-auth">
            <Link to="/login" className="btn-text">Log In</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </nav>

        <div className="auth-buttons desktop-only">
          <Link to="/login" className="btn-text">Log In</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;