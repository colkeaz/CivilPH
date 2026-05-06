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

function App() {
  return (
    <div className="app-container">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/engineers" element={<EngineersPage />} />
          <Route path="/engineer/:id" element={<EngineerProfilePage />} />
          <Route path="/booking/:engineerId" element={<BookingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reference" element={<ReferencePage />} />
          <Route path="/admin/verify" element={<VerificationQueue />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
