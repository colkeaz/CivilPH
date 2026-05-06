import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../../styles/HeroSection.css';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/engineers?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="hero-section">
      <div className="blueprint-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="text-white">Find and Book Licensed</span>
          <br />
          <span className="text-cyan">Civil Engineers</span>
        </h1>
        
        <p className="hero-subtitle">
          Professional structural consultation made accessible, affordable, and safe for homeowners and contractors.
        </p>
        
        <form className="search-bar-wrapper" onSubmit={handleSearch}>
          <div className="search-input-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search by city, region, or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary search-btn">
            Search
          </button>
        </form>
        
        <div className="popular-tags">
          <span className="tags-label">Popular:</span>
          <button className="tag-pill" onClick={() => navigate('/engineers?tag=Residential')}>Residential</button>
          <button className="tag-pill" onClick={() => navigate('/engineers?tag=Retrofit')}>Retrofit</button>
          <button className="tag-pill" onClick={() => navigate('/engineers?tag=Inspection')}>Inspection</button>
          <button className="tag-pill" onClick={() => navigate('/engineers?tag=Design+Review')}>Design Review</button>
        </div>
      </div>
      
      <div className="hero-transition-gradient"></div>
    </section>
  );
};

export default HeroSection;
