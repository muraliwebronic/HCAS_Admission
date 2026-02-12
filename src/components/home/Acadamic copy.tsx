'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, ChevronLeft, ChevronRight, Sparkles, Scroll, BookOpen, ArrowRight } from 'lucide-react';
import { CAPS, SectionData, getThemeStyles, programsData } from '@/data/academicData';


// --- STATIC PANEL (Fixed Width Logic Removed) ---
const StaticPanel = ({ data }: { data: SectionData }) => {
  const styles = getThemeStyles(data.theme);
  const Icon = data.icon;

  return (
    // Note: I removed xl:w-[35%] from here. It is now handled by the parent wrapper.
    <div className={`w-full min-h-[500px] h-full relative z-20 flex flex-col p-8 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl group ${styles.solid} ${styles.shadow}`}>

      {/* Optional Bg Image */}
      {data.bgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={data.bgImage}
            alt="Texture"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-overlay"
          />
          <div className={`absolute inset-0 z-10 ${styles.gradient} opacity-90 mix-blend-multiply`}></div>
        </div>
      )}

      {/* Default Gradient */}
      {!data.bgImage && (
        <div className={`absolute inset-0 z-0 ${styles.gradient}`}></div>
      )}

      {/* Glass Texture */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b border-white/20">
          <div className="flex items-center gap-2 text-white/80 mb-1">
            <Icon size={14} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Academics</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight font-sans text-white">{data.title}</h2>
        </div>

        <div className={`grid ${data.staticList.length > 8 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-x-6 gap-y-3 content-start overflow-y-auto custom-scrollbar pr-2`}>
          {data.staticList.map((program, index) => (
            <Link
              key={index}
              href={program.link}
              className="flex items-start gap-2 group/item cursor-pointer hover:bg-white/10 p-1.5 rounded-lg transition-colors"
            >
              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${styles.subtle} group-hover/item:bg-white flex-shrink-0 shadow-[0_0_5px_rgba(255,255,255,0.8)]`} />
              <span className="text-[10px] lg:text-[11px] font-medium leading-tight text-white/80 group-hover/item:text-white transition-colors">
                {program.label}
              </span>
            </Link>
          ))}
        </div>

        <GraduationCap className="absolute -bottom-10 -right-6 w-64 h-64 text-black opacity-[0.1] rotate-[-20deg] pointer-events-none" />
      </div>
    </div>
  );
};

// --- SLIDER PANEL (Fixed Width Logic Removed) ---
const SliderPanel = ({ data }: { data: SectionData }) => {
  const styles = getThemeStyles(data.theme);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = 6;
  const totalSlides = Math.ceil(data.sliderItems.length / itemsPerPage);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  const visibleItems = data.sliderItems.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);

  return (
    // Note: I removed xl:w-[65%] from here.
    <div className="w-full flex flex-col justify-center relative z-10 px-2 lg:px-4 h-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Featured <span className={`text-transparent bg-clip-text bg-gradient-to-r ${data.theme === 'red' ? 'from-red-600 to-orange-600' : 'from-blue-600 to-indigo-600'}`}>{data.title}</span>
          </h2>
          <p className={`${data.theme === 'red' ? 'text-red-900/60' : 'text-blue-900/60'} font-bold tracking-widest uppercase text-xs mt-2`}>
            {data.subtitle}
          </p>
        </div>

        <div className="flex gap-3">
          <button onClick={prevSlide} className={`group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-400 hover:${styles.textHighlight} hover:scale-110 active:scale-95 transition-all duration-300 border border-white`}>
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button onClick={nextSlide} className={`group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-400 hover:${styles.textHighlight} hover:scale-110 active:scale-95 transition-all duration-300 border border-white`}>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="relative w-full pb-12">
        <div key={currentSlide} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 animate-fade-in-up">
          {visibleItems.map((item, index) => (
            <div key={index} className="group relative flex flex-col justify-end h-full pt-14 md:pt-16 font-sans">

              {/* 1. FLOATING ICON BOX (The "Head") */}
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
                <div className="
            relative w-24 h-24 md:w-28 md:h-28 
            rounded-3xl flex items-center justify-center 
            transition-transform duration-500
            group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3
          ">
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${item.color === 'green' ? 'from-green-100/50' : 'from-blue-100/50'} to-transparent`} />

                  <img
                    src={item.color === 'green' ? CAPS.green : CAPS.blue}
                    alt="Cap"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md relative z-10"
                  />
                </div>
              </div>

              {/* 2. PEDESTAL BASE (The "Body") */}
              <div className="
          relative h-full w-full 
          rounded-[2.5rem] 
         
          p-5 pt-16 md:p-6 md:pt-20 
          flex flex-col items-center 
          shadow-lg transition-all duration-500 
         
        ">

                {/* Fake Floor Shadow (Depth under the floating icon) */}
                <div className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/10 blur-xl rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-blue-900/20 group-hover:blur-2xl" />

                {/* Glossy Overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

                {/* Content Section */}
                <div className="relative z-10 text-center flex-1 flex flex-col w-full items-center justify-center mt-2">

                  {/* Tag/Label */}
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-900/40 mb-2">
                    Course
                  </p>

                  {/* Title */}
                  <h3 className="text-xs md:text-sm font-extrabold text-slate-800 line-clamp-2 leading-tight px-1">
                    {item.name}
                  </h3>
                </div>

                {/* Bottom Action Bar (Separator + Button) */}
                <div className="mt-6 w-full pt-5 border-t border-white/20 group-hover:border-white/40 transition-colors flex items-center justify-center relative z-20">
                  <span
                    className={`
                w-full flex items-center justify-center gap-2 py-2.5 rounded-xl 
                text-[10px] md:text-xs font-black uppercase tracking-wider text-white 
                transition-all duration-200 
                active:shadow-none active:translate-y-[4px]
                ${data.theme === 'red'
                        ? 'bg-gradient-to-r from-red-600 to-red-500 '
                        : 'bg-gradient-to-r from-blue-600 to-blue-500 '
                      }
              `}
                  >
                    Apply Now
                    <ArrowRight size={12} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </div>

              {/* Full Card Click Area */}
              <Link href={item.link} className="absolute inset-0 z-30" aria-label={`View ${item.name}`} />
            </div>
          ))}

          {/* Empty slots filler for desktop */}
          {Array.from({ length: itemsPerPage - visibleItems.length }).map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:block h-full" />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${i === currentSlide ? `w-8 ${styles.pagination}` : `w-2 ${styles.paginationInactive} hover:bg-gray-400`}`}
          />
        ))}
      </div>
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