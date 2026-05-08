import React from 'react';
import Header from '../components/Header';
import HeroSection from '../features/landing/HeroSection';
import WhyChooseSection from '../features/landing/WhyChooseSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseSection />

        {/* How It Works Section */}
        <section className="py-24 bg-white">
          <div className="w-full max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 relative">
                <img 
                  alt="Collaborative planning" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt-OKb05as7KtjP9P0JW-NbxQ_gmsKfjLLHbK3B_RNEOO1apToYC04xc4mflecuypXMPHg3oMkRfbBvXteNXkrmTnRgNeDUY3ee54BZDEM5hP0i2zNTIXmhL2-blMDCt2qLEVNapqY6eFSPzsv0pkPjUaIs2ebw4Hkem0vq1Bf4YM0TDVr6v5__4lwR2mGSmSx4YJSgz8DgQHAXGdGkiwyuWKCQG_CldlOIxuT2JXTJxxq3onrtHj9lbiD2PxrIhZGAFRH2zdG_NI" 
                />
                <div className="absolute -right-8 -bottom-8 w-2/3 h-2/3 bg-gray-50 rounded-3xl z-0"></div>
              </div>
              <div className="lg:w-1/2 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-gray-900">How It Works for Homeowners</h2>
                  <p className="text-xl text-gray-600">A streamlined process designed to take you from planning to breaking ground with confidence.</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#006574] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">Search & Filter</h4>
                      <p className="text-gray-600">Define your project scope and locate verified civil engineers in your area with specific domain expertise.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">Review & Connect</h4>
                      <p className="text-gray-600">Examine detailed profiles, past project portfolios, and client reviews before initiating a consultation.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">Hire & Build</h4>
                      <p className="text-gray-600">Securely book your chosen professional and manage communications directly through our platform.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Engineers CTA Section */}
        <section className="py-40 bg-[#191c1e] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-[#006574]/20 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-[#006574]/30">
              <span className="material-symbols-outlined text-4xl text-[#a3eeff]">engineering</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Are you a Licensed Civil Engineer?</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">Join an elite network of professionals. Expand your practice, connect with high-intent clients, and manage your pipeline through our dedicated professional dashboard.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#a3eeff] text-[#001f25] font-bold px-12 py-5 rounded-xl hover:bg-[#76d4e7] transition-all shadow-lg shadow-[#a3eeff]/10">Apply as Engineer</button>
              <button className="border border-gray-600 text-white font-bold px-12 py-5 rounded-xl hover:bg-white/5 transition-all">View Requirements</button>
            </div>
          </div>
        </section>



      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;

