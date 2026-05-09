import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  ShieldCheck, X, ExternalLink, CheckCircle2,
  Users, Clock, BadgeCheck, AlertTriangle
} from 'lucide-react';

const mockPendingEngineers = [
  {
    id: 'eng_1',
    name: 'Engr. John Doe',
    email: 'john.doe@example.com',
    prcNumber: '0123456',
    expiryDate: '2028-12-31',
    specialty: 'Structural Engineering',
    documentUrl: '#',
    submittedAt: '2026-05-08',
  },
  {
    id: 'eng_2',
    name: 'Engr. Jane Smith',
    email: 'jane.smith@example.com',
    prcNumber: '0654321',
    expiryDate: '2027-06-30',
    specialty: 'Geotechnical Engineering',
    documentUrl: '#',
    submittedAt: '2026-05-07',
  },
  {
    id: 'eng_3',
    name: 'Engr. Ramon Cruz',
    email: 'ramon.cruz@example.com',
    prcNumber: '0789012',
    expiryDate: '2029-03-15',
    specialty: 'Construction Management',
    documentUrl: '#',
    submittedAt: '2026-05-06',
  },
];

const VerificationQueue = () => {
  const [pendingList, setPendingList] = useState(mockPendingEngineers);
  const [verified, setVerified] = useState<string[]>([]);
  const [rejected, setRejected] = useState<string[]>([]);

  const handleAction = (id: string, status: 'verified' | 'rejected') => {
    if (status === 'verified') setVerified(v => [...v, id]);
    else setRejected(r => [...r, id]);
    setTimeout(() => setPendingList(prev => prev.filter(e => e.id !== id)), 600);
  };

  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-[1100px] mx-auto px-6">

          {/* Page Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#006574]/10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} className="text-[#006574]" />
              </div>
              <span className="text-xs font-bold text-[#006574] uppercase tracking-widest">Admin Panel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">PRC Verification Queue</h1>
            <p className="text-gray-500 text-lg">Review and verify professional licenses for newly registered engineers.</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Pending Review', value: pendingList.length, icon: <Clock size={18} />, color: 'text-amber-500 bg-amber-50 border-amber-100' },
              { label: 'Verified Today', value: verified.length, icon: <BadgeCheck size={18} />, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
              { label: 'Rejected Today', value: rejected.length, icon: <X size={18} />, color: 'text-red-500 bg-red-50 border-red-100' },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Queue Table Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Pending Applications</h2>
              <span className="text-xs font-bold text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                {pendingList.length} Pending
              </span>
            </div>

            {pendingList.length > 0 ? (
              <div className="divide-y divide-gray-50">
                {pendingList.map((eng) => (
                  <div
                    key={eng.id}
                    className="flex flex-col lg:flex-row lg:items-center gap-4 px-6 py-5 hover:bg-gray-50/50 transition-colors"
                  >
                    {/* Avatar + Info */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-11 h-11 rounded-full bg-[#006574]/10 flex items-center justify-center text-[#006574] font-bold text-sm flex-shrink-0">
                        {eng.name.split(' ')[1]?.[0]}{eng.name.split(' ')[2]?.[0]}
                      </div>
                      <div className="min-w-0 flex-1 pr-4">
                        <p className="font-bold text-gray-900 truncate">{eng.name}</p>
                        <p className="text-sm text-gray-400 truncate">{eng.email}</p>
                      </div>
                    </div>

                    {/* Specialty */}
                    <div className="hidden lg:block w-44 flex-shrink-0">
                      <p className="text-xs text-gray-400 font-medium mb-0.5">Specialty</p>
                      <p className="text-sm font-semibold text-gray-700">{eng.specialty}</p>
                    </div>

                    {/* PRC Info */}
                    <div className="hidden lg:block w-36 flex-shrink-0">
                      <p className="text-xs text-gray-400 font-medium mb-0.5">PRC License</p>
                      <p className="text-sm font-semibold text-gray-700">#{eng.prcNumber}</p>
                      <p className="text-xs text-gray-400">Expires {eng.expiryDate}</p>
                    </div>

                    {/* Submitted */}
                    <div className="hidden lg:block w-28 flex-shrink-0">
                      <p className="text-xs text-gray-400 font-medium mb-0.5">Submitted</p>
                      <p className="text-sm font-semibold text-gray-700">{eng.submittedAt}</p>
                    </div>

                    {/* Document Link */}
                    <div className="w-24 flex-shrink-0">
                      <a
                        href={eng.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006574] hover:underline"
                      >
                        View ID <ExternalLink size={11} />
                      </a>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleAction(eng.id, 'verified')}
                        className="flex items-center gap-1.5 bg-[#006574] text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-[#004e5a] transition-all shadow-sm"
                      >
                        <CheckCircle2 size={14} /> Verify
                      </button>
                      <button
                        onClick={() => handleAction(eng.id, 'rejected')}
                        className="flex items-center gap-1.5 border-2 border-red-100 text-red-500 text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-red-50 transition-all"
                      >
                        <X size={14} /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center px-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 border border-emerald-100">
                  <BadgeCheck size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Queue is clear!</h3>
                <p className="text-gray-400 text-sm">No pending verifications at the moment.</p>
              </div>
            )}
          </div>

          {/* Note */}
          <div className="flex items-start gap-3 mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 font-medium leading-relaxed">
              Always verify the document URL matches the PRC License number before approving. Rejected engineers will receive an email notification automatically.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VerificationQueue;
