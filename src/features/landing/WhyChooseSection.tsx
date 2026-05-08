import React from 'react';

const WhyChooseSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CEguradista?</h2>
          <p className="text-lg text-gray-600">We bring certainty to your construction projects through a rigorous, transparent platform.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-blue-600 text-[28px]">health_and_safety</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Uncompromising Safety</h3>
            <p className="text-gray-600 leading-relaxed">Every engineer on our platform is verified against PRC databases. We ensure your project adheres to the National Structural Code of the Philippines.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-teal-600 text-[28px]">handshake</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Radical Accessibility</h3>
            <p className="text-gray-600 leading-relaxed">Finding a structural expert shouldn't be daunting. Our intuitive search and booking system connects homeowners with specialists in clicks, not weeks.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-green-600 text-[28px]">architecture</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Domain Expertise</h3>
            <p className="text-gray-600 leading-relaxed">From residential renovations to commercial high-rises, browse portfolios and reviews to find the precise skill set your build demands.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


