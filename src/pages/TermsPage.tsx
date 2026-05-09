import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>Welcome to CivilPH. By accessing our platform, you agree to these Terms of Service.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of the Platform</h2>
            <p>CivilPH serves as a marketplace connecting homeowners and contractors with licensed civil engineers. We do not provide engineering services directly but facilitate the connection and booking process.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Responsibilities</h2>
            <p>Users must provide accurate information when registering or booking services. Engineers are responsible for maintaining the validity of their PRC licenses and providing services as agreed.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payments and Fees</h2>
            <p>All payments made through the platform are subject to a nominal platform fee. We use secure third-party payment gateways to process transactions.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Liability</h2>
            <p>CivilPH is not liable for any disputes arising between clients and engineers regarding the execution or quality of the engineering services provided.</p>
            
            <p className="mt-12 text-sm text-gray-400">Last updated: May 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
