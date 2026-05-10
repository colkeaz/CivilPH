import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../store/AuthContext';
import { getClientAppointments, getEngineerAppointments } from '../services/bookingService';
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  FileText, 
  ChevronRight, 
  AlertCircle,
  TrendingUp,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

const ProfilePage = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user) return;
      try {
        setLoading(true);
        let data;
        if (user.role === 'engineer') {
          data = await getEngineerAppointments(user.id);
        } else {
          data = await getClientAppointments(user.id);
        }
        setAppointments(data || []);
      } catch (err: any) {
        console.error('Failed to fetch appointments:', err);
        setError('Failed to load your consultations. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user]);

  const getStatusClass = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'confirmed': return 'status-confirmed';
      case 'pending': return 'status-pending';
      case 'completed': return 'status-completed';
      case 'cancelled': return 'status-cancelled';
      default: return 'status-pending';
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-[#f8fafd] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <div className="profile-container">
          
          {/* User Profile Header Card */}
          <div className="profile-card">
            <div className="profile-hero">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
                <div className="profile-avatar-wrapper">
                  <div className="profile-avatar">
                    {user?.firstName?.charAt(0) || 'U'}
                  </div>
                </div>
                <div className="profile-info text-center md:text-left flex-1">
                  <h1>{user?.firstName} {user?.lastName}</h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/80">
                    <span className="flex items-center gap-1.5"><Mail size={16} /> {user?.email}</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> {user?.role === 'engineer' ? 'Licensed Civil Engineer' : 'Property Owner'}</span>
                  </div>
                  <div className="profile-badge">
                    <TrendingUp size={14} /> Account Verified
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-content">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h2 className="section-title">
                  <Calendar className="text-[#006574]" /> 
                  Your Consultations
                </h2>
                <Link 
                  to="/reports" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#006574] hover:underline"
                >
                  View Structural Reports <ChevronRight size={16} />
                </Link>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-10 h-10 border-4 border-[#006574] border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-gray-500 font-medium">Loading your consultations...</p>
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-center gap-4 text-red-600">
                  <AlertCircle size={24} />
                  <p className="font-semibold">{error}</p>
                </div>
              ) : appointments.length > 0 ? (
                <div className="consultation-grid">
                  {appointments.map((apt) => (
                    <div key={apt.id} className="consultation-card">
                      <div className="consultation-header">
                        <div className="engineer-info">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-[#006574] font-bold">
                            {user?.role === 'engineer' 
                              ? apt.profiles?.first_name?.charAt(0) 
                              : apt.engineers?.profiles?.first_name?.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                              {user?.role === 'engineer' ? 'Client' : 'Engineer'}
                            </p>
                            <p className="font-bold text-gray-900">
                              {user?.role === 'engineer' 
                                ? `${apt.profiles?.first_name} ${apt.profiles?.last_name}`
                                : `${apt.engineers?.profiles?.first_name} ${apt.engineers?.profiles?.last_name}`}
                            </p>
                          </div>
                        </div>
                        <span className={`status-pill ${getStatusClass(apt.status)}`}>
                          {apt.status || 'Pending'}
                        </span>
                      </div>

                      <div className="consultation-details">
                        <div className="detail-item">
                          <span className="detail-label">Service</span>
                          <span className="detail-value">{apt.service_packages?.name}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Price</span>
                          <span className="detail-value text-[#006574]">PHP {apt.service_packages?.price?.toLocaleString()}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Date</span>
                          <span className="detail-value flex items-center gap-1.5"><Calendar size={14} /> {apt.scheduled_date}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Time</span>
                          <span className="detail-value flex items-center gap-1.5"><Clock size={14} /> {apt.scheduled_time}</span>
                        </div>
                      </div>

                      {apt.location_address && (
                        <div className="flex items-start gap-2.5 px-1">
                          <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            <span className="font-bold text-gray-700">Location:</span> {apt.location_address}
                          </p>
                        </div>
                      )}

                      {apt.notes && (
                        <div className="flex items-start gap-2.5 px-1">
                          <FileText size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-500 italic line-clamp-2">
                            "{apt.notes}"
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <div className="empty-state-icon">
                    <Calendar size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No consultations yet</h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    You haven't booked any consultations with our engineers yet. Start by exploring our directory of experts.
                  </p>
                  <Link 
                    to="/engineers" 
                    className="inline-flex items-center gap-2 bg-[#006574] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#004e5a] transition-all shadow-lg shadow-[#006574]/15"
                  >
                    Find an Engineer <ChevronRight size={18} />
                  </Link>
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

export default ProfilePage;
