'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, ChevronLeft, ChevronRight, Sparkles, Scroll, BookOpen, ArrowRight } from 'lucide-react';
import { CAPS, SectionData, getThemeStyles, programsData } from '@/data/academicData';



const StaticPanel = ({ data }: { data: SectionData }) => {
  const Icon = data.icon || BookOpen;

  // 1. Clean, Professional Deep Gradients (No textures./images)
  const isRed = data.theme === 'red';
  const bgGradient = isRed
    ? 'bg-gradient-to-br from-red-900 to-red-950'
    : 'bg-gradient-to-br from-slate-900 to-blue-950';

  return (
    <div className={`
      w-full h-full min-h-[400px]
      relative z-20 
      rounded-3xl overflow-hidden 
      flex flex-col 
      shadow-2xl 
      ${bgGradient}
    `}>

      {/* 2. Subtle Gloss Effect (Top Right) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 flex flex-col h-full p-6 md:p-8">

        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3 text-white/60">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
              <Icon size={18} className="text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              Quick Links
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
            {data.title}
          </h2>
        </div>

        {/* List Section: Single Column for Professional Readability */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 -mr-2">
          <ul className="flex flex-col gap-1">
            {data.staticList.map((program, index) => (
              <li key={index}>
                <Link
                  href={program.link}
                  className="
                    group flex items-center justify-between
                    w-full p-3 rounded-xl
                    transition-all duration-200
                    hover:bg-white/10 hover:backdrop-blur-md
                    border border-transparent hover:border-white/5
                  "
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {program.label}
                  </span>

                  {/* Subtle Arrow that appears on hover */}
                  <ArrowRight
                    size={16}
                    className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Footer/CTA area if needed, otherwise clean padding at bottom */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            Select a program to learn more
          </p>
        </div>

      </div>
    </div>
  );
};

// --- SLIDER PANEL (Fixed Width Logic Removed) ---

const SliderPanel = ({ data }: { data: SectionData }) => {
  const styles = getThemeStyles(data.theme);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = 6;
  const totalItems = data.sliderItems.length;
  // Logic: Only show navigation if we have more items than fits on one page
  const showNavigation = totalItems > itemsPerPage;

  const totalSlides = Math.ceil(totalItems / itemsPerPage);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  const visibleItems = data.sliderItems.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);

  // Helper for dynamic colors based on theme
  const themeColor = data.theme === 'red' ? 'red' : 'blue';
  const gradientText = data.theme === 'red' ? 'from-red-600 to-orange-600' : 'from-blue-600 to-indigo-600';
  const accentBg = data.theme === 'red' ? 'group-hover:bg-red-600' : 'group-hover:bg-blue-600';
  const accentText = data.theme === 'red' ? 'group-hover:text-red-600' : 'group-hover:text-blue-600';
  const borderHighlight = data.theme === 'red' ? 'hover:border-red-200' : 'hover:border-blue-200';

  return (
    <div className="w-full flex flex-col justify-center relative z-10 px-2 lg:px-4 h-full py-8">

      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-10 gap-4">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Featured <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientText}`}>{data.title}</span>
          </h2>
          <p className={`${data.theme === 'red' ? 'text-red-900/60' : 'text-blue-900/60'} font-bold tracking-widest uppercase text-xs mt-2`}>
            {data.subtitle}
          </p>
        </div>

        {/* Navigation Arrows: Only rendered if needed */}
        {showNavigation && (
          <div className="flex gap-3">
            <button onClick={prevSlide} className={`group p-2 md:p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-gray-900 hover:shadow-md active:scale-95 transition-all duration-300`}>
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button onClick={nextSlide} className={`group p-2 md:p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-gray-900 hover:shadow-md active:scale-95 transition-all duration-300`}>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* --- GRID SECTION --- */}
      <div className="relative w-full">
        {/* Mobile: grid-cols-2 with tighter gap (gap-3) to fit 2 cards */}
        <div key={currentSlide} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 animate-fade-in-up">

          {visibleItems.map((item, index) => (
            <Link key={index} href={item.link} className="block h-full">
              <div className={`
                group relative h-full flex flex-col justify-between
                bg-white rounded-2xl 
                border border-gray-100 ${borderHighlight}
                p-4 md:p-6
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 ease-out
                overflow-hidden
              `}>

                {/* Decorative Background Blob (Subtle) */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradientText}`} />

                {/* Top Section: Icon & Title */}
                <div>
                  {/* Icon Container */}
                  <div className={`
                    w-10 h-10 md:w-12 md:h-12 rounded-xl mb-4 
                    flex items-center justify-center 
                    bg-gray-50 ${accentBg}
                    transition-colors duration-300
                  `}>
                    <img
                      src={item.color === 'green' ? CAPS.green : CAPS.blue}
                      alt=""
                      className="w-6 h-6 md:w-7 md:h-7 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs md:text-sm lg:text-base font-bold text-gray-800 leading-snug group-hover:text-gray-900 mb-1 line-clamp-2">
                    {item.name}
                  </h3>

                </div>

                {/* Bottom Section: Action Link */}
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className={`text-[10px] md:text-xs font-bold text-gray-400 ${accentText} transition-colors flex items-center gap-1`}>
                    APPLY NOW
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gray-50 ${accentBg} group-hover:text-white transition-all`}>
                    <ArrowRight size={12} className="opacity-50 group-hover:opacity-100 -ml-0.5" />
                  </div>
                </div>

              </div>
            </Link>
          ))}

          {/* Empty slots filler to maintain grid structure if needed */}
          {Array.from({ length: Math.max(0, itemsPerPage - visibleItems.length) }).map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:block h-full" />
          ))}
        </div>
      </div>

      {/* --- PAGINATION DOTS --- */}
      {/* Logic: Only show dots if showNavigation is true */}
      {showNavigation && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === currentSlide
                  ? `w-8 ${data.theme === 'red' ? 'bg-red-600' : 'bg-blue-600'}`
                  : 'w-2 bg-gray-200 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function AcademicsPage() {
  return (
    <main className="w-full bg-white overflow-hidden">

      {programsData.map((section) => (
        <section key={section.id} className="relative  bg-white flex items-center justify-center p-4 lg:p-10 lg:pt-32 border-b border-gray-100 last:border-0">

          {/* Ambient Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            {section.theme === 'red' ? (
              <>
                <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-red-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-orange-100/40 rounded-full blur-[100px] mix-blend-multiply" />
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[100px] mix-blend-multiply" />
              </>
            )}
          </div>
          <div className="w-full max-w-[1600px] flex flex-col xl:flex-row gap-8 items-stretch relative z-10">

            {/* STATIC PANEL WRAPPER */}
            <div className={`w-full xl:w-[35%] ${section.layout === 'static-right' ? 'xl:order-2' : 'xl:order-1'}`}>
              <StaticPanel data={section} />
            </div>

            {/* SLIDER PANEL WRAPPER */}
            <div className={`w-full xl:w-[65%] flex flex-col justify-center ${section.layout === 'static-right' ? 'xl:order-1' : 'xl:order-2'}`}>
              <SliderPanel data={section} />
            </div>

          </div>
        </section>
      ))}



    </main>
  );
}