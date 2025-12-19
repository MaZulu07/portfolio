
import React from 'react';
import { Bus, Mail, Lock, Eye } from 'lucide-react';

const AreyengLoginMock: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex items-center justify-center p-6 md:p-10">
      <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 w-full max-w-[360px] p-8 flex flex-col items-center border border-slate-100">
        
        {/* Icon Header */}
        <div className="w-16 h-16 bg-[#e0f7f1] rounded-full flex items-center justify-center mb-6">
          <Bus className="w-8 h-8 text-[#009688]" />
        </div>

        {/* Text Header */}
        <h2 className="text-2xl font-extrabold text-[#111827] mb-1 font-sans">Welcome Back</h2>
        <p className="text-slate-500 text-sm text-center mb-8 font-sans font-medium">Sign in to track your Areyeng bus.</p>

        {/* Form Fields */}
        <div className="w-full space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-[#374151] ml-0.5 font-sans">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-slate-400" />
              </div>
              <input 
                type="email" 
                placeholder="e.g. commuter1@gmail.com" 
                className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009688]/10 focus:border-[#009688] transition-all text-sm font-sans"
                readOnly
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-[#374151] ml-0.5 font-sans">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-slate-400" />
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="block w-full pl-11 pr-11 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009688]/10 focus:border-[#009688] transition-all text-sm font-sans"
                readOnly
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <Eye className="h-4 w-4 text-slate-300 cursor-pointer hover:text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="w-full text-right mt-2">
          <button className="text-xs font-bold text-[#009688] hover:text-[#00796b] font-sans">Forgot Password?</button>
        </div>

        {/* Sign In Button */}
        <button className="w-full mt-6 bg-[#009688] hover:bg-[#00796b] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#009688]/20 transition-all active:scale-[0.98] text-sm font-sans">
          Sign In
        </button>

        {/* Footer Link */}
        <div className="mt-8 text-xs font-medium text-slate-500 font-sans">
          Don't have an account? <button className="text-[#009688] font-bold hover:underline">Register</button>
        </div>
      </div>
    </div>
  );
};

export default AreyengLoginMock;
