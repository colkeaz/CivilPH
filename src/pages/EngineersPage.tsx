import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, MapPin, Star, Briefcase, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { mockEngineers } from '../data/engineers';

const EngineersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Engineers Directory</h1>
              <p className="text-gray-500 text-lg">Showing verified professionals matching your criteria.</p>
            </div>
            <div className="text-gray-400 font-medium">124 Results</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Filters */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Find an Engineer</h3>
                
                <div className="space-y-5">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search name or key..." 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-[#006574]/10 transition-all outline-none text-gray-900"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#006574]/10 transition-all outline-none text-gray-900 appearance-none">
                      <option>Any Location</option>
                      <option>Metro Manila</option>
                      <option>Cebu City</option>
                      <option>Davao City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Specialization</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#006574]/10 transition-all outline-none text-gray-900 appearance-none">
                      <option>All Specializations</option>
                      <option>Structural</option>
                      <option>Geotechnical</option>
                      <option>Residential</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Minimum Rating</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#006574]/10 transition-all outline-none text-gray-900 appearance-none">
                      <option>Any Rating</option>
                      <option>4.5 +</option>
                      <option>4.0 +</option>
                    </select>
                  </div>

                  <button className="w-full bg-[#006574] text-white font-bold py-4 rounded-xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/10 mt-2">
                    Apply Filters
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
                <div className="space-y-4">
                  <span className="flex items-center gap-3 text-gray-600 hover:text-[#006574] transition-colors w-full group">
                    <Star size={18} className="text-gray-400 group-hover:text-[#006574]" />
                    <span className="font-medium">Top Rated Engineers</span>
                  </span>
                  <span className="flex items-center gap-3 text-gray-600 hover:text-[#006574] transition-colors w-full group">
                    <CheckCircle2 size={18} className="text-gray-400 group-hover:text-[#006574]" />
                    <span className="font-medium">New Professionals</span>
                  </span>
                </div>
              </div>
            </aside>

            {/* Engineer Grid */}
            <section className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {mockEngineers.map((eng) => (
                  <div key={eng.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-all">
                    <div className="relative mb-4">
                      <img 
                        src={eng.avatar || 'https://via.placeholder.com/100'} 
                        alt={eng.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-50"
                      />
                    </div>
                    
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{eng.name}</h3>
                        {eng.verified && (
                          <div className="flex items-center gap-1 text-[#006574]">
                            <ShieldCheck size={16} fill="currentColor" className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-xs font-bold text-[#006574] uppercase tracking-wider">
                        Verified Professional
                      </div>
                    </div>

                    <div className="space-y-2 text-gray-500 mb-6 text-sm font-medium">
                      <div className="flex items-center justify-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        {eng.city}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Briefcase size={16} className="text-gray-400" />
                        {eng.experience}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-900 font-bold">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        {eng.rating} ({eng.reviewCount} Reviews)
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {eng.specialties.map((spec, i) => (
                        <span 
                          key={i} 
                          className="bg-[#ebf5f7] text-[#006574] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to={`/engineer/${eng.id}`} 
                      className={`w-full font-bold py-3 rounded-xl transition-all text-center ${
                        eng.id === -1
                          ? 'border border-[#38637a] text-[#38637a] hover:bg-[#38637a] hover:text-white' 
                          : 'bg-[#38637a] text-white hover:bg-[#2c4e61]'
                      }`}
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#006574] text-white font-bold">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold transition-colors">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EngineersPage;
