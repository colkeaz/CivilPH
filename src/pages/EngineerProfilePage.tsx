import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  MapPin, 
  Star, 
  Briefcase, 
  CheckCircle2, 
  Share2, 
  Calendar, 
  MessageSquare,
  Clock,
  Layers,
  Languages,
  Award,
  AlertCircle,
  ChevronLeft
} from 'lucide-react';
import { mockEngineers } from '../data/engineers';

const EngineerProfilePage = () => {
   const navigate = useNavigate();
  const { id } = useParams();
  
  // Find the engineer based on the ID from the URL
  const engineer = mockEngineers.find(eng => eng.id === Number(id));

  // Handle case where engineer is not found
  if (!engineer) {
    return (
      <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center space-y-6 max-w-md px-6">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto border border-red-100">
              <AlertCircle size={40} className="text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Engineer Not Found</h1>
            <p className="text-gray-500">The profile for ID {id} was not found.</p>
            <Link to="/engineers" className="inline-block bg-[#006574] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#004e5a] transition-all">
              Back to Directory
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-[1280px] mx-auto px-6">

            {/* ✅ BACK BUTTON (ADDED ONLY THIS BLOCK) */}
      <div className="max-w-[1280px] mx-auto px-6 pt-6 mb-6">
        <button
          onClick={() => navigate('/engineers')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#006574] font-medium transition cursor-pointer"
        >
          <ChevronLeft size={20} />
          Back to Engineers
        </button>
      </div>
          
          {/* Profile Header Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <img 
              src={engineer.avatar} 
              alt={engineer.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-8 border-gray-50 shadow-sm"
            />
            <div className="flex-grow text-center md:text-left space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{engineer.name}</h1>
                <div className="flex items-center justify-center md:justify-start gap-2 bg-gray-50 border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold">
                  <CheckCircle2 size={16} className="text-[#006574]" fill="#006574" stroke="white" />
                  Verified PRC: {engineer.license}
                </div>
              </div>
              
              <p className="text-xl text-gray-500 font-medium">{engineer.title}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {engineer.location}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  {engineer.experience}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* About Me */}
              <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {engineer.about}
                </p>
              </section>

              {/* Specializations */}
              <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Specializations</h2>
                <div className="flex flex-wrap gap-3">
                  {engineer.specializations?.map((spec, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold border border-gray-200">
                      {spec}
                    </span>
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
                <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                  {engineer.experienceList?.map((exp, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#006574] z-10"></div>
                      <div className="mb-1">
                        <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                        <p className="text-[#006574] font-bold">{exp.company} | <span className="text-gray-400 font-medium">{exp.period}</span></p>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Project Portfolio */}
              {engineer.portfolio && engineer.portfolio.length > 0 && (
                <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Portfolio</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {engineer.portfolio.map((project, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Client Reviews */}
              <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Client Reviews</h2>
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-xl">
                    <Star size={24} className="text-yellow-500 fill-yellow-500" />
                    {engineer.rating} <span className="text-gray-400 font-medium text-base">({engineer.reviewCount} Reviews)</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {engineer.reviews?.map((rev, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} size={14} className={j < rev.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{rev.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{rev.title}</h4>
                      <p className="text-gray-600 italic text-sm mb-4 leading-relaxed">{rev.content}</p>
                      <div className="text-sm font-bold text-gray-900">
                        - {rev.author}{rev.role && <span className="text-gray-400 font-medium">, {rev.role}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Sidebar Column */}
            <aside className="lg:col-span-4 space-y-6 sticky top-24">
              
              {/* Booking Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-green-100">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Available for Hire
                  </div>
                 
                </div>

                <div className="mb-8">
                  <p className="text-gray-500 font-medium mb-1">Consultation Rate</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-gray-900">₱{engineer.rate}</span>
                    <span className="text-gray-400 font-medium mb-1">/ hr</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link 
                    to={`/booking/${id}`} 
                    className="w-full bg-[#006574] text-white font-bold py-4 rounded-xl hover:bg-[#004e5a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#006574]/10"
                  >
                    <Calendar size={20} />
                    Book a Consultation
                  </Link>
                  
                </div>

                <hr className="my-8 border-gray-100" />

                <div className="space-y-6">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Quick Facts</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-600 font-medium">
                        <Clock size={18} className="text-gray-400" />
                        Response Time
                      </div>
                      <span className="text-gray-900 font-bold">{engineer.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-600 font-medium">
                        <Layers size={18} className="text-gray-400" />
                        Projects Completed
                      </div>
                      <span className="text-gray-900 font-bold">{engineer.projectsCompleted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-600 font-medium">
                        <Languages size={18} className="text-gray-400" />
                        Languages
                      </div>
                      <span className="text-gray-900 font-bold">{engineer.languages}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Info */}
              <div className="bg-[#001f25] rounded-3xl p-8 text-white">
                <div className="w-12 h-12 bg-[#006574]/30 rounded-xl flex items-center justify-center mb-6 border border-[#006574]/50">
                  <Award className="text-[#a3eeff]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Verified Professional</h3>
                <p className="text-gray-400 text-sm leading-relaxed">This engineer has undergone a rigorous verification process, including PRC license validation and identity authentication.</p>
              </div>

            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EngineerProfilePage;
