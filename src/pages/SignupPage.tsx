import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../store/AuthContext';
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
    <div className="auth-page-container">
      <Header />
      <main className="auth-main">
        <div className="auth-card card signup-card">
          <h2 className="auth-title">Create an Account</h2>
          <p className="auth-subtitle">Join CEguradista today</p>
          
          <form className="auth-form" onSubmit={handleSignup}>
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="input-field" 
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
                  required 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="input-field" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="input-field" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>I am a:</label>
              <div className="role-selector">
                <label className={`role-option ${role === 'homeowner' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="role" 
                    value="homeowner" 
                    checked={role === 'homeowner'} 
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Homeowner
                </label>
                <label className={`role-option ${role === 'contractor' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="role" 
                    value="contractor" 
                    checked={role === 'contractor'} 
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Contractor
                </label>
                <label className={`role-option ${role === 'engineer' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="role" 
                    value="engineer" 
                    checked={role === 'engineer'} 
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Civil Engineer
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary auth-submit-btn">Sign Up</button>
          </form>
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="text-orange">Log in here</Link></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
