import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6 lg:col-span-7 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-[#006574]">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <span className="text-2xl font-bold text-[#191c1e] tracking-tight">CivilPH</span>
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-[400px] text-base">
              Connecting you with verified structural and civil engineering professionals across the Philippines.
            </p>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-bold text-[#191c1e] mb-6 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/engineers" className="text-gray-500 hover:text-[#006574] transition-colors font-medium">Find a Civil Engineer</Link></li>
              <li><Link to="/reference" className="text-gray-500 hover:text-[#006574] transition-colors font-medium">Engineering Reference</Link></li>
              <li><Link to="/signup" className="text-gray-500 hover:text-[#006574] transition-colors font-medium">Join as Civil Engineer</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-sm font-bold text-[#191c1e] mb-6 uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-500 hover:text-[#006574] transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-[#006574] transition-colors font-medium">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-[#006574] transition-colors font-medium">Verification Process</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} CivilPH. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-[#006574] transition-colors">
              <Share2 size={20} />
            </button>
            <button className="text-gray-400 hover:text-[#006574] transition-colors">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
