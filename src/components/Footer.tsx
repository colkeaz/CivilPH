import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-2">

          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-[#006574]">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <span className="text-2xl font-bold text-[#191c1e] tracking-tight">CivilPH</span>
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-[340px] text-sm">
              Connecting homeowners and contractors with verified structural and civil engineering professionals across the Philippines.
            </p>
            <p className="text-gray-400 text-xs font-medium">© {new Date().getFullYear()} CivilPH. All rights reserved.</p>
          </div>

          {/* Platform */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-[#191c1e] mb-6 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/engineers" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">Find an Engineer</Link></li>
              <li><Link to="/reference" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">Reference Guide (NSCP)</Link></li>
              <li><Link to="/reports" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">My Reports</Link></li>
              <li><Link to="/engineers" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">Join as Engineer</Link></li>
            </ul>
          </div>

          {/* Admin & Trust */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-[#191c1e] mb-6 uppercase tracking-wider">Admin & Trust</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/admin/verify" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">
                  PRC Verification Queue
                </Link>
              </li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">Terms of Service</Link></li>
              <li><Link to="/verification-process" className="text-gray-500 hover:text-[#006574] transition-colors text-sm font-medium">Verification Process</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
       
      </div>
    </footer>
  );
};

export default Footer;
