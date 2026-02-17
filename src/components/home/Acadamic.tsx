'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { GraduationCap, ChevronLeft, ChevronRight, Sparkles, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';
import { CAPS, SectionData, getThemeStyles, programsData } from '@/data/academicData';

// --- STATIC PANEL (Sidebar with Scroll Arrow) ---
const StaticPanel = ({ data }: { data: SectionData }) => {
  const Icon = data.icon || BookOpen;
  const isRed = data.theme === 'red';

  // State and Ref for Scroll Indicator
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  // Check if the container has scrollable content and isn't at the bottom
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      setCanScroll(scrollHeight > clientHeight && Math.ceil(scrollTop + clientHeight) < scrollHeight - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [data]);

  const containerClasses = isRed
    ? 'bg-red-950 shadow-[0_20px_50px_-12px_rgba(185,28,28,0.5)]'
    : 'bg-blue-950 shadow-[0_20px_50px_-12px_rgba(30,58,138,0.5)]';

  const dotColor = isRed ? 'bg-red-400' : 'bg-blue-400';

  return (
    <div className={`
      w-full relative z-20 
      rounded-3xl overflow-hidden 
      flex flex-col 
      transition-all duration-300 hover:shadow-2xl group
      ${containerClasses}
      h-auto
      lg:h-full lg:min-h-[500px] lg:max-h-[600px]
    `}>

      {/* BACKGROUND */}
      {isRed ? (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-700 via-red-600 to-red-800" />
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/pg-text.png"
            alt="Texture"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-950 opacity-90 mix-blend-multiply" />
        </div>
      )}

      <div className="absolute inset-0 bg-white/5 pointer-events-none z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col h-full">
        <div className="p-6 md:p-8 border-b border-white/20">
          <div className="flex items-center gap-2 text-white mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-90">Academics</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight font-sans text-white drop-shadow-sm">
            {data.title}
          </h2>
        </div>

        {/* SCROLLABLE LIST */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex-1 p-6 lg:p-8 lg:overflow-y-auto custom-scrollbar"
        >
          <ul className="grid grid-cols-1 gap-3 lg:gap-4 content-start pb-4">
            {data.staticList.map((program, index) => (
              <li key={index}>
                <a
                target='_blank'
                  href={program.link}
                  className={`
                    flex items-center gap-3 group/item cursor-pointer 
                    bg-white/5 hover:bg-white/15 
                    border border-white/10 hover:border-white/30 
                    p-3 lg:p-4 rounded-xl 
                    transition-all duration-300 backdrop-blur-sm
                  `}
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${dotColor} group-hover/item:bg-white group-hover/item:scale-110 flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all`} />
                  <span className="text-sm lg:text-[15px] font-semibold leading-snug text-white group-hover/item:text-white transition-colors">
                    {program.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SCROLL ARROW */}
        <div className={`
          absolute bottom-4 left-1/2 -translate-x-1/2 z-30 
          pointer-events-none hidden lg:flex flex-col items-center 
          text-white/80 transition-opacity duration-300
          ${canScroll ? 'opacity-100 animate-bounce' : 'opacity-0'}
        `}>
          <ChevronDown className="w-6 h-6 drop-shadow-md" />
        </div>

        <div className={`
          absolute bottom-0 left-0 right-0 h-16 
          bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-20 
          hidden lg:block transition-opacity duration-300
          ${canScroll ? 'opacity-100' : 'opacity-0'}
        `} />

        <GraduationCap className="absolute -bottom-10 -right-6 w-64 h-64 text-black opacity-[0.1] rotate-[-20deg] pointer-events-none" />
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; margin-block: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.25); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.5); }
        }
      `}</style>
    </div>
  );
};


// --- SLIDER PANEL (Restored exactly to your 6-course logic) ---
const SliderPanel = ({ data }: { data: SectionData }) => {
  const styles = getThemeStyles(data.theme);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = 6;
  const totalItems = data.sliderItems.length;
  const showNavigation = totalItems > itemsPerPage;
  const totalSlides = Math.ceil(totalItems / itemsPerPage);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  const visibleItems = data.sliderItems.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);

  const isRed = data.theme === 'red';
  const gradientText = isRed ? 'from-red-600 to-orange-600' : 'from-blue-600 to-indigo-600';
  const accentBg = isRed ? 'group-hover:bg-red-600' : 'group-hover:bg-blue-600';
  const accentText = isRed ? 'group-hover:text-red-600' : 'group-hover:text-blue-600';
  const borderHighlight = isRed ? 'hover:border-red-200' : 'hover:border-blue-200';
  const bgSoft = isRed ? 'bg-red-50' : 'bg-blue-50';

  return (
    <div className="w-full flex flex-col justify-center relative z-10 px-2 lg:px-4 h-full py-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-10 gap-4 px-1">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Featured <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientText}`}>{data.title}</span>
          </h2>
          <p className={`${isRed ? 'text-red-900/60' : 'text-blue-900/60'} font-bold tracking-widest uppercase text-xs mt-2`}>
            {data.subtitle}
          </p>
        </div>
        {showNavigation && (
          <div className="flex gap-3">
            <button onClick={prevSlide} className="group p-2 md:p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-gray-900 hover:shadow-md active:scale-95 transition-all duration-300">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button onClick={nextSlide} className="group p-2 md:p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-gray-900 hover:shadow-md active:scale-95 transition-all duration-300">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>

      <div className="relative w-full">
        <div key={currentSlide} className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 animate-fade-in-up">
          {visibleItems.map((item, index) => (
            <a key={index} target='_blank' href="https://pay.hcaschennai.edu.in:5002/onlineregistration/" className="block h-full">
              <div className={`
                group relative h-full flex flex-col justify-between
                bg-white rounded-2xl 
                border border-gray-100 ${borderHighlight}
                p-4 md:p-5
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 ease-out
                overflow-hidden
              `}>
                <div>
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl mb-3 flex items-center justify-center ${bgSoft} ${accentBg} transition-colors duration-300`}>
                    <img src={item.color === 'green' ? CAPS.green : CAPS.blue} alt="" className="w-8 h-8 md:w-9 md:h-9 object-contain group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800 leading-snug group-hover:text-gray-900 line-clamp-2">
                    {item.name}
                  </h3>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className={`text-[10px] md:text-xs font-bold text-gray-400 ${accentText} transition-colors uppercase tracking-wide`}>Apply Now</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gray-50 ${accentBg} group-hover:text-white transition-all`}>
                    <ArrowRight size={12} className="opacity-50 group-hover:opacity-100 -ml-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
          {Array.from({ length: Math.max(0, itemsPerPage - visibleItems.length) }).map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:block h-full" />
          ))}
        </div>
      </div>

      {showNavigation && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === currentSlide ? `w-8 ${isRed ? 'bg-red-600' : 'bg-blue-600'}` : 'w-2 bg-gray-200 hover:bg-gray-400'}`} />
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
        <section key={section.id} className="relative bg-white flex items-center justify-center p-4 lg:p-10 lg:pt-32 border-b border-gray-100 last:border-0">
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
            <div className={`w-full xl:w-[35%] h-auto ${section.layout === 'static-right' ? 'xl:order-2' : 'xl:order-1'}`}>
              <StaticPanel data={section} />
            </div>
            <div className={`w-full xl:w-[65%] flex flex-col justify-center ${section.layout === 'static-right' ? 'xl:order-1' : 'xl:order-2'}`}>
              <SliderPanel data={section} />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}