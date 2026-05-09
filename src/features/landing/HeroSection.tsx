import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() || location.trim()) {
      const params = new URLSearchParams();
      if (searchQuery) params.append('q', searchQuery);
      if (location) params.append('location', location);
      navigate(`/engineers?${params.toString()}`);
    }
  };

  return (
    <section className="bg-slate-50 py-20 md:py-32 border-b border-gray-100 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#006574]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Find and Book Licensed <br className="hidden md:block" /> Civil Engineers
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Bridging the gap for safe, legal, and reliable building in the Philippines. Connect with verified professionals today.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <button 
                onClick={() => navigate('/engineers')}
                className="bg-[#006574] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#004e5a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#006574]/20 group"
              >
                Find an Engineer
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/reference')}
                className="bg-white border border-gray-200 text-gray-700 font-bold px-10 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
              >
                Explore Projects
              </button>
            </div>
            
            {/* Search Bar Container */}
            <div className="w-full max-w-3xl">
              <form 
                onSubmit={handleSearch} 
                className="bg-white p-3 rounded-2xl flex flex-col md:flex-row gap-3 shadow-2xl border border-gray-100"
              >
                <div className="flex-grow flex items-center px-4 py-4 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-[#006574]/20 transition-all">
                  <Search className="text-gray-400 mr-3" size={20} />
                  <input 
                    className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder:text-gray-400 p-0 text-lg" 
                    placeholder="Specialty" 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex-grow flex items-center px-4 py-4 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-[#006574]/20 transition-all">
                  <MapPin className="text-gray-400 mr-3" size={20} />
                  <input 
                    className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder:text-gray-400 p-0 text-lg" 
                    placeholder="Location" 
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="bg-[#006574] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#004e5a] transition-all whitespace-nowrap"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          
          {/* Right Image Area */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                alt="Licensed Civil Engineer" 
                className="w-full h-[500px] md:h-[650px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrHusRa_fwfZ0qtrIs1c4SXzPuU7kygUHoHZEa2yztkCVg58aDgWGpcPsBNgTfns8N6p9H_xSInoX__nuROaQO7WntfNdhwTza0eAOCEN6rbMTEcNzJz2_gSNSv8-G1LPfweG-qC3oXAT5UFy9WBTLe01T1t8jvTXk_AMCGpOiW9Aub4G3p-ROTI5ayF6F--dEbpXchiW1jYUmMfliZyZ80QmYLAlAwrFE2o-QjKcKoUE13FZ8-uU7ietkwGa9LjiVMPYhsItzpU8" 
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 flex items-center gap-6 max-w-[320px] z-20">
              <div className="bg-green-100 p-4 rounded-2xl text-green-700 shadow-inner">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl leading-tight">Verified Professionals</p>
                <p className="text-gray-500 font-medium">PRC Licensed Engineers</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
