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
        {/* Mobile Header (Shown only on small screens) */}
        <div className="lg:hidden text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <Star size={14} fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Why Choose HCAS?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- LEFT: VIDEO PLAYER (Sticky on Desktop) --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white bg-white group">
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center bg-gray-100 group-hover:bg-white transition-colors duration-500"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Background Image / Placeholder */}
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    style={{
                      backgroundImage: "url('/images/Home-Slider4.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors" />

                  {/* Play Button */}
                  <div className="relative z-20">
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                    <div className="relative w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play
                        className="ml-1 text-blue-600 fill-blue-600"
                        size={32}
                      />
                    </div>
                  </div>

                  {/* Text Label */}
                  <div className="absolute bottom-8 left-0 right-0 text-center z-20 px-6">
                    <span className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                      Watch Campus Tour
                    </span>
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

            {/* Decorative blob behind video */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-blue-500/5 rounded-[2.5rem] -rotate-3 hidden lg:block" />
          </div>

          {/* --- RIGHT: FEATURES LIST --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Desktop Header */}
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

            {/* Features Vertical List (Fills space better than grid) */}
            <div className="flex flex-col gap-5">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                >
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <feature.icon size={22} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {feature.title}
                      </h3>
                      {/* Tiny Arrow for interaction hint */}
                      <ArrowUpRight
                        size={18}
                        className="text-gray-300 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1 group-hover:text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-10 flex items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 tracking-tight">
                  28+
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">
                  Years of Excellence
                </span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 tracking-tight">
                  A
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">
                  NAAC Grade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
