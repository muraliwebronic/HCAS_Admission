'use client';

import React, { useState } from 'react';
import { User, Lock, ArrowUpRight, GraduationCap, Info, X, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  return (
    // 1. MAIN CONTAINER with Background Image
    <div
      className="relative min-h-screen w-full overflow-hidden font-sans bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Home-Slider4.webp')"
      }}
    >
      {/* Dark Overlay for the background image */}
      <div className="absolute inset-0 bg-blue-950/70 lg:bg-blue-950/50 z-0 backdrop-blur-[2px]"></div>

      {/* 2. BLUE PANEL (Left Side) */}
      <div className="relative z-10 w-full lg:w-[38%] h-[30vh] lg:h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white flex flex-col px-6 py-8 lg:px-16 lg:py-16 shadow-[20px_0_60px_rgba(0,0,0,0.6)] lg:rounded-r-[100px] transition-all duration-500 border-r border-white/5">

        {/* Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col lg:justify-center">

          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="h-12 w-12 lg:h-14 lg:w-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg shadow-blue-900/20">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div>
                <p className="text-xl lg:text-3xl font-bold font-sans tracking-wide text-white drop-shadow-md">Dear Applicant,</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                  <p className="text-xs lg:text-sm font-bold text-blue-200 tracking-[0.15em] uppercase">
                    Online Admission Portal
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE ONLY: Info Button */}
            <button
              onClick={() => setIsNotesOpen(true)}
              className="lg:hidden p-2.5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all active:scale-95 border border-white/10"
              aria-label="Show Instructions"
            >
              <Info size={24} className="text-blue-100" />
            </button>
          </div>

          {/* DESKTOP NOTES (Always Visible) */}
          <div className="hidden lg:block mt-16 space-y-8 animate-fade-in-up">
            <div>
              <h3 className="font-bold text-xl text-white border-b-2 border-red-500 pb-2 inline-block mb-4">Instructions</h3>
              <p className="text-sm text-blue-200/80 mb-2">Please read carefully before logging in.</p>
            </div>

            <ul className="space-y-5">
              {[
                "Login with your Application Number & DOB (DDMMYYYY).",
                "OTP will be sent to your registered mobile/email.",
                "Check your Inbox/Spam folder for the OTP.",
                "OTP is valid for 5 minutes only."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-blue-100/90 font-light leading-relaxed group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 group-hover:bg-white transition-colors shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. CENTER FLOATING FORM */}
      <div className="absolute top-[60%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] md:w-full max-w-[420px]">

        <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/40 ring-1 ring-white/50 transition-all duration-300 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]">

          {/* Top Bar Accent */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-900 via-blue-600 to-red-600"></div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <span className="bg-blue-50 text-blue-900 text-[10px] font-extrabold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest">Login</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 font-sans mb-1">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-xs font-medium">Please enter your credentials to access the portal.</p>
          </div>

          {/* Inputs */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Applicant ID</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-700 transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Enter Application No."
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Password</label>
                <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">DDMMYYYY</span>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-700 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="Enter Date of Birth"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <button className="group w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] flex items-center justify-center gap-2 text-sm transition-all duration-300">
                Secure Login
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="text-center">
                <button className="text-xs text-gray-500 hover:text-blue-700 font-semibold transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-blue-700">
                  Forgot your Application Number?
                </button>
              </div>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">New Student?</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <button className="w-full bg-white border-2 border-red-50 hover:bg-red-50 hover:border-red-100 text-red-600 font-bold py-3.5 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2 group">
            <Sparkles size={16} className="group-hover:text-red-500 group-hover:rotate-12 transition-transform" />
            Register New Applicant
          </button>
        </div>
      </div>

      {/* 4. MOBILE NOTES MODAL */}
      {isNotesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative border border-white/20">
            <button
              onClick={() => setIsNotesOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 p-2 bg-gray-100 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl">
                <Info size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Instructions</h3>
                <p className="text-xs text-gray-500">Read carefully before proceeding</p>
              </div>
            </div>

            <ul className="text-sm space-y-4 text-gray-600 leading-relaxed font-medium">
              <li className="flex gap-3"><span className="text-blue-600">•</span> Login with App No. & DOB.</li>
              <li className="flex gap-3"><span className="text-blue-600">•</span> OTP sent to registered contact.</li>
              <li className="flex gap-3"><span className="text-blue-600">•</span> Check Inbox/Spam folder.</li>
              <li className="bg-red-50 text-red-700 p-3 rounded-lg border border-red-100 text-xs font-bold text-center">
                Note: OTP is valid for 5 minutes only.
              </li>
            </ul>

            <button
              onClick={() => setIsNotesOpen(false)}
              className="mt-8 w-full bg-blue-900 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 active:scale-95 transition-transform"
            >
              Okay, Got it
            </button>
          </div>
        </div>
      )}

      {/* 5. FLOATING CREATIVE TEXT */}
      <div className="hidden lg:flex absolute bottom-16 right-16 flex-col items-end text-right z-10 select-none pointer-events-none">

        <div className="relative">
          {/* Main Title with Gradient & Glow */}
          <h2 className="text-8xl font-black font-sans tracking-tight leading-[0.9] text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Be a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-white to-blue-300">
              HCASian
            </span>
          </h2>

          {/* Sparkle Icon Decor */}
          <Sparkles className="absolute -top-10 -right-8 text-yellow-400 opacity-90 animate-pulse" size={56} fill="currentColor" />
        </div>

        {/* Subtitle with sans & Elegance */}
        <div className="mt-6 flex flex-col items-end gap-3">
          <div className="h-1.5 w-32 bg-gradient-to-l from-red-600 to-transparent rounded-full shadow-lg"></div>
          <h2 className="text-4xl font-sans italic text-blue-50/90 tracking-wide font-light drop-shadow-lg">
            Be a <span className="font-semibold text-white not-italic">High Thinker</span> for Life.
          </h2>
        </div>

      </div>



    </div>
  );
}