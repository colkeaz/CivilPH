import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Search, MapPin, Star, Briefcase, ChevronLeft, ChevronRight,
  ShieldCheck, CheckCircle2, ChevronDown, X
} from 'lucide-react';
import { mockEngineers } from '../data/engineers';

const ENGINEERS_PER_PAGE = 6;

// All unique locations and specialties derived from data
const ALL_LOCATIONS = ['Any Location', ...Array.from(new Set(mockEngineers.map(e => e.city))).sort()];
const ALL_SPECIALTIES = ['All Specializations', ...Array.from(
  new Set(mockEngineers.flatMap(e => e.specialties))
).sort()];
const RATING_OPTIONS = ['Any Rating', '4.8 +', '4.5 +', '4.0 +'];

// Custom dropdown component
interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 flex items-center justify-between text-gray-800 font-medium hover:border-[#006574]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#006574]/20"
      >
        <span className={value === options[0] ? 'text-gray-400' : 'text-gray-900'}>{value}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-[#006574]/5 transition-colors flex items-center justify-between ${
                value === opt ? 'text-[#006574] bg-[#006574]/5' : 'text-gray-700'
              }`}
            >
              {opt}
              {value === opt && <CheckCircle2 size={14} className="text-[#006574]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const EngineersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Any Location');
  const [specialty, setSpecialty] = useState('All Specializations');
  const [minRating, setMinRating] = useState('Any Rating');
  const [currentPage, setCurrentPage] = useState(1);

  // Active filters applied on button press
  const [appliedSearch, setAppliedSearch] = useState('');
  const [appliedLocation, setAppliedLocation] = useState('Any Location');
  const [appliedSpecialty, setAppliedSpecialty] = useState('All Specializations');
  const [appliedRating, setAppliedRating] = useState('Any Rating');

  const applyFilters = () => {
    setAppliedSearch(searchTerm);
    setAppliedLocation(location);
    setAppliedSpecialty(specialty);
    setAppliedRating(minRating);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setLocation('Any Location');
    setSpecialty('All Specializations');
    setMinRating('Any Rating');
    setAppliedSearch('');
    setAppliedLocation('Any Location');
    setAppliedSpecialty('All Specializations');
    setAppliedRating('Any Rating');
    setCurrentPage(1);
  };

  const hasActiveFilters = appliedSearch || appliedLocation !== 'Any Location' ||
    appliedSpecialty !== 'All Specializations' || appliedRating !== 'Any Rating';

  const filteredEngineers = useMemo(() => {
    return mockEngineers.filter(eng => {
      const matchSearch = !appliedSearch ||
        eng.name.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        eng.title.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        eng.specialties.some(s => s.toLowerCase().includes(appliedSearch.toLowerCase()));

      const matchLocation = appliedLocation === 'Any Location' || eng.city === appliedLocation;

      const matchSpecialty = appliedSpecialty === 'All Specializations' ||
        eng.specialties.some(s => s.toLowerCase().includes(appliedSpecialty.toLowerCase()));

      let matchRating = true;
      if (appliedRating === '4.8 +') matchRating = eng.rating >= 4.8;
      else if (appliedRating === '4.5 +') matchRating = eng.rating >= 4.5;
      else if (appliedRating === '4.0 +') matchRating = eng.rating >= 4.0;

      return matchSearch && matchLocation && matchSpecialty && matchRating;
    });
  }, [appliedSearch, appliedLocation, appliedSpecialty, appliedRating]);

  const totalPages = Math.ceil(filteredEngineers.length / ENGINEERS_PER_PAGE);
  const paginatedEngineers = filteredEngineers.slice(
    (currentPage - 1) * ENGINEERS_PER_PAGE,
    currentPage * ENGINEERS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <div className="text-gray-400 font-medium">
              {filteredEngineers.length} Result{filteredEngineers.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Sidebar Filters */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Find an Engineer</h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 font-medium transition-colors"
                    >
                      <X size={12} /> Clear
                    </button>
                  )}
                </div>

                <div className="space-y-5">
                  {/* Search Input */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Name, title or skill..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-[#006574]/20 transition-all outline-none text-gray-900 placeholder-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && applyFilters()}
                      />
                    </div>
                  </div>

                  <CustomDropdown
                    label="Location"
                    options={ALL_LOCATIONS}
                    value={location}
                    onChange={setLocation}
                  />

                  <CustomDropdown
                    label="Specialization"
                    options={ALL_SPECIALTIES}
                    value={specialty}
                    onChange={setSpecialty}
                  />

                  <CustomDropdown
                    label="Minimum Rating"
                    options={RATING_OPTIONS}
                    value={minRating}
                    onChange={setMinRating}
                  />

                  <button
                    onClick={applyFilters}
                    className="w-full bg-[#006574] text-white font-bold py-4 rounded-xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/10 mt-2"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => { setMinRating('4.8 +'); setAppliedRating('4.8 +'); setCurrentPage(1); }}
                    className="flex items-center gap-3 text-gray-600 hover:text-[#006574] transition-colors w-full group text-left"
                  >
                    <Star size={18} className="text-gray-400 group-hover:text-[#006574]" />
                    <span className="font-medium">Top Rated Engineers</span>
                  </button>
                  <button
                    onClick={() => { setLocation('Metro Manila'); setAppliedLocation('Metro Manila'); setCurrentPage(1); }}
                    className="flex items-center gap-3 text-gray-600 hover:text-[#006574] transition-colors w-full group text-left"
                  >
                    <MapPin size={18} className="text-gray-400 group-hover:text-[#006574]" />
                    <span className="font-medium">Metro Manila Engineers</span>
                  </button>
                  <button
                    onClick={() => { setSpecialty('Residential'); setAppliedSpecialty('Residential'); setCurrentPage(1); }}
                    className="flex items-center gap-3 text-gray-600 hover:text-[#006574] transition-colors w-full group text-left"
                  >
                    <CheckCircle2 size={18} className="text-gray-400 group-hover:text-[#006574]" />
                    <span className="font-medium">Residential Specialists</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Engineer Grid */}
            <section className="lg:col-span-9">
              {paginatedEngineers.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Engineers Found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria.</p>
                  <button
                    onClick={clearFilters}
                    className="bg-[#006574] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#004e5a] transition-all"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                    {paginatedEngineers.map((eng) => (
                      <div key={eng.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-all group">
                        <div className="relative mb-4">
                          <img
                            src={eng.avatar || 'https://via.placeholder.com/100'}
                            alt={eng.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 group-hover:border-[#006574]/20 transition-all"
                          />
                          {eng.verified && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#006574] rounded-full flex items-center justify-center">
                              <ShieldCheck size={12} className="text-white" />
                            </div>
                          )}
                        </div>

                        <div className="space-y-1 mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{eng.name}</h3>
                          <p className="text-sm text-gray-500 font-medium">{eng.title}</p>
                          {eng.verified && (
                            <div className="text-xs font-bold text-[#006574] uppercase tracking-wider">
                              ✓ Verified Professional
                            </div>
                          )}
                        </div>

                        <div className="space-y-2 text-gray-500 mb-6 text-sm font-medium w-full">
                          <div className="flex items-center justify-center gap-2">
                            <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                            {eng.city}
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Briefcase size={16} className="text-gray-400 flex-shrink-0" />
                            {eng.experience}
                          </div>
                          <div className="flex items-center justify-center gap-2 text-gray-900 font-bold">
                            <Star size={16} className="text-yellow-500 fill-yellow-500 flex-shrink-0" />
                            {eng.rating.toFixed(1)} ({eng.reviewCount} Reviews)
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-1.5 mb-8 min-h-[52px]">
                          {eng.specialties.slice(0, 3).map((spec, i) => (
                            <span
                              key={i}
                              className="bg-[#ebf5f7] text-[#006574] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
                            >
                              {spec}
                            </span>
                          ))}
                          {eng.specialties.length > 3 && (
                            <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-full">
                              +{eng.specialties.length - 3}
                            </span>
                          )}
                        </div>

                        <Link
                          to={`/engineer/${eng.id}`}
                          className="w-full font-bold py-3 rounded-xl transition-all text-center bg-[#38637a] text-white hover:bg-[#2c4e61]"
                        >
                          View Profile
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-4">
                      <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {Array.from({ length: totalPages }).map((_, i) => {
                        const page = i + 1;
                        return (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-colors ${
                              currentPage === page
                                ? 'bg-[#006574] text-white shadow-lg shadow-[#006574]/20'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}

                  <p className="text-center text-sm text-gray-400 mt-4">
                    Showing {(currentPage - 1) * ENGINEERS_PER_PAGE + 1}–{Math.min(currentPage * ENGINEERS_PER_PAGE, filteredEngineers.length)} of {filteredEngineers.length} engineers
                  </p>
                </>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EngineersPage;
