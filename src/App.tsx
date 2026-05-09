import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EngineersPage from './pages/EngineersPage';
import EngineerProfilePage from './pages/EngineerProfilePage';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/CheckoutPage';
import ReportsPage from './pages/ReportsPage';
import VerificationQueue from './pages/admin/VerificationQueue';
import ReferencePage from './pages/ReferencePage';
import AuthCallback from './pages/AuthCallback';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import VerificationProcessPage from './pages/VerificationProcessPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/verification-process" element={<VerificationProcessPage />} />
        
        {/* Protected Routes */}
        <Route path="/engineers" element={<ProtectedRoute><EngineersPage /></ProtectedRoute>} />
        <Route path="/engineer/:id" element={<ProtectedRoute><EngineerProfilePage /></ProtectedRoute>} />
        <Route path="/booking/:engineerId" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
        <Route path="/reference" element={<ProtectedRoute><ReferencePage /></ProtectedRoute>} />
        <Route path="/admin/verify" element={<ProtectedRoute requireAdmin><VerificationQueue /></ProtectedRoute>} />
      </Routes>
    </div>

  );
}

export default App;
