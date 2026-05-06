import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AuthPages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend auth service
    console.log('Logging in with:', { email, password });
    navigate('/engineers');
  };

  return (
    <div className="auth-page-container">
      <Header />
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
            <p>Don't have an account? <Link to="/signup" className="text-cyan">Sign up here</Link></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
