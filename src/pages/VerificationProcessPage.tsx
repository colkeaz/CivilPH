import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, Search, CheckCircle2 } from 'lucide-react';

const VerificationProcessPage = () => {
  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-[#006574]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#006574]/20">
              <ShieldCheck size={40} className="text-[#006574]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Verification Process</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We maintain strict standards to ensure every engineer on CivilPH is fully licensed and qualified.</p>
          </div>

          <div className="space-y-12 bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Submission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Engineers submit their professional details, including their Professional Regulation Commission (PRC) license number, years of experience, and primary specializations.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                <Search size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Manual Review & PRC Cross-Check</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our administrative team manually reviews each application. We cross-reference the provided PRC license number against the official government database to confirm validity, expiration date, and professional standing.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Approval & Badging</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Once verified, the engineer's profile is activated on the platform and awarded the "Verified Professional" badge, giving clients complete confidence in their credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerificationProcessPage;
