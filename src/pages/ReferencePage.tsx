import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';
import '../styles/ReferencePage.css';

const ReferencePage = () => {
  return (
    <div className="page-container reference-page">
      <Header />
      <main className="reference-main">
        <section className="reference-hero">
          <div className="reference-hero-content">
            <h1>Engineering Reference Guide</h1>
            <p>Curated Philippine civil engineering standards, codes, and best practices.</p>
            
            <div className="reference-search-wrapper">
              <div className="reference-search-input-container">
                <Search className="search-icon" size={20} />
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search articles, codes, or topics..." 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="reference-categories">
          <div className="categories-header">
            <h2>Browse by Category</h2>
            <p>Click a category to explore its articles, or use the search above to find specific topics.</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card card">
              <h3>Structural Design</h3>
              <p>NSCP provisions, load calculations, and design methodologies.</p>
            </div>
            <div className="category-card card">
              <h3>Geotechnical</h3>
              <p>Soil mechanics, foundation design, and site investigation.</p>
            </div>
            <div className="category-card card">
              <h3>Construction Materials</h3>
              <p>Concrete, steel, timber properties and testing standards.</p>
            </div>
            <div className="category-card card">
              <h3>Project Management</h3>
              <p>Contracts, scheduling, estimating, and quality control.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReferencePage;
