import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Engineers', path: '/engineers' },
    { name: 'Reference Guide', path: '/reference' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="w-full max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-[#006574]">
            <span className="material-symbols-outlined text-[32px]">architecture</span>
          </div>
          <span className="text-2xl font-bold text-[#191c1e] tracking-tight">CivilPH</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-[#006574] ${
                location.pathname === link.path ? 'text-[#006574] border-b-2 border-[#006574]' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-[#191c1e] transition-colors">Log In</Link>
          <Link to="/signup" className="bg-[#006574] text-white text-sm font-bold px-6 py-2.5 rounded hover:bg-[#004e5a] transition-all">Sign Up</Link>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className="text-gray-900 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-100 my-2" />
          <Link to="/login" className="text-gray-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Log In</Link>
          <Link to="/signup" className="bg-[#006574] text-white text-center py-3 rounded font-bold" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
