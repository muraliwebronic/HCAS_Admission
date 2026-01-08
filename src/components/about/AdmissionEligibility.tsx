"use client";

import React from "react";
import {
  GraduationCap,
  BookOpen,
  ScrollText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const AdmissionEligibility = () => {
  const programData = [
    {
      title: "Undergraduate",
      subtitle: "10+2 / Equivalent",
      theme: "blue",
      icon: GraduationCap,
      description: "Qualifying examinations required:",
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
      points: [
        "All Under Graduate degree examinations conducted by recognized Universities.",
      ],
    },
    {
      title: "Research",
      subtitle: "Ph.D. & M.Phil",
      theme: "emerald",
      icon: ScrollText,
      description: "Advanced research aspirants:",
      points: ["Successfully completed a PG degree in the relevant subject."],
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
    <section className="relative shadow-inner py-20 px-4 md:px-8 font-sans overflow-hidden bg-gray-50 flex flex-col items-center justify-center">
      {/* --- BACKGROUND AMBIENCE (Matching Previous Components) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-blue-600/80 mb-2">
            <Sparkles size={14} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
              Guidelines
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
            Admission{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Eligibility
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm tracking-wide">
            Ensure you meet the academic criteria for admission to Hindustan College of Arts & Science
          </p>
        </div>

        {/* --- CARDS GRID (Glassmorphism Style) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 items-stretch">
          {programData.map((item, index) => {
            // Dynamic Color Logic
            const colorStyles =
              item.theme === "red"
                ? "from-red-50 to-white border-red-100 group-hover:border-red-200"
                : item.theme === "emerald"
                ? "from-emerald-50 to-white border-emerald-100 group-hover:border-emerald-200"
                : "from-blue-50 to-white border-blue-100 group-hover:border-blue-200";

            const iconBg =
              item.theme === "red"
                ? "bg-red-100 text-red-600"
                : item.theme === "emerald"
                ? "bg-emerald-100 text-emerald-600"
                : "bg-blue-100 text-blue-600";

            const checkColor =
              item.theme === "red"
                ? "text-red-500"
                : item.theme === "emerald"
                ? "text-emerald-500"
                : "text-blue-500";

            return (
              <div
                key={index}
                className={`group relative flex flex-col p-8 rounded-3xl transition-all duration-500
                            bg-white/60 backdrop-blur-xl border ${colorStyles}
                            shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-none">
                      {item.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-500 mb-6 italic border-l-2 border-gray-200 pl-3">
                  {item.description}
                </p>

                <ul className="space-y-3 mt-auto">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed group/list"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${checkColor} opacity-70 group-hover/list:opacity-100 transition-opacity`}
                      />
                      <span className="group-hover/list:text-gray-900 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Gradient on Hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${
                    item.theme === "red"
                      ? "from-red-50/0 via-transparent to-red-50/30"
                      : item.theme === "emerald"
                      ? "from-emerald-50/0 via-transparent to-emerald-50/30"
                      : "from-blue-50/0 via-transparent to-blue-50/30"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>

        {/* --- OFFICIAL REQUIREMENTS (Static Panel Theme) --- */}
        {/* Using the Dark Blue Gradient Style from 'Post Graduate' static panel for consistency */}
        <div className="relative w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(30,58,138,0.4)] group bg-blue-950 transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(30,58,138,0.5)]">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950"></div>
          <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

          <div className="relative z-10 flex flex-col md:flex-row p-8 md:p-12 gap-10">
            {/* Left: Title Area */}
            <div className="md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <div>
                <div className="flex items-center gap-2 text-blue-200 mb-2">
                  <AlertCircle size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Important Notice
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight mb-4">
                  University of Madras <br />{" "}
                  <span className="text-blue-300">Eligibility Certificate</span>
                </h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Mandatory verification requirement for students from
                  non-standard boards or specific educational patterns.
                </p>
              </div>
              <div className="mt-8 hidden md:block">
                <button className="px-6 py-3 rounded-full bg-white text-blue-900 text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-lg">
                  Read Guidelines
                </button>
              </div>
            </div>

            {/* Right: List Area */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {certificateRules.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/rule"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/rule:bg-white flex-shrink-0 transition-colors shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                    <p className="text-sm text-blue-100/80 leading-relaxed group-hover/rule:text-white transition-colors">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:hidden">
                <button className="w-full px-6 py-3 rounded-xl bg-white text-blue-900 text-sm font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  Read Guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionEligibility;
