import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { User, Briefcase } from 'lucide-react';
import logoBanner from '../images/LogoBanner.png';
import '../styles/AuthPages.css';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('homeowner');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, role })
      });
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      login(data.user, 'mock_token');
    } catch (error) {
      // Fallback to localStorage
      const user = { id: Date.now().toString(), firstName, lastName, email, role };
      const users = JSON.parse(localStorage.getItem('civilph_users') || '[]');
      users.push(user);
      localStorage.setItem('civilph_users', JSON.stringify(users));
      login(user, 'fallback_token');
    }
    navigate('/engineers');
  };

  return (
    <div className="auth-split-page">
      {/* Left Panel – Branding */}
      <div className="auth-left-panel">
        <div className="auth-panel-overlay" />
        <div className="auth-panel-content">
          <img src={logoBanner} alt="CEguradista" className="auth-logo-banner" />
          <h2 className="auth-panel-headline">Join the CEguradista Network</h2>
          <p className="auth-panel-subtext">
            Whether you're a homeowner looking for safe structural advice, or a licensed engineer ready to serve — we've got you covered.
          </p>
          <div className="auth-panel-badges">
            <span className="auth-badge">✓ Free to Register</span>
            <span className="auth-badge">✓ PRC Verification Supported</span>
            <span className="auth-badge">✓ Serve or Find Engineers</span>
          </div>
        </div>
      </div>

      {/* Right Panel – Form */}
      <div className="auth-right-panel">
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h1 className="auth-title">Create your account</h1>
            <p className="auth-subtitle">Join the trusted network of licensed civil engineering professionals</p>
          </div>

          <form className="auth-form" onSubmit={handleSignup}>
            {/* Role Selector */}
            <div className="role-selection-cards">
              <div
                className={`role-card ${role === 'homeowner' ? 'active' : ''}`}
                onClick={() => setRole('homeowner')}
              >
                <User className="role-icon" size={24} />
                <span className="role-title">I'm a Client</span>
                <span className="role-subtitle">Looking to hire</span>
              </div>
              <div
                className={`role-card ${role === 'engineer' ? 'active' : ''}`}
                onClick={() => setRole('engineer')}
              >
                <Briefcase className="role-icon" size={24} />
                <span className="role-title">I'm an Engineer</span>
                <span className="role-subtitle">Offering services</span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="input-field"
                  placeholder="Juan"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group half-width">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="input-field"
                  placeholder="Dela Cruz"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="signup-email">Email Address</label>
              <input
                type="email"
                id="signup-email"
                className="input-field"
                placeholder="juan@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                className="input-field"
                placeholder="Create a password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn">Create Account</button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="text-orange">Log in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
