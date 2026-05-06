import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingCalendar from '../components/BookingCalendar';
import '../styles/BookingPage.css';

const BookingPage = () => {
  const { engineerId } = useParams();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [consultationType, setConsultationType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const handleNextStep = () => {
    if (step === 1 && !consultationType) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    if (step === 3 && consultationType === 'onsite_inspection' && !address) return;
    
    if (step === 3) {
      // Proceed to checkout
      navigate('/checkout', { 
        state: { 
          engineerId, 
          consultationType, 
          selectedDate, 
          selectedTime, 
          address, 
          notes 
        } 
      });
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="page-container">
      <Header />
      <main className="booking-main">
        <div className="booking-header">
          <h1>Book a Consultation</h1>
          <p>Schedule your session with Engr. Juan Dela Cruz</p>
        </div>

        <div className="booking-stepper">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Service</div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Schedule</div>
          <div className="step-line"></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Details</div>
        </div>

        <div className="booking-content card">
          {step === 1 && (
            <div className="booking-step">
              <h2>Select Consultation Type</h2>
              <div className="service-options">
                <label className={`service-option ${consultationType === 'onsite_inspection' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="consultationType" 
                    value="onsite_inspection" 
                    checked={consultationType === 'onsite_inspection'}
                    onChange={(e) => setConsultationType(e.target.value)}
                  />
                  <div className="option-content">
                    <h3>On-site Inspection</h3>
                    <p>Visual assessment of existing structures at your location.</p>
                    <span className="price">PHP 2,500</span>
                  </div>
                </label>
                
                <label className={`service-option ${consultationType === 'online_consultation' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="consultationType" 
                    value="online_consultation" 
                    checked={consultationType === 'online_consultation'}
                    onChange={(e) => setConsultationType(e.target.value)}
                  />
                  <div className="option-content">
                    <h3>Online Consultation</h3>
                    <p>1-hour video call to review blueprints or discuss concerns.</p>
                    <span className="price">PHP 1,500</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="booking-step">
              <h2>Select Date & Time</h2>
              <BookingCalendar 
                onDateSelect={setSelectedDate} 
                onTimeSelect={setSelectedTime} 
              />
            </div>
          )}

          {step === 3 && (
            <div className="booking-step">
              <h2>Additional Details</h2>
              <form className="details-form">
                {consultationType === 'onsite_inspection' && (
                  <div className="form-group">
                    <label>Project Address *</label>
                    <textarea 
                      className="input-field" 
                      rows={3}
                      placeholder="Enter the full address of the site to be inspected"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    ></textarea>
                  </div>
                )}
                
                <div className="form-group">
                  <label>Notes or specific concerns</label>
                  <textarea 
                    className="input-field" 
                    rows={4}
                    placeholder="E.g., I noticed cracks on the second-floor wall..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
          )}

          <div className="booking-actions">
            {step > 1 && (
              <button 
                className="btn btn-outline" 
                onClick={() => setStep(step - 1)}
                style={{ color: 'var(--midnight-800)', borderColor: 'var(--grey-400)' }}
              >
                Back
              </button>
            )}
            
            <button 
              className="btn btn-primary next-btn" 
              onClick={handleNextStep}
              disabled={
                (step === 1 && !consultationType) || 
                (step === 2 && (!selectedDate || !selectedTime)) ||
                (step === 3 && consultationType === 'onsite_inspection' && !address)
              }
            >
              {step === 3 ? 'Proceed to Checkout' : 'Next Step'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
