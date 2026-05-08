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
  Zap,
  ExternalLink,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { nscpData, permitData, homeownerArticles, NSCPChapter, BestPracticeArticle } from '../data/reference';

// ── NSCP Chapter Detail Modal ─────────────────────────────────────────────────
const NSCPModal = ({ chapter, onClose }: { chapter: NSCPChapter; onClose: () => void }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-8 border-b border-gray-100 flex-shrink-0">
          <div>
            <span className="text-xs font-bold text-[#006574] uppercase tracking-widest">{chapter.chapterRef}</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">{chapter.title}</h2>
            <p className="text-gray-500 text-sm mt-1.5">{chapter.description}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Tags */}
        <div className="px-8 py-4 flex flex-wrap gap-2 border-b border-gray-50 flex-shrink-0">
          {chapter.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-[#ebf5f7] text-[#006574] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Accordion Sections */}
        <div className="overflow-y-auto flex-1 px-8 py-6 space-y-3">
          {chapter.sections.map((sec, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-bold text-gray-800 text-sm">{sec.heading}</span>
                {openIdx === i
                  ? <ChevronUp size={16} className="text-[#006574] flex-shrink-0" />
                  : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{sec.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-gray-100 flex-shrink-0">
          <p className="text-xs text-gray-400">Source: NSCP 2015, 7th Edition</p>
          <a
            href={chapter.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-[#006574] hover:underline"
          >
            Official ASEP Resource <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};

// ── Article Detail Modal ──────────────────────────────────────────────────────
const ArticleModal = ({ article, onClose }: { article: BestPracticeArticle; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-52 flex-shrink-0">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <X size={18} className="text-white" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/20 px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <h2 className="text-xl font-bold text-white mt-2 leading-snug">{article.title}</h2>
          </div>
        </div>

        {/* Meta */}
        <div className="px-8 py-4 border-b border-gray-100 flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <Clock size={13} /> {article.readTime}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {article.tags.map(tag => (
              <span key={tag} className="text-[10px] bg-gray-50 text-gray-500 font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-8 py-6 space-y-6">
          {article.body.map((section, i) => (
            <div key={i}>
              <h3 className="text-base font-bold text-gray-900 mb-2">{section.heading}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="px-8 py-4 border-t border-gray-100 flex-shrink-0">
          <p className="text-xs text-gray-400">Educational content for homeowners. Always consult a licensed PRC engineer for project-specific advice.</p>
        </div>
      </div>
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const ReferencePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeNSCP, setActiveNSCP] = useState<NSCPChapter | null>(null);
  const [activeArticle, setActiveArticle] = useState<BestPracticeArticle | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredNSCP = nscpData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredArticles = homeownerArticles.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    if (searchTerm.length > 1) {
      const allItems = [
        ...nscpData.map(i => ({ ...i, type: 'NSCP' })),
        ...homeownerArticles.map(i => ({ ...i, type: 'Article' }))
      ];
      const matches = allItems
        .filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, 5);
      setSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clearSearch = () => { setSearchTerm(''); setShowSuggestions(false); };

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

      {/* Modals */}
      {activeNSCP && <NSCPModal chapter={activeNSCP} onClose={() => setActiveNSCP(null)} />}
      {activeArticle && <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />}

      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-white py-20 md:py-32 border-b border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#006574 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
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
              Access comprehensive structural standards, permitting guidelines, and best practices based on NSCP 2015.
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
                  <button onClick={clearSearch} className="absolute right-32 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={20} />
                  </button>
                )}
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#006574] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/20">
                  Search
                </button>
              </div>

              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                  <div className="p-3">
                    {suggestions.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (item.type === 'NSCP') setActiveNSCP(nscpData.find(n => n.id === item.id) || null);
                          else setActiveArticle(homeownerArticles.find(a => a.id === item.id) || null);
                          setShowSuggestions(false);
                        }}
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
              {['Wind Load', 'Concrete Mix', 'Setback Rules', 'Seismic'].map(tag => (
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
                <p className="text-gray-500 text-lg font-medium">Essential technical summaries from NSCP 2015, 7th Edition.</p>
              </div>
              <a
                href="https://www.asep.org.ph/resources/codes-and-standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 text-[#191c1e] font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:border-[#006574] hover:text-[#006574] transition-all shadow-sm flex-shrink-0"
              >
                View Full Code <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredNSCP.length > 0 ? filteredNSCP.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveNSCP(chapter)}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all group text-left"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 mb-6 border border-gray-100 group-hover:bg-[#ebf5f7] group-hover:text-[#006574] group-hover:border-[#006574]/20 transition-all">
                    {getIcon(chapter.title)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{chapter.chapterRef}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#006574] transition-colors">{chapter.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{chapter.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#006574] font-bold text-sm flex items-center gap-2">
                      <BookOpen size={16} /> Read Chapter
                    </span>
                    <div className="flex gap-1 flex-wrap">
                      {chapter.tags.slice(0, 1).map(tag => (
                        <span key={tag} className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1 rounded-md font-bold uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                </button>
              )) : (
                <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-bold text-lg">No matching NSCP codes found for "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Permits Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#191c1e] mb-6 tracking-tight">Building Permits & Requirements</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              Navigate the bureaucratic process with clarity. A structured guide to securing approvals from the OBO.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {permitData.map((step) => (
                <div key={step.id} className="relative bg-[#f8fafd] p-10 rounded-[2.5rem] border border-gray-100 text-left shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#006574] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl rotate-[-10deg]">
                    {step.id}
                  </div>
                  <div className="text-[#006574] mb-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                    {step.id === 1 ? <FileText size={28} /> : step.id === 2 ? <ClipboardCheck size={28} /> : <Send size={28} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 font-medium">{step.description}</p>
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
              <span className="text-gray-400 text-sm font-medium">{homeownerArticles.length} Guides Available</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredArticles.length > 0 ? filteredArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all group text-left"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-[#006574] text-[9px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-widest">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="flex items-center gap-1 bg-black/40 text-white/90 text-[9px] font-bold px-2.5 py-1 rounded-lg">
                        <Clock size={9} /> {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#006574] transition-colors leading-tight">{article.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow font-medium">{article.excerpt}</p>
                    <span className="text-[#006574] font-bold text-sm flex items-center gap-2 group/btn">
                      Read Article
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </button>
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
