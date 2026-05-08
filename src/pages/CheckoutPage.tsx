import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  CheckCircle, CreditCard, Smartphone, Lock, ChevronLeft,
  MapPin, Video, Calendar, Clock, ShieldCheck, ArrowRight
} from 'lucide-react';
import { mockEngineers } from '../data/engineers';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    engineerId, consultationType, selectedDate, selectedTime, address, notes
  } = location.state || {};

  const engineer = mockEngineers.find(e => e.id === Number(engineerId));

  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const price = consultationType === 'onsite_inspection' ? 2500 : 1500;
  const serviceFee = 150;
  const total = price + serviceFee;
  const serviceName = consultationType === 'onsite_inspection' ? 'On-site Inspection' : 'Online Consultation';

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // ── Success screen ─────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20 px-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 max-w-lg w-full text-center">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
              <CheckCircle size={40} className="text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-8">
              Your consultation with <span className="font-semibold text-gray-700">{engineer?.name || 'the engineer'}</span> has been confirmed.
            </p>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 divide-y divide-gray-100 mb-8 text-left">
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-gray-500 font-medium">Service</span>
                <span className="text-sm font-bold text-gray-800">{serviceName}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-gray-500 font-medium">Date</span>
                <span className="text-sm font-bold text-gray-800">{selectedDate}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-gray-500 font-medium">Time</span>
                <span className="text-sm font-bold text-gray-800">{selectedTime}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-gray-500 font-medium">Total Paid</span>
                <span className="text-sm font-bold text-[#006574]">PHP {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/engineers')}
              className="w-full bg-[#006574] text-white font-bold py-4 rounded-2xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/15 flex items-center justify-center gap-2"
            >
              Back to Home <ArrowRight size={18} />
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const paymentOptions = [
    {
      id: 'gcash',
      label: 'GCash',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/52/GCash_logo.svg"
          alt="GCash"
          className="h-7 object-contain"
        />
      ),
    },
    {
      id: 'card',
      label: 'Credit / Debit Card',
      icon: <CreditCard size={22} className="text-gray-500" />,
    },
    {
      id: 'qrph',
      label: 'QR Ph',
      icon: <Smartphone size={22} className="text-gray-500" />,
    },
  ];

  // ── Main Checkout ──────────────────────────────────────────────────────────
  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-[960px] mx-auto px-6">

          {/* Header */}
          <div className="mb-10">
            <Link
              to={`/booking/${engineerId}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#006574] transition-colors mb-6"
            >
              <ChevronLeft size={16} /> Back to Booking
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Secure Checkout</h1>
            <p className="text-gray-500 text-lg">Complete your booking payment securely.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Payment Section */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Select Payment Method</h2>
                <form onSubmit={handlePayment}>
                  <div className="space-y-3 mb-8">
                    {paymentOptions.map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPaymentMethod(opt.id)}
                        className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${
                          paymentMethod === opt.id
                            ? 'border-[#006574] bg-[#006574]/5'
                            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                          {opt.icon}
                        </div>
                        <span className="font-semibold text-gray-800">{opt.label}</span>
                        {paymentMethod === opt.id && (
                          <div className="ml-auto w-5 h-5 bg-[#006574] rounded-full flex items-center justify-center">
                            <CheckCircle size={12} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={!paymentMethod || isProcessing}
                    className="w-full bg-[#006574] text-white font-bold py-4 rounded-2xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/15 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-3 text-lg"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>Pay PHP {total.toLocaleString()}</>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400 font-medium">
                    <Lock size={13} />
                    Secured by PayMongo · SSL Encrypted
                    <ShieldCheck size={13} className="text-[#006574]" />
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <aside className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

                {engineer && (
                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100">
                    <img src={engineer.avatar} alt={engineer.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{engineer.name}</p>
                      <p className="text-xs text-gray-500">{engineer.title}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-2.5 text-sm">
                    {consultationType === 'onsite_inspection'
                      ? <MapPin size={16} className="text-[#006574] mt-0.5 flex-shrink-0" />
                      : <Video size={16} className="text-[#006574] mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className="text-gray-500 text-xs font-medium">Service</p>
                      <p className="font-semibold text-gray-800">{serviceName}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm">
                    <Calendar size={16} className="text-[#006574] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-500 text-xs font-medium">Date</p>
                      <p className="font-semibold text-gray-800">{selectedDate || '—'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm">
                    <Clock size={16} className="text-[#006574] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-500 text-xs font-medium">Time</p>
                      <p className="font-semibold text-gray-800">{selectedTime || '—'}</p>
                    </div>
                  </div>
                  {address && (
                    <div className="flex items-start gap-2.5 text-sm">
                      <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-500 text-xs font-medium">Location</p>
                        <p className="font-semibold text-gray-800">{address}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Consultation Fee</span>
                    <span>PHP {price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Platform Fee</span>
                    <span>PHP {serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-[#006574]">PHP {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                <ShieldCheck size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-700 font-medium leading-relaxed">
                  All engineers on CivilPH are PRC-verified. Your payment is protected by PayMongo.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
