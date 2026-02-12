'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, Building2, Trophy, ArrowRight, Calendar, Sparkles } from 'lucide-react';

// --- REAL DATA MAPPED FROM YOUR FILES ---
const PLACEMENTS = [
  {
    name: "Nida Amreen",
    course: "B.Sc Psychology",
    batch: "2024-2025",
    company: "Rinex",
    image: "./hcas-images/students/NIDA-AMREEN-rinex.jpg",
    color: "blue"
  },
  {
    name: "Aditya Kumar",
    course: "B.COM BM",
    batch: "2024-2025",
    company: "Sutherland",
    image: "./hcas-images/students/ADITYA-KUMAR-sutherland.jpg",
    color: "red"
  },
  {
    name: "Anitha V",
    course: "B.SC CS",
    batch: "2024-2025",
    company: "TVS",
    image: "./hcas-images/students/ANITHA.V-tvs.jpg",
    color: "green"
  },
  {
    name: "Siddarth P",
    course: "B.Com (G)",
    batch: "2024-2025",
    company: "Elewayte",
    image: "./hcas-images/students/SIDDARTH-P-elewayte.jpg",
    color: "purple"
  },
  {
    name: "Nithish A P",
    course: "B.Com (CS)",
    batch: "2024-2025",
    company: "ICICI",
    image: "./hcas-images/students/NITHISH-AP-icici.jpg",
    color: "orange"
  }
];

export const PlacementSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalItems = PLACEMENTS.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(PLACEMENTS[(currentSlide + i) % totalItems]);
    }
    return items;
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden font-sans">

      {/* --- BACKGROUND AMBIENCE (Matching Undergraduate Section) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-red-200/40 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1600px] relative z-10">

        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-sans">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Placements</span>
            </h2>
            <p className="text-blue-900/60 font-bold tracking-widest uppercase text-xs mt-2 flex items-center gap-2">
              <Trophy size={14} className="text-yellow-500" />
              Celebrating Career Success - Batch {PLACEMENTS[0].batch}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 text-gray-400 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 border border-white"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 text-gray-400 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 border border-white"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {getVisibleItems().map((student, index) => (
            <div
              key={`${student.name}-${index}`}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* 1. Image Container (Shorter Height) */}
              <div className="w-full h-[280px] overflow-hidden relative">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop";
                  }}
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Placed Badge (Top Right) */}
                <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
                  <Sparkles size={10} fill="currentColor" /> PLACED
                </div>
              </div>

              {/* 2. Content Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold font-sans mb-0.5 text-white drop-shadow-md">
                  {student.name}
                </h3>
                <p className="text-[10px] text-gray-200 uppercase tracking-wider font-medium mb-3">
                  {student.course}
                </p>

                {/* Company Pill */}
                <div className="inline-flex items-center gap-1.5 bg-white text-blue-900 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg mb-2">
                  <Briefcase size={10} />
                  {student.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <a href='https://hcaschennai.edu.in/placement/' className="mt-12 block text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 group">
            View All Placements
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </a>

      </div>

    </section>
  );
};