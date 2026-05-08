import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../store/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
    navigate('/');
  };

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
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <div className="w-8 h-8 rounded-full bg-[#006574] flex items-center justify-center text-white text-xs font-bold">
                  {user?.firstName?.charAt(0) || <User size={14} />}
                </div>
                <span>{user?.firstName || 'User'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
              >
                <LogOut size={15} />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-[#191c1e] transition-colors">Log In</Link>
              <Link to="/signup" className="bg-[#006574] text-white text-sm font-bold px-6 py-2.5 rounded hover:bg-[#004e5a] transition-all">Sign Up</Link>
            </>
          )}
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
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 py-2 text-gray-700 font-medium">
                <div className="w-7 h-7 rounded-full bg-[#006574] flex items-center justify-center text-white text-xs font-bold">
                  {user?.firstName?.charAt(0) || '?'}
                </div>
                {user?.firstName} {user?.lastName}
              </div>
              <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 font-medium py-2">
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Log In</Link>
              <Link to="/signup" className="bg-[#006574] text-white text-center py-3 rounded font-bold" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

