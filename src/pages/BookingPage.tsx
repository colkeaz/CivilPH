import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingCalendar from '../components/BookingCalendar';
import {
  MapPin, Video, CheckCircle2, ChevronRight, ChevronLeft,
  Calendar, FileText, ArrowRight, ShieldCheck, ClipboardList, FileQuestion
} from 'lucide-react';
// import { mockEngineers } from '../data/engineers';

import { getEngineerById, getServicePackages } from '../services/engineerService';

const STEPS = ['Service', 'Schedule', 'Details'];

const BookingPage = () => {
  const { engineerId } = useParams();
  const navigate = useNavigate();

  const [engineer, setEngineer] = useState<any>(null);
  const [servicePackages, setServicePackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);
  const [consultationType, setConsultationType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!engineerId) return;
      try {
        const engData = await getEngineerById(engineerId);
        setEngineer({
          id: engData.id,
          name: `${engData.first_name} ${engData.last_name}`,
          avatar: engData.avatar_url || 'https://via.placeholder.com/150',
          verified: engData.engineers.verification_status === 'verified',
        });

        const packages = await getServicePackages(engineerId);
        setServicePackages(packages);
      } catch (err) {
        console.error('Failed to fetch booking data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [engineerId]);

  const isNextDisabled =
    (step === 1 && !selectedPackageId) ||
    (step === 2 && (!selectedDate || !selectedTime)) ||
    (step === 3 && consultationType === 'onsite_inspection' && !address);

  const handleNext = () => {
    if (isNextDisabled) return;
    if (step === 3) {
      const selectedPackage = servicePackages.find(p => p.id === selectedPackageId);
      navigate('/checkout', {
        state: { 
          engineerId, 
          selectedPackageId,
          consultationType, 
          selectedDate, 
          selectedTime, 
          address, 
          notes, 
          price: selectedPackage?.price || 0 
        }
      });
    } else {
      setStep(s => s + 1);
    }
  };

  const serviceOptions = [
    {
      id: 'onsite_inspection',
      icon: <MapPin size={24} />,
      title: 'On-site Inspection',
      desc: 'Visual assessment of existing structures at your location.',
      price: 'PHP 2,500',
      badge: 'Most Popular',
    },
    {
      id: 'online_consultation',
      icon: <Video size={24} />,
      title: 'Online Consultation',
      desc: '1-hour video call to review blueprints or discuss concerns.',
      price: 'PHP 1,500',
      badge: null,
    },
    {
      id: 'design_review',
      icon: <ClipboardList size={24} />,
      title: 'Design Review',
      desc: 'Engineer reviews your architectural or structural plans and provides compliance feedback.',
      price: 'PHP 3,000',
      badge: null,
    },
    {
      id: 'quotation_request',
      icon: <FileQuestion size={24} />,
      title: 'Quotation Request',
      desc: 'Get a formal cost estimate for your construction or retrofitting project.',
      price: 'PHP 800',
      badge: 'Quick & Easy',
    },
  ];

  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-[900px] mx-auto px-6">

          {/* Page Header */}
          <div className="mb-10">
            <Link
              to={`/engineer/${engineerId}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#006574] transition-colors mb-6"
            >
              <ChevronLeft size={16} />
              Back to Profile
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Book a Consultation</h1>
            {engineer ? (
              <p className="text-gray-500 text-lg flex items-center gap-2">
                with
                <img src={engineer.avatar} alt={engineer.name} className="w-7 h-7 rounded-full object-cover inline-block" />
                <span className="font-semibold text-gray-700">{engineer.name}</span>
                {engineer.verified && <ShieldCheck size={16} className="text-[#006574]" />}
              </p>
            ) : (
              <p className="text-gray-500 text-lg">Schedule your consultation session</p>
            )}
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-0 mb-10">
            {STEPS.map((label, i) => {
              const num = i + 1;
              const isActive = step === num;
              const isDone = step > num;
              return (
                <React.Fragment key={label}>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      isDone ? 'bg-[#006574] text-white' :
                      isActive ? 'bg-[#006574] text-white ring-4 ring-[#006574]/20' :
                      'bg-white border-2 border-gray-200 text-gray-400'
                    }`}>
                      {isDone ? <CheckCircle2 size={18} /> : num}
                    </div>
                    <span className={`text-sm font-semibold hidden sm:block ${
                      isActive ? 'text-[#006574]' : isDone ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-3 transition-all ${step > num ? 'bg-[#006574]' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">

            {/* Step 1 – Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Consultation Type</h2>
                <p className="text-gray-500 mb-8">Choose the service that best fits your project needs.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {servicePackages.map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedPackageId(opt.id);
                        setConsultationType(opt.consultation_type);
                      }}
                      className={`relative text-left p-6 rounded-2xl border-2 transition-all group ${
                        selectedPackageId === opt.id
                          ? 'border-[#006574] bg-[#006574]/5 shadow-md'
                          : 'border-gray-100 hover:border-[#006574]/40 hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                        selectedPackageId === opt.id ? 'bg-[#006574] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#006574]/10 group-hover:text-[#006574]'
                      }`}>
                        {opt.consultation_type === 'onsite_inspection' ? <MapPin size={24} /> : <Video size={24} />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{opt.name}</h3>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{opt.description}</p>
                      <p className={`text-lg font-bold ${selectedPackageId === opt.id ? 'text-[#006574]' : 'text-gray-800'}`}>
                        PHP {opt.price.toLocaleString()}
                      </p>
                      {selectedPackageId === opt.id && (
                        <div className="absolute top-4 left-4 w-5 h-5 bg-[#006574] rounded-full flex items-center justify-center">
                          <CheckCircle2 size={12} className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                  {servicePackages.length === 0 && !loading && (
                    <div className="col-span-full py-10 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <p className="text-gray-500">No service packages available for this engineer.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2 – Schedule */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Pick a Date & Time</h2>
                <p className="text-gray-500 mb-8">Select an available date and preferred time slot.</p>
                <BookingCalendar
                  onDateSelect={setSelectedDate}
                  onTimeSelect={setSelectedTime}
                />
                {selectedDate && selectedTime && (
                  <div className="mt-6 flex items-center gap-3 bg-[#006574]/5 border border-[#006574]/20 rounded-xl px-5 py-4">
                    <Calendar size={20} className="text-[#006574] flex-shrink-0" />
                    <p className="text-sm font-semibold text-gray-800">
                      Scheduled for <span className="text-[#006574]">{selectedDate}</span> at <span className="text-[#006574]">{selectedTime}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3 – Details */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Additional Details</h2>
                <p className="text-gray-500 mb-8">Help the engineer prepare by providing more context about your project.</p>

                {/* Summary badge */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700">
                    {consultationType === 'onsite_inspection' ? <MapPin size={16} className="text-[#006574]" /> : <Video size={16} className="text-[#006574]" />}
                    {consultationType === 'onsite_inspection' ? 'On-site Inspection' : 'Online Consultation'}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700">
                    <Calendar size={16} className="text-[#006574]" />
                    {selectedDate} · {selectedTime}
                  </div>
                </div>

                <div className="space-y-6">
                  {consultationType === 'onsite_inspection' && (
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                        Project Address <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Enter the full address of the site to be inspected..."
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-5 outline-none focus:border-[#006574] focus:ring-4 focus:ring-[#006574]/5 transition-all font-medium text-gray-900 resize-none"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      <span className="flex items-center gap-2"><FileText size={14} /> Notes or Specific Concerns</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="E.g., I noticed cracks on the second-floor wall near the window. The building is about 15 years old..."
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-5 outline-none focus:border-[#006574] focus:ring-4 focus:ring-[#006574]/5 transition-all font-medium text-gray-900 resize-none"
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-2">Optional but recommended — helps the engineer come prepared.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Navigation Actions */}
          <div className="flex items-center justify-between gap-4">
            {step > 1 ? (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <ChevronLeft size={18} />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="flex items-center gap-2 bg-[#006574] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/15 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none ml-auto"
            >
              {step === 3 ? (
                <>Proceed to Checkout <ArrowRight size={18} /></>
              ) : (
                <>Next Step <ChevronRight size={18} /></>
              )}
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
