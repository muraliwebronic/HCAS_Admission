"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Play,
  Award,
  ShieldCheck,
  Star,
  GraduationCap,
  Trophy,
  Users,
  Briefcase,
  Leaf,
  ArrowUpRight,
  CalendarRange, // Imported new icon for Years
} from "lucide-react";
import { FEATURES, LOGOS } from "@/data/featursData";

// --- COMPONENT 1: ACCREDITATIONS (Cleaned Up) ---
export const AccreditationSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-gray-100">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-50/50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100 mb-2 shadow-sm">
            <Award size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Recognitions
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Accreditations
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Recognized for excellence in education and infrastructure by leading
            national and international bodies.
          </p>
        </div>

        {/* Logo Grid - Responsive & Centered */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {LOGOS.map((logo, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-[45%] md:w-52 h-24 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-red-50/0 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain filter  transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const sibling = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (sibling) sibling.style.display = "flex";
                  }}
                />
                {/* Fallback Icon if Image Fails */}
                <div className="hidden flex-col items-center gap-2 text-gray-300 group-hover:text-red-500 transition-colors">
                  <ShieldCheck size={28} />
                  <span className="text-[10px] font-bold uppercase text-center line-clamp-1">
                    {logo.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT 2: WHY HCAS (Redesigned Layout) ---
export const WhyHCASSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden text-gray-900">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/60 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- LEFT: VIDEO PLAYER + REDESIGNED STATS --- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Video Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white bg-white group">
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center bg-gray-100 group-hover:bg-white transition-colors duration-500"
                  onClick={() => setIsPlaying(true)}
                >
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    style={{
                      backgroundImage: "url('/images/Home-Slider4.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors" />
                  <div className="relative z-20">
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                    <div className="relative w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play
                        className="ml-1 text-blue-600 fill-blue-600"
                        size={32}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6t4i0zal984?si=w1dISYTtEQUNqmSr&autoplay=1"
                  title="HCAS Campus Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* --- NEW STATS DESIGN --- */}
            <div className="bg-white rounded-2xl p-2 shadow-xl shadow-blue-900/5 border border-blue-50">
              <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                {/* Section 1: Years */}
                <div className="flex-1 flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors rounded-xl">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 shrink-0">
                    <CalendarRange size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-gray-900 leading-none tracking-tight">
                      30+
                    </h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                      Years of Excellence
                    </p>
                  </div>
                </div>

                {/* Section 2: NAAC */}
                <div className="flex-1 flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors rounded-xl">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center shrink-0 shadow-sm p-2 overflow-hidden">
                    <img
                      src="/images/naac.png"
                      alt="NAAC A Grade"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-gray-900 leading-none tracking-tight">
                      Grade A
                    </h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                      Accredited by NAAC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: FEATURES LIST (Unchanged) --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* ... Header ... */}
            <div className="hidden lg:block mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100 mb-4">
                <Star size={14} fill="currentColor" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Trusted Expertise
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Excellence in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                  Education & Beyond
                </span>
              </h2>
            </div>

            {/* ... Features List ... */}
            <div className="flex flex-col gap-5">
              {FEATURES.map((feature, index) => (
                <a
                  key={index}
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <feature.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {feature.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-gray-300 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1 group-hover:text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
