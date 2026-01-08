'use client';

import React, { useState } from 'react';
import { GraduationCap, ChevronLeft, ChevronRight, Sparkles, Scroll, BookOpen } from 'lucide-react';
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
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight font-serif text-white">{data.title}</h2>
        </div>

        <div className={`grid ${data.staticList.length > 8 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-x-6 gap-y-3 content-start overflow-y-auto custom-scrollbar pr-2`}>
          {data.staticList.map((program, index) => (
            <div key={index} className="flex items-start gap-2 group/item cursor-pointer hover:bg-white/10 p-1.5 rounded-lg transition-colors">
              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${styles.subtle} group-hover/item:bg-white flex-shrink-0 shadow-[0_0_5px_rgba(255,255,255,0.8)]`} />
              <span className="text-[10px] lg:text-[11px] font-medium leading-tight text-white/80 group-hover/item:text-white transition-colors">
                {program}
              </span>
            </div>
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

      <div className="relative min-h-[450px]">
        <div key={currentSlide} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in-up">
          {visibleItems.map((item, index) => (
            <div key={index} className="group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500 bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white hover:border-white hover:shadow-xl hover:-translate-y-1 h-full">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-b ${item.color === 'green' ? 'from-green-50/50' : 'from-blue-50/50'} to-transparent pointer-events-none`} />

              <div className="mb-4 relative h-16 w-16 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 ${item.color === 'green' ? 'bg-green-200' : 'bg-blue-200'}`} />
                <img 
                  src={item.color === 'green' ? CAPS.green : CAPS.blue} 
                  alt="Cap"
                  className="w-full h-full object-contain relative z-10 drop-shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                />
              </div>

              <h3 className="relative z-10 text-xs lg:text-sm font-bold text-gray-800 mb-4 line-clamp-2 min-h-[2.5rem] flex items-center justify-center leading-tight">
                {item.name}
              </h3>
            </div>
          ))}
          {Array.from({ length: itemsPerPage - visibleItems.length }).map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:block min-h-[200px]" />
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
    <main className="w-full bg-gray-50 overflow-hidden">
      
      {programsData.map((section) => (
        <section key={section.id} className="relative  flex items-center justify-center p-4 lg:p-10 border-b border-gray-100 last:border-0">
          
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

          {/* MAIN LAYOUT FIX:
              1. No if/else logic for component rendering.
              2. StaticPanel and SliderPanel are rendered ONCE per section.
              3. We use `xl:order-last` to swap the StaticPanel to the right side on desktop if needed.
              4. On Mobile, the DOM order (Static then Slider) is preserved, so the Title always comes first.
          */}
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