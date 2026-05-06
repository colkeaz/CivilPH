import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import logoBanner from '../images/LogoBanner.png';
import '../styles/AuthPages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      login(data.user, data.token);
    } catch (err) {
      // Fallback to localStorage
      const users = JSON.parse(localStorage.getItem('civilph_users') || '[]');
      const user = users.find((u: any) => u.email === email);
      if (user) {
        login(user, 'fallback_token');
      } else {
        setError('Invalid credentials. Please check your email and password.');
        return;
      }
    }
    navigate('/engineers');
  };

  return (
    <div className="auth-split-page">
      {/* Left Panel - Branding */}
      <div className="auth-left-panel">
        <div className="auth-panel-overlay" />
        <div className="auth-panel-content">
          <img src={logoBanner} alt="CEguradista" className="auth-logo-banner" />
          <h2 className="auth-panel-headline">Structural Consultations, Simplified.</h2>
          <p className="auth-panel-subtext">
            Connect with PRC-verified Civil Engineers for safe, affordable, and professional structural assessments.
          </p>
          <div className="auth-panel-badges">
            <span className="auth-badge">✓ PRC-Verified Engineers</span>
            <span className="auth-badge">✓ Online & On-site</span>
            <span className="auth-badge">✓ Digital Reports</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="auth-right-panel">
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">Log in to your CEguradista account</p>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                type="email"
                id="login-email"
                className="input-field"
                placeholder="juan@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                className="input-field"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="auth-actions">
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn">Log In</button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup" className="text-orange">Sign up here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
