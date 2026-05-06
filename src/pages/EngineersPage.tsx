import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, MapPin, Star, Wallet } from 'lucide-react';
import '../styles/EngineersPage.css';

const mockEngineers = [
  { id: 1, name: 'Engr. Juan Dela Cruz', region: 'Metro Manila', city: 'Quezon City', rating: 4.8, reviews: 124, rate: 1500, verified: true, tags: ['Residential', 'Retrofit'] },
  { id: 2, name: 'Engr. Maria Santos', region: 'Cebu', city: 'Cebu City', rating: 4.9, reviews: 89, rate: 2000, verified: true, tags: ['Commercial', 'Design Review'] },
  { id: 3, name: 'Engr. Pedro Reyes', region: 'Davao', city: 'Davao City', rating: 4.7, reviews: 56, rate: 1200, verified: true, tags: ['Inspection', 'Residential'] },
];

const EngineersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="page-container">
      <Header />
      <main className="engineers-main">
        <div className="directory-header">
          <h1>Find an Engineer</h1>
          <p>Browse our network of verified Civil and Structural Engineers</p>
        </div>

        <div className="directory-layout">
          <aside className="filters-sidebar card">
            <h3>Filters</h3>
            
            <div className="filter-group">
              <label>Search by Name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Juan"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <label>Location</label>
              <select className="input-field">
                <option value="">All Regions</option>
                <option value="Metro Manila">Metro Manila</option>
                <option value="Cebu">Cebu</option>
                <option value="Davao">Davao</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Specialization</label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Residential</label>
                <label><input type="checkbox" /> Commercial</label>
                <label><input type="checkbox" /> Retrofit</label>
                <label><input type="checkbox" /> Inspection</label>
              </div>
            </div>
          </aside>

          <section className="engineers-grid">
            {mockEngineers.map(eng => (
              <div key={eng.id} className="engineer-card card">
                <div className="eng-card-header">
                  <div className="eng-avatar">{eng.name.charAt(6)}</div>
                  <div>
                    <h3 className="eng-name">{eng.name}</h3>
                    {eng.verified && <span className="verified-badge"><CheckCircle size={14} style={{ marginRight: '4px' }} /> PRC Verified</span>}
                  </div>
                </div>
                
                <div className="eng-details">
                  <p><MapPin size={14} style={{ marginRight: '4px' }} /> {eng.city}, {eng.region}</p>
                  <p><Star size={14} style={{ marginRight: '4px' }} /> {eng.rating} ({eng.reviews} reviews)</p>
                  <p><Wallet size={14} style={{ marginRight: '4px' }} /> PHP {eng.rate} / hr</p>
                </div>
                
                <div className="eng-tags">
                  {eng.tags.map(tag => (
                    <span key={tag} className="tag-pill-small">{tag}</span>
                  ))}
                </div>
                
                <button className="btn btn-primary full-width mt-md">View Profile</button>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EngineersPage;
