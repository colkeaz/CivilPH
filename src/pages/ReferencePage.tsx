import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Search, 
  ArrowRight, 
  BookOpen, 
  Waves, 
  Construction, 
  ShieldCheck, 
  FileText, 
  ClipboardCheck, 
  Send,
  TowerControl as Tower,
  ChevronRight,
  X,
  Zap
} from 'lucide-react';
import { nscpData, permitData, homeownerArticles } from '../data/reference';

const ReferencePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter logic for the cards
  const filteredNSCP = nscpData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredArticles = homeownerArticles.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Suggestions logic
  useEffect(() => {
    if (searchTerm.length > 1) {
      const allItems = [
        ...nscpData.map(i => ({ ...i, type: 'NSCP' })),
        ...homeownerArticles.map(i => ({ ...i, type: 'Article' }))
      ];
      const matches = allItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      ).slice(0, 5);
      setSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (title: string) => {
    setSearchTerm(title);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const getIcon = (title: string) => {
    if (title.includes('Steel')) return <Tower size={24} />;
    if (title.includes('Concrete')) return <Construction size={24} />;
    if (title.includes('Seismic')) return <Waves size={24} />;
    if (title.includes('Wind')) return <Waves size={24} />;
    return <BookOpen size={24} />;
  };

  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="bg-white py-20 md:py-32 border-b border-gray-100 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#006574 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#ebf5f7] text-[#006574] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} fill="currentColor" />
              Comprehensive Philippine Standards
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#191c1e] mb-8 tracking-tight">
              Engineering Reference Guide
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Access comprehensive structural standards, permitting guidelines, and institutional best practices designed for absolute certainty.
            </p>
            
            <div className="max-w-2xl mx-auto relative mb-8" ref={searchRef}>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search NSCP codes, material specs, or permit requirements..."
                  className="w-full bg-white border-2 border-gray-100 rounded-2xl py-5 px-8 pl-14 text-lg outline-none focus:border-[#006574] focus:ring-4 focus:ring-[#006574]/5 transition-all shadow-xl shadow-gray-200/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => searchTerm.length > 1 && setShowSuggestions(true)}
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#006574]" size={24} />
                
                {searchTerm && (
                  <button 
                    onClick={clearSearch}
                    className="absolute right-32 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}

                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#006574] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/20">
                  Search
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-3">
                    {suggestions.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(item.title)}
                        className="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#ebf5f7] text-[#006574] rounded-lg flex items-center justify-center">
                            {item.type === 'NSCP' ? <BookOpen size={18} /> : <FileText size={18} />}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{item.title}</div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.type}</div>
                          </div>
                        </div>
                        <ArrowRight size={18} className="text-gray-300 group-hover:text-[#006574] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-gray-400 font-bold text-sm uppercase tracking-wider mr-2 self-center">Popular:</span>
              {['Wind Load', 'Concrete Mix', 'Setback Rules'].map(tag => (
                <button 
                  key={tag} 
                  onClick={() => setSearchTerm(tag)}
                  className="bg-white text-gray-600 border border-gray-200 px-5 py-2 rounded-full text-sm font-bold hover:border-[#006574] hover:text-[#006574] transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* NSCP Section */}
        <section className="py-24 bg-[#f8fafd]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#191c1e]">National Structural Code of the Philippines (NSCP)</h2>
                <p className="text-gray-500 text-lg font-medium">Essential technical summaries and code provisions for structural design.</p>
              </div>
              <button className="bg-white border border-gray-200 text-[#191c1e] font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:border-[#006574] hover:text-[#006574] transition-all shadow-sm">
                View Full Code <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredNSCP.length > 0 ? filteredNSCP.map((chapter, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 mb-6 border border-gray-100 group-hover:bg-[#ebf5f7] group-hover:text-[#006574] group-hover:border-[#006574]/20 transition-all">
                    {getIcon(chapter.title)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#006574] transition-colors">{chapter.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {chapter.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <button className="text-[#006574] font-bold text-sm flex items-center gap-2">
                      <BookOpen size={16} /> Read Chapter
                    </button>
                    <div className="flex gap-1">
                      {chapter.tags.slice(0, 1).map(tag => (
                        <span key={tag} className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1 rounded-md font-bold uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-bold text-lg">No matching NSCP codes found for "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Permits Section (Stays static as it's a process) */}
        <section className="py-24 bg-white relative">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#191c1e] mb-6 tracking-tight">Building Permits & Requirements</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              Navigate the bureaucratic process with clarity. A structured guide to securing necessary approvals from the OBO (Office of the Building Official).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {permitData.map((step) => (
                <div key={step.id} className="relative bg-[#f8fafd] p-10 rounded-[2.5rem] border border-gray-100 text-left shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#006574] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl rotate-[-10deg] group-hover:rotate-0 transition-transform">
                    {step.id}
                  </div>
                  <div className="text-[#006574] mb-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                    {step.id === 1 ? <FileText size={28} /> : step.id === 2 ? <ClipboardCheck size={28} /> : <Send size={28} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 font-medium">
                    {step.description}
                  </p>
                  <ul className="space-y-4">
                    {step.checklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                        <div className="w-6 h-6 bg-[#006574]/10 rounded-lg flex items-center justify-center">
                          <ShieldCheck size={14} className="text-[#006574]" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="py-24 bg-[#f8fafd]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#191c1e]">Best Practices for Homeowners</h2>
                <p className="text-gray-500 text-lg font-medium">Educational guides to help you make informed decisions during your construction project.</p>
              </div>
              <button className="text-[#006574] font-bold text-sm bg-white px-6 py-3 rounded-xl border border-gray-200 hover:border-[#006574] transition-all shadow-sm">
                Explore All Guides
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.length > 0 ? filteredArticles.map((article, i) => (
                <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="bg-[#ebf5f7] text-[#006574] text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest">
                        {article.category}
                      </span>
                      {article.tags.slice(0, 1).map(tag => (
                        <span key={tag} className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#006574] transition-colors leading-tight">{article.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                      {article.excerpt}
                    </p>
                    <button className="text-[#006574] font-bold text-sm flex items-center gap-2 group/btn">
                      Read Article 
                      <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )) : (
                <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-bold text-lg">No guides found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default ReferencePage;
