import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, MapPin, Star, Briefcase } from 'lucide-react';
import '../styles/EngineerProfile.css';

const EngineerProfilePage = () => {
  const { id } = useParams();
  
  return (
    <div className="page-container">
      <Header />
      <main className="profile-main">
        <div className="profile-header card">
          <div className="profile-avatar-large">JD</div>
          <div className="profile-info">
            <h1 className="profile-name">Engr. Juan Dela Cruz</h1>
            <p className="profile-credentials">Civil Engineer • License #123456</p>
            <span className="verified-badge"><CheckCircle size={16} style={{ marginRight: '4px' }} /> PRC Verified</span>
            <div className="profile-meta">
              <span><MapPin size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> Quezon City, Metro Manila</span>
              <span><Star size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> 4.8 (124 reviews)</span>
              <span><Briefcase size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> 10+ years experience</span>
            </div>
            <div className="profile-tags">
              <span className="tag-pill-small">Residential</span>
              <span className="tag-pill-small">Retrofit</span>
            </div>
          </div>
          <div className="profile-actions">
            <Link to={`/booking/${id}`} className="btn btn-primary btn-lg">Book Consultation</Link>
            <p className="rate-text">Starting at PHP 1,500</p>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-about card">
            <h2>About Me</h2>
            <p>
              With over 10 years of experience in structural design and retrofitting, 
              I specialize in residential and mid-rise commercial buildings. My goal is 
              to ensure your structures are safe, compliant with the National Structural Code 
              of the Philippines (NSCP), and built to last.
            </p>
          </div>
          
          <div className="profile-services card">
            <h2>Services Offered</h2>
            <div className="service-list">
              <div className="service-item">
                <div className="service-details">
                  <h3>On-site Inspection</h3>
                  <p>Visual assessment of existing structures for cracks, settlement, and damages.</p>
                </div>
                <div className="service-price">PHP 2,500</div>
              </div>
              <div className="service-item">
                <div className="service-details">
                  <h3>Online Consultation</h3>
                  <p>1-hour video call to review blueprints or discuss structural concerns.</p>
                </div>
                <div className="service-price">PHP 1,500</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EngineerProfilePage;
