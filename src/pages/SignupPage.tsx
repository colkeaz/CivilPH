import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { Mail, Lock, User, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { supabase } from '../utils/supabaseClient';

const SignupPage = () => {
  const [role, setRole] = useState<'homeowner' | 'engineer'>('homeowner');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !phone || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    try {
      const firstName = fullName.split(' ')[0];
      const lastName = fullName.split(' ').slice(1).join(' ') || ' ';

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            firstName,
            lastName,
            phone,
            role: role === 'homeowner' ? 'homeowner' : 'engineer'
          }
        }
      });

      if (signUpError) throw signUpError;
      
      setToast({ message: 'Registration Successful! Please check your email for verification.', type: 'success' });
      
      // If email confirmation is disabled in Supabase, the user might be logged in immediately
      if (data.session) {
        setTimeout(() => {
          navigate('/engineers');
        }, 2000);
      }
      
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-[1200px] w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[800px] border border-gray-100">
          
          {/* Left Panel - Hero Image */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1541888941257-18ce9e9e623b?auto=format&fit=crop&q=80&w=1200" 
              alt="Civil Engineer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#053B50]/90 via-[#053B50]/40 to-transparent"></div>
            
            <div className="absolute top-12 left-12 lg:top-20 lg:left-20 flex items-center gap-2 text-white">
               <div className="text-[#7ED7C1]">
                <span className="material-symbols-outlined text-4xl">architecture</span>
              </div>
              <span className="text-3xl font-bold tracking-tight">CivilPH</span>
            </div>

            <div className="absolute bottom-12 left-12 lg:bottom-20 lg:left-20 space-y-4 max-w-md">
              <h2 className="text-5xl font-bold text-white leading-tight">
                Build with Certainty.
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Join the premier network connecting Filipino homeowners with verified, licensed civil engineering professionals.
              </p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-md w-full space-y-8">
              <div className="space-y-3 text-center lg:text-left">
                <h1 className="text-4xl font-bold text-[#191c1e] tracking-tight">Create an Account</h1>
                <p className="text-gray-500 font-medium text-lg">Join CivilPH to start your journey.</p>
              </div>

              {/* User Type Toggle */}
              <div className="bg-[#F8FAFC] p-1.5 rounded-2xl flex border border-gray-100">
                <button 
                  onClick={() => setRole('homeowner')}
                  className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-sm transition-all ${
                    role === 'homeowner' 
                    ? 'bg-white text-[#088395] shadow-md border border-gray-100' 
                    : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  I am a Homeowner
                </button>
                <button 
                  onClick={() => setRole('engineer')}
                  className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-sm transition-all ${
                    role === 'engineer' 
                    ? 'bg-white text-[#088395] shadow-md border border-gray-100' 
                    : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  I am an Engineer
                </button>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3">
                   <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  {error}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#053B50] uppercase tracking-wider">Full Name</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#088395] transition-colors">
                      <User size={20} />
                    </div>
                    <input 
                      type="text"
                      placeholder="Juan Dela Cruz"
                      className="w-full bg-[#F8FAFC] border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#088395] focus:ring-4 focus:ring-[#088395]/5 transition-all font-medium text-gray-900"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#053B50] uppercase tracking-wider">Email Address</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#088395] transition-colors">
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email"
                      placeholder="juan@example.com"
                      className="w-full bg-[#F8FAFC] border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#088395] focus:ring-4 focus:ring-[#088395]/5 transition-all font-medium text-gray-900"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#053B50] uppercase tracking-wider">Phone Number</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#088395] transition-colors">
                      <Phone size={20} />
                    </div>
                    <input 
                      type="tel"
                      placeholder="+63 900 000 0000"
                      className="w-full bg-[#F8FAFC] border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#088395] focus:ring-4 focus:ring-[#088395]/5 transition-all font-medium text-gray-900"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#053B50] uppercase tracking-wider">Password</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#088395] transition-colors">
                      <Lock size={20} />
                    </div>
                    <input 
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-[#F8FAFC] border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#088395] focus:ring-4 focus:ring-[#088395]/5 transition-all font-medium text-gray-900"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-[#088395] focus:ring-[#088395] transition-all"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <span className="text-sm text-gray-500 font-medium leading-relaxed">
                      I agree to the <Link to="/terms" className="text-[#088395] font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#088395] font-bold hover:underline">Privacy Policy</Link>.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#088395] text-white font-bold py-4 rounded-2xl hover:bg-[#053B50] transition-all shadow-xl shadow-[#088395]/20 flex items-center justify-center gap-3 text-lg group"
                >
                  Sign Up
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-center text-gray-500 font-medium">
                Already have an account? <Link to="/login" className="text-[#088395] font-bold hover:underline">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
};

export default SignupPage;
