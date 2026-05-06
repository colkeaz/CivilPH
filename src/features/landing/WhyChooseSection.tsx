import React from 'react';
import { FaShieldAlt, FaCalendarCheck, FaClipboardCheck, FaRegMoneyBillAlt } from 'react-icons/fa';
import '../../styles/WhyChooseSection.css';

const features = [
  {
    icon: <FaShieldAlt className="feature-icon text-orange" />,
    title: 'Verified Professionals',
    description: 'Every engineer goes through a strict PRC license verification process before offering services.'
  },
  {
    icon: <FaCalendarCheck className="feature-icon text-orange" />,
    title: 'Easy Online Booking',
    description: 'View real-time availability and book consultations instantly without the back-and-forth.'
  },
  {
    icon: <FaClipboardCheck className="feature-icon text-orange" />,
    title: 'Digital Reports',
    description: 'Receive secure, comprehensive structural assessment reports directly in your account dashboard.'
  },
  {
    icon: <FaRegMoneyBillAlt className="feature-icon text-orange" />,
    title: 'Transparent Pricing',
    description: 'Clear service packages with upfront rates. Pay securely online via GCash, Cards, or QRPH.'
  }
];

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why choose CEguradista?</h2>
          <p className="section-subtitle">
            We are building the safest, most reliable platform to connect you with the Philippines' top structural engineering talent.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
