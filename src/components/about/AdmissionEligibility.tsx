"use client";

import React from "react";
import {
  GraduationCap,
  BookOpen,
  ScrollText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const AdmissionEligibility = () => {
  const programData = [
    {
      title: "Undergraduate",
      subtitle: "10+2 / Equivalent",
      theme: "blue",
      icon: GraduationCap,
      description: "Qualifying examinations required:",
      link: "https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/",
      points: [
        "10+2 Tamilnadu Higher Secondary / CBSE / Equivalent.",
        "Private Candidates (Open Schooling System).",
        "Higher Secondary from other State Boards.",
        "Indian School Certificate Examination (ISCE).",
      ],
    },
    {
      title: "Postgraduate",
      subtitle: "Bachelor's Degree",
      theme: "red",
      icon: BookOpen,
      description: "Must hold a Bachelor's Degree:",
      link: "https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/",
      points: [
        "All Under Graduate degree examinations conducted by recognized Universities.",
        "Provisional certificate required for admission.", // Added to balance content
      ],
    },
    {
      title: "Research",
      subtitle: "Ph.D. & M.Phil",
      theme: "emerald",
      icon: ScrollText,
      description: "Advanced research aspirants:",
      link: "https://hcaschennai.edu.in/academics/programmes/research/",
      points: [
        "Successfully completed a PG degree in the relevant subject.",
        "Minimum 55% marks in Master's Degree.", // Added to balance content
      ],
    },
  ];

  const certificateRules = [
    "Candidates passed from other boards must obtain an Eligibility Certificate from the University of Madras.",
    "Applies to Private Candidates under Open Schooling System.",
    "Applies to Higher Secondary/Equivalent exams by State Boards other than Tamil Nadu.",
    "Applies to all degree (UG/PG) examinations conducted by Universities other than Madras University.",
    "Candidates from Boards/Universities not in the CBSE/UGC/World list will not be approved.",
    "10 + 1 passed candidates are NOT Eligible for 3-Year UG Degree Courses.",
    "10+1+3 or 10+2+2 or 11+1+2 passed candidates are NOT Eligible for PG Degree Courses.",
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 font-sans overflow-hidden bg-gray-50 flex flex-col items-center justify-center">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 border border-blue-200 mb-2">
            <ShieldCheck size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Official Guidelines
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Eligibility</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-medium">
            Review the academic criteria required to join our programs.
          </p>
        </div>

        {/* --- BALANCED CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {programData.map((item, index) => {

            // Theme Styles
            const isRed = item.theme === "red";
            const isEmerald = item.theme === "emerald";

            const accentColor = isRed ? "text-red-600" : isEmerald ? "text-emerald-600" : "text-blue-600";
            const bgHover = isRed ? "hover:border-red-200 hover:shadow-red-500/10" : isEmerald ? "hover:border-emerald-200 hover:shadow-emerald-500/10" : "hover:border-blue-200 hover:shadow-blue-500/10";
            const iconBg = isRed ? "bg-red-50 text-red-600" : isEmerald ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600";
            const gradientBg = isRed ? "from-red-50" : isEmerald ? "from-emerald-50" : "from-blue-50";

            return (
              <div
                key={index}
                className={`group relative flex flex-col justify-between h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 ${bgHover} overflow-hidden`}
              >
                {/* 1. Large Watermark (Fills Empty Space) */}
                <div className={`absolute -bottom-6 -right-6 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.06] pointer-events-none text-gray-900`}>
                  <item.icon size={180} />
                </div>

                {/* 2. Top Gradient Fade */}
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${gradientBg} to-transparent opacity-30 group-hover:opacity-60 transition-opacity`} />

                {/* --- CONTENT START --- */}
                <div className="relative z-10">

                  {/* Icon & Title */}
                  <div className="flex flex-col gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <item.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-none mb-1">
                        {item.title}
                      </h3>
                      <p className={`text-xs font-bold uppercase tracking-wider opacity-70 ${accentColor}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gray-100 mb-6"></div>

                  {/* List */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                      Requirements
                    </p>
                    <ul className="space-y-4">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium leading-relaxed">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 ${accentColor} opacity-80`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* --- FOOTER ACTION (Anchors the layout) --- */}
                <div className="relative z-10 mt-8 pt-6 border-t border-gray-50">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 ${isRed ? 'bg-red-50 text-red-700 hover:bg-red-100' : isEmerald ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                  >
                    View Courses
                    <ArrowRight size={16} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* --- IMPORTANT NOTICE SECTION --- */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 shadow-2xl group">

          {/* Backgrounds */}

          <div className="relative z-10 flex flex-col md:flex-row">

            {/* Left Panel: Header */}
            <div className="md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
              {/* Shine Effect */}

              <div>
                <div className="flex items-center gap-2 text-blue-300 mb-3">
                  <AlertCircle size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Mandatory</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
                  University of Madras <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Eligibility Certificate</span>
                </h3>
                <p className="text-blue-200/60 text-sm leading-relaxed font-medium">
                  Required verification for students from non-standard boards or specific patterns.
                </p>
              </div>

              <div className="mt-8">
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Right Panel: Rules List */}
            <div className="md:w-2/3 p-8 md:p-12 bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {certificateRules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3 group/rule">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/rule:bg-white shrink-0 transition-colors shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                    <p className="text-sm text-blue-100/80 leading-relaxed group-hover/rule:text-white transition-colors font-medium">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AdmissionEligibility;