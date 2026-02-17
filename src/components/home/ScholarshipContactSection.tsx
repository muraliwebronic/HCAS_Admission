'use client';

import React from 'react';
import { MapPin, Phone, Mail, User, Clock, ArrowRight, Sparkles, ExternalLink, Building2 } from 'lucide-react';

const ScholarshipContactSection = () => {
  return (
    <section className="relative w-full bg-slate-50 font-sans py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* --- BACKGROUND AMBIENCE (Retained Original Colors) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-400/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-red-400/10 rounded-full blur-[80px] mix-blend-multiply" />
      </div>

      {/* --- MAIN LAYOUT GRID --- */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* =========================================
            LEFT COLUMN: BANNER & TIMINGS (Col Span 5)
        ========================================= */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
          
          {/* Vertical Scholarship Banner */}
          <div className="relative rounded-[2rem] overflow-hidden group shadow-xl shadow-blue-900/5 border border-white/60 flex flex-col min-h-[380px] h-full">
            <img
              src="/images/sclor.jpg"
              alt="Scholarship Opportunities"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Darker gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/70 to-transparent"></div>

            <div className="relative z-10 flex flex-col h-full justify-end p-8 sm:p-10">
              <div className="inline-flex w-max items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 px-4 py-2 rounded-full mb-6 transform transition-transform group-hover:-translate-y-1">
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Merit Based</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                Scholarship Programs
              </h2>
              <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-8">
                We offer various scholarships to meritorious and deserving students to support their academic journey.
              </p>
              
              <a 
                href="https://hcaschennai.edu.in/scholarships/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-blue-500/40 active:scale-95 group/btn"
              >
                View Details 
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Vertical Office Hours Block */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 border border-white shadow-xl shadow-slate-200/50 flex flex-col gap-6 shrink-0">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
              <div className="p-3 bg-slate-50 rounded-2xl text-slate-600 border border-slate-100 shadow-sm">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Office Hours</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Applies to both offices</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold border border-slate-200/60 hover:border-blue-200 transition-colors">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                Mon - Fri: 09:00 AM - 05:00 PM
              </div>
              <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold border border-slate-200/60 hover:border-red-200 transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]" /> 
                Sat - Sun: 10:00 AM - 03:00 PM
              </div>
            </div>
          </div>

        </div>


        {/* =========================================
            RIGHT COLUMN: CONTACT CARDS (Col Span 7)
        ========================================= */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
          
          {/* --- CAMPUS OFFICE CARD (Redesigned Stacked Layout) --- */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-shadow duration-500 flex flex-col h-full">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-2 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-sm"></div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-red-600 mb-1">Main Headquarters</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Campus Office</h3>
              </div>
            </div>

            {/* Address Block */}
            <a href="https://maps.google.com/?q=Hindustan+College+of+Arts+and+Science+Padur" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 mb-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
              <div className="p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0 w-max">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 flex items-center gap-2 mb-1">
                  Padur, Kelambakkam <ExternalLink size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rajiv Gandhi Salai (OMR), Chennai - 603 103.
                </p>
              </div>
            </a>

            {/* Staff Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Staff 1 */}
              <div className="group flex flex-col p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 leading-tight mb-1">Mr. Jai Raja</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Admission Manager</p>
                  </div>
                </div>
                <a href="tel:+919789885555" className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-sm rounded-xl transition-colors border border-slate-100 hover:border-blue-600">
                  <Phone size={16} /> +91 97898 85555
                </a>
              </div>

              {/* Staff 2 */}
              <div className="group flex flex-col p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 leading-tight mb-1">Mrs. Saranya B</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Admission Coordinator</p>
                  </div>
                </div>
                <a href="tel:+917824080621" className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-sm rounded-xl transition-colors border border-slate-100 hover:border-blue-600">
                  <Phone size={16} /> +91 78240 80621
                </a>
              </div>
            </div>

            {/* Email Block */}
            <a href="mailto:hcaspadur@hcaschennai.edu.in" className="group mt-auto flex items-center gap-5 w-full p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
              <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                <Mail size={22} />
              </div>
              <div className="min-w-0"> {/* min-w-0 prevents flex items from overflowing text */}
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1">Campus Email</p>
                <p className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                  hcaspadur@hcaschennai.edu.in
                </p>
              </div>
            </a>

          </div>


          {/* --- CITY OFFICE CARD (Redesigned Stacked Layout) --- */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-shadow duration-500 flex flex-col h-full">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-2 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full shadow-sm"></div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-1">City Center</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Admission Office</h3>
              </div>
            </div>

            {/* Address Block */}
            <a href="https://maps.google.com/?q=Hindustan+College+Thiruvanmiyur" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 mb-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
              <div className="p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0 w-max">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 flex items-center gap-2 mb-1">
                  City Office <ExternalLink size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No 9, Canal Road, Near Kovai Pazhamudir Nilayam,<br className="hidden sm:block"/> Thiruvanmiyur, Chennai - 600 020.
                </p>
              </div>
            </a>

            {/* Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <a href="tel:04424469714" className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100/50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">Landline 1</p>
                <span className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">044 2446 9714</span>
              </a>
              
              <a href="tel:04424469715" className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100/50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">Landline 2</p>
                <span className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">044 2446 9715</span>
              </a>
            </div>

            {/* Email Block */}
            <a href="mailto:admissions@hcaschennai.edu.in" className="group mt-auto flex items-center gap-5 w-full p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
              <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                <Mail size={22} />
              </div>
              <div className="min-w-0"> {/* min-w-0 prevents flex items from overflowing text */}
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1">Admissions Email</p>
                <p className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                  admissions@hcaschennai.edu.in
                </p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ScholarshipContactSection;