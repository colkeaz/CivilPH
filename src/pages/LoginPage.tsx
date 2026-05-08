import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { Mail, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { supabase } from '../utils/supabaseClient';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      if (data.session) {
        setToast({ message: 'Login successful! Redirecting...', type: 'success' });
        setTimeout(() => {
          navigate('/engineers');
        }, 1000);
      }
      
    } catch (err: any) {
      setError(err.message || 'Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'Google login failed. Please try again.');
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-[1200px] w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-gray-100">
          
          {/* LEFT PANEL - NOW MATCHING SIGNUP BLUR STYLE */}
          <div className="lg:w-1/2 relative overflow-hidden flex flex-col justify-end p-12 lg:p-20">
            
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
              alt="Civil Engineering"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#053B50]/80"></div>

            {/* BLUR / GLOW LAYERS (same vibe as SignupPage) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40">
              <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-[#088395] via-transparent to-transparent rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] bg-gradient-to-tl from-[#7ED7C1] via-transparent to-transparent rounded-full blur-[100px]" />
            </div>

            {/* TEXT */}
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                "Building trust through certified structural integrity. Your project, our priority."
              </h2>
              <p className="text-xl text-[#7ED7C1] font-medium leading-relaxed max-w-md">
                Join the premier network of verified Civil Engineers in the Philippines.
              </p>
            </div>

            {/* Branding badge */}
            <div className="absolute top-12 left-12 lg:top-20 lg:left-20 text-white/40 flex items-center gap-2 z-10">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-sm">architecture</span>
              </div>
              <span className="font-bold tracking-widest text-xs uppercase">CivilPH Trusted</span>
            </div>
          </div>

          {/* RIGHT PANEL (UNCHANGED) */}
          <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-md w-full space-y-10">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-[#191c1e] tracking-tight">Welcome Back</h1>
                <p className="text-gray-500 font-medium text-lg">Log in to your CEguradista account to continue.</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#053B50] uppercase tracking-wider">Email Address</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#088395] transition-colors">
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email"
                      placeholder="engineer@civilph.com"
                      className="w-full bg-[#F8FAFC] border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#088395] focus:ring-4 focus:ring-[#088395]/5 transition-all font-medium text-gray-900"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="text-gray-600 font-medium">Remember me</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#088395] text-white font-bold py-4 rounded-2xl hover:bg-[#053B50] transition-all shadow-xl shadow-[#088395]/20"
                >
                  {isLoading ? "Logging in..." : "Log In"}
                </button>
              </form>

              <p className="text-center text-gray-500 font-medium">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#088395] font-bold hover:underline">
                  Sign up
                </Link>
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

export default LoginPage;