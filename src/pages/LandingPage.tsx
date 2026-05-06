import React from 'react';
import Header from '../components/Header';
import HeroSection from '../features/landing/HeroSection';
import WhyChooseSection from '../features/landing/WhyChooseSection';
import Footer from '../components/Footer';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
