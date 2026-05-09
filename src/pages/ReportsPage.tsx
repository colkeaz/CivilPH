import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  FileText, CheckCircle2, Clock, Download, ChevronRight,
  User, CalendarDays, BadgeAlert, Wrench, DollarSign, X
} from 'lucide-react';

import { useAuth } from '../store/AuthContext';
import { getReports, updateReportStatus } from '../services/bookingService';

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  submitted: {
    label: 'Submitted',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    icon: <Clock size={12} />,
  },
  acknowledged: {
    label: 'Acknowledged',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    icon: <CheckCircle2 size={12} />,
  },
  draft: {
    label: 'Draft',
    color: 'bg-gray-50 text-gray-600 border-gray-100',
    icon: <FileText size={12} />,
  }
};

const ReportsPage = () => {
  const { user } = useAuth();
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<any | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      if (!user) return;
      try {
        const data = await getReports(user.id, user.role as any);
        const mapped = data.map((r: any) => ({
          id: r.id,
          title: r.title,
          engineer: `${r.engineers.profiles.first_name} ${r.engineers.profiles.last_name}`,
          client: `${r.profiles.first_name} ${r.profiles.last_name}`,
          date: new Date(r.created_at).toLocaleDateString(),
          status: r.status,
          summary: r.summary,
          recommendations: r.recommendations,
          estimatedCost: r.estimated_cost_min ? `PHP ${r.estimated_cost_min.toLocaleString()} – ${r.estimated_cost_max.toLocaleString()}` : 'N/A',
        }));
        setReports(mapped);
      } catch (err) {
        console.error('Failed to fetch reports:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [user]);

  const handleAcknowledge = async (id: string) => {
    try {
      await updateReportStatus(id, 'acknowledged');
      setReports(prev => prev.map(r => r.id === id ? { ...r, status: 'acknowledged' } : r));
      setSelectedReport(prev => prev && prev.id === id ? { ...prev, status: 'acknowledged' } : prev);
    } catch (err) {
      console.error('Failed to acknowledge report:', err);
    }
  };

  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Reports Portal</h1>
            <p className="text-gray-500 text-lg">Access your structural assessment reports and engineer recommendations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Reports List */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                {reports.length} Report{reports.length !== 1 ? 's' : ''}
              </p>
              {reports.map(report => {
                const cfg = STATUS_CONFIG[report.status] || STATUS_CONFIG.submitted;
                const isSelected = selectedReport?.id === report.id;
                return (
                  <button
                    key={report.id}
                    onClick={() => setSelectedReport(report)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? 'border-[#006574] bg-[#006574]/5 shadow-sm'
                        : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-[#006574] text-white' : 'bg-gray-100 text-gray-400'}`}>
                        <FileText size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm leading-snug line-clamp-2">{report.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-medium">{report.date}</span>
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full border ${cfg.color}`}>
                        {cfg.icon} {cfg.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Report Detail */}
            <div className="lg:col-span-8">
              {selectedReport ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  {/* Detail Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedReport.title}</h2>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5"><User size={14} />{selectedReport.engineer}</span>
                        <span className="flex items-center gap-1.5"><CalendarDays size={14} />{selectedReport.date}</span>
                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full border ${STATUS_CONFIG[selectedReport.status]?.color}`}>
                          {STATUS_CONFIG[selectedReport.status]?.label}
                        </span>
                      </div>
                    </div>
                    <button className="flex-shrink-0 flex items-center gap-2 text-sm font-bold text-[#006574] border border-[#006574]/30 px-4 py-2 rounded-xl hover:bg-[#006574]/5 transition-all">
                      <Download size={15} /> Download PDF
                    </button>
                  </div>

                  <hr className="border-gray-100 mb-6" />

                  <div className="space-y-6">
                    {/* Summary */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center">
                          <FileText size={14} className="text-blue-500" />
                        </div>
                        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Engineer Summary</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 rounded-xl p-4 border border-gray-100">
                        {selectedReport.summary}
                      </p>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center">
                          <Wrench size={14} className="text-amber-500" />
                        </div>
                        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Recommendations</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 rounded-xl p-4 border border-gray-100">
                        {selectedReport.recommendations}
                      </p>
                    </div>

                    {/* Estimated Cost */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center">
                          <DollarSign size={14} className="text-emerald-500" />
                        </div>
                        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Estimated Cost Range</h4>
                      </div>
                      <div className="bg-[#006574]/5 border border-[#006574]/15 rounded-xl p-4">
                        <p className="text-xl font-bold text-[#006574]">{selectedReport.estimatedCost}</p>
                        <p className="text-xs text-gray-400 mt-1">Estimate based on engineer's assessment. Actual costs may vary.</p>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  {selectedReport.status === 'submitted' && (
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                      <button
                        onClick={() => handleAcknowledge(selectedReport.id)}
                        className="flex items-center gap-2 bg-[#006574] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/15"
                      >
                        <CheckCircle2 size={16} /> Acknowledge Receipt
                      </button>
                      <p className="text-xs text-gray-400">Tap to confirm you've reviewed this report.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100">
                    <FileText size={28} className="text-gray-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">No report selected</h3>
                  <p className="text-gray-400 text-sm">Click a report on the left to view its details.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportsPage;
