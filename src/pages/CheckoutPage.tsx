import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { engineerId, consultationType, selectedDate, selectedTime, address } = location.state || {};
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock pricing
  const price = consultationType === 'onsite_inspection' ? 2500 : 1500;
  const serviceName = consultationType === 'onsite_inspection' ? 'On-site Inspection' : 'Online Consultation';

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) return;

    setIsProcessing(true);
    
    // Mock API call to backend payment route
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="page-container">
        <Header />
        <main className="checkout-main success-main">
          <div className="success-card card">
            <div className="success-icon">✓</div>
            <h2>Payment Successful!</h2>
            <p>Your consultation with Engr. Juan Dela Cruz has been confirmed.</p>
            <div className="booking-details-summary">
              <p><strong>Date:</strong> {selectedDate}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Service:</strong> {serviceName}</p>
            </div>
            <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
              Go to My Dashboard
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-container">
      <Header />
      <main className="checkout-main">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <p>Complete your booking securely</p>
        </div>

        <div className="checkout-layout">
          <div className="payment-section card">
            <h2>Select Payment Method</h2>
            <form onSubmit={handlePayment}>
              <div className="payment-options">
                <label className={`payment-option ${paymentMethod === 'gcash' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="gcash" 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-content">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/GCash_logo.svg" alt="GCash" className="payment-logo" />
                    <span>GCash</span>
                  </div>
                </label>
                
                <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="card" 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-content">
                    <span className="payment-icon">💳</span>
                    <span>Credit / Debit Card</span>
                  </div>
                </label>
                
                <label className={`payment-option ${paymentMethod === 'qrph' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="qrph" 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-content">
                    <span className="payment-icon">📱</span>
                    <span>QRPH</span>
                  </div>
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary full-width pay-btn"
                disabled={!paymentMethod || isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay PHP ${price.toLocaleString()}`}
              </button>
              <p className="secure-text">🔒 Secured by PayMongo</p>
            </form>
          </div>

          <aside className="order-summary card">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span className="summary-label">Engineer</span>
              <span className="summary-value">Engr. Juan Dela Cruz</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Service</span>
              <span className="summary-value">{serviceName}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Schedule</span>
              <span className="summary-value">{selectedDate} at {selectedTime}</span>
            </div>
            {address && (
              <div className="summary-item">
                <span className="summary-label">Location</span>
                <span className="summary-value">{address}</span>
              </div>
            )}
            
            <div className="summary-divider"></div>
            
            <div className="summary-total">
              <span>Total Amount</span>
              <span className="total-price">PHP {price.toLocaleString()}</span>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
