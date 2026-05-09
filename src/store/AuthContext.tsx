import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { supabase } from '../utils/supabaseClient';
import type { Session, User as SupabaseUser } from '@supabase/supabase-js';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthContext: Initializing Supabase Auth...');
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('AuthContext: Session fetched', session);
      setSession(session);
      if (session?.user) {
        mapSupabaseUserToUser(session.user);
      }
      setLoading(false);
    }).catch(err => {
      console.error('AuthContext: Session fetch error', err);
      setLoading(false);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('AuthContext: Auth state changed', _event, session);
      setSession(session);
      if (session?.user) {
        mapSupabaseUserToUser(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const mapSupabaseUserToUser = (supabaseUser: SupabaseUser) => {
    const meta = supabaseUser.user_metadata || {};
    // Google OAuth provides full_name, email signup provides firstName/lastName
    let firstName = meta.firstName || '';
    let lastName = meta.lastName || '';
    
    if (!firstName && meta.full_name) {
      const parts = meta.full_name.split(' ');
      firstName = parts[0] || '';
      lastName = parts.slice(1).join(' ') || '';
    }
    
    if (!firstName && meta.name) {
      const parts = meta.name.split(' ');
      firstName = parts[0] || '';
      lastName = parts.slice(1).join(' ') || '';
    }

    setUser({
      id: supabaseUser.id,
      firstName,
      lastName,
      email: supabaseUser.email || '',
      role: meta.role || 'homeowner',
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      logout,
      isAuthenticated: !!user
    }}>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafd]">
          <div className="w-12 h-12 border-4 border-[#088395] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
