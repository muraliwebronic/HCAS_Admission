'use client';

import React from 'react';
import { MapPin, Phone, Mail, User, Clock, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const ScholarshipContactSection = () => {
  return (
    <section className="relative w-full bg-gray-50 font-sans py-20 px-4 md:px-8 lg:px-16 overflow-hidden">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      {/* PARENT CONTAINER */}
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 relative z-10 items-stretch">

        {/* --- LEFT PANEL: IMAGES --- */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:h-auto">

          {/* Header for Mobile Only */}
          <div className="lg:hidden mb-2">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <GraduationCap size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Financial Aid</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-sans">Scholarships</h2>
          </div>

          {/* TOP CARD (Banner) */}
          <div className="relative h-[300px] lg:h-auto lg:flex-[3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-blue-900/10">
            <img
              src="/images/sclor.jpg"
              alt="Scholarship Opportunities"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent flex flex-col justify-end p-8">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="hidden lg:flex items-center gap-2 text-blue-200 mb-2">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-xs font-bold uppercase tracking-widest">Merit Based</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white font-sans mb-2">Scholarship Programs</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  We offer various scholarships to meritorious and deserving students.
                </p>
                <button className="flex items-center gap-2 text-white text-sm font-bold group/btn">
                  View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT PANEL: CONTACT CONTENT --- */}
        <div className="w-full lg:w-[60%] bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 lg:p-12 border border-white shadow-xl flex flex-col justify-center">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-red-600 rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 font-sans">Contact Information</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

            {/* COLUMN 1: CAMPUS OFFICE (UPDATED) */}
            <div className="space-y-6">
              <h3 className="text-red-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-4 h-px bg-red-200"></span> Campus Office
              </h3>

              {/* Address Card */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Padur, Kelambakkam (OMR)</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Rajiv Gandhi Salai, <br /> Chennai - 603 103.
                  </p>
                </div>
              </div>

              {/* Key People - Campus Office (UPDATED HERE) */}
              <div className="flex flex-col gap-3">

                {/* Mr. Jai Raja */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                      <User size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Mr. Jai Raja</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Admission Manager</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600">+91 97898 85555</span>
                </div>

                {/* Mrs. Saranya B */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                      <User size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Mrs. Saranya B</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Admission Co-ordinator</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600">+91 78240 80621</span>
                </div>

              </div>

              {/* Email */}
              <a href="mailto:hcaspadur@hcaschennai.edu.in" className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <p className="text-xs font-bold text-gray-700 group-hover:text-blue-600 break-all">hcaspadur@hcaschennai.edu.in</p>
              </a>
            </div>

            {/* COLUMN 2: ADMISSION OFFICE */}
            <div className="space-y-6">
              <h3 className="text-red-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-4 h-px bg-red-200"></span> Admission Office
              </h3>

              {/* Address */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Thiruvanmiyur (City Office)</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    No 9, Canal Road, <br /> Near Kovai Pazhamudir Nilayam, <br /> Chennai - 600 020.
                  </p>
                </div>
              </div>

              {/* Admission Contacts */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <Mail size={14} className="text-gray-400" />
                  <span className="text-xs font-semibold text-gray-700">admissions@hcaschennai.edu.in</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <Phone size={14} className="text-gray-400" />
                  <span className="text-xs font-semibold text-gray-700">+ 044 - 2446 9714 / 9715</span>
                </div>
              </div>

            </div>

          </div>

          {/* HOURS FOOTER */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Clock size={14} /> Office Hours
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Mon - Fri: 09:00 AM - 05:00 PM
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-800 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" /> Sat - Sun: 10:00 AM - 03:00 PM
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default ScholarshipContactSection;