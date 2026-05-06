import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import '../styles/AuthPages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      login(data.user, data.token);
    } catch (error) {
      // Fallback to localStorage
      const users = JSON.parse(localStorage.getItem('civilph_users') || '[]');
      const user = users.find((u: any) => u.email === email);
      if (user) {
        login(user, 'fallback_token');
      } else {
        alert('Invalid credentials or user not found in local storage.');
        return;
      }
    }
    navigate('/engineers');
  };

  return (
    <div className="auth-page-container">
      <main className="auth-main">
        <div className="auth-card card">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Log in to your CEguradista account</p>
          
          <form className="auth-form" onSubmit={handleLogin}>
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
            
            <div className="auth-actions">
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            </div>
            
            <button type="submit" className="btn btn-primary auth-submit-btn">Log In</button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup" className="text-orange">Sign up here</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
