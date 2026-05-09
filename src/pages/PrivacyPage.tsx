import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>At CivilPH, we are committed to protecting your personal data and respecting your privacy.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This includes your name, email address, phone number, and professional credentials (for engineers).</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to operate and improve our platform, process transactions, facilitate communication between clients and engineers, and ensure compliance with our verification standards.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>We implement robust security measures to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sharing of Information</h2>
            <p>We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating our platform, conducting our business, or serving our users.</p>
            
            <p className="mt-12 text-sm text-gray-400">Last updated: May 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
