import React, { createContext, useState, useContext, ReactNode } from 'react';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('civilph_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('civilph_token') || null;
  });

  const login = (userData: User, jwtToken: string) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem('civilph_user', JSON.stringify(userData));
    localStorage.setItem('civilph_token', jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('civilph_user');
    localStorage.removeItem('civilph_token');
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
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
