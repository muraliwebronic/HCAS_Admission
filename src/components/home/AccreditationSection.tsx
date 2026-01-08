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
} from "lucide-react";

// --- TYPES ---
interface LogoItem {
  name: string;
  src: string;
  alt: string;
}

// --- DATA: ACCREDITATIONS ---
const LOGOS: LogoItem[] = [
  {
    name: "India Today Ranking",
    src: "./hcas-images/partners./images.jpeg",
    alt: "India Today Ranking",
  },
  {
    name: "ISO Certified",
    src: "./hcas-images/partners/download.jpeg",
    alt: "ISO 9001:2015 Certified",
  },
  // Note: 'download-8.png' is often NAAC in these datasets, but swapped if needed
  {
    name: "NAAC",
    src: "./hcas-images/partners/download-8.png",
    alt: "NAAC Accreditation",
  },
  {
    name: "ABET",
    src: "./hcas-images/partners/abet-1.png",
    alt: "ABET Computing Accreditation",
  },
  // Reusing available images for the remaining slots to prevent broken links
  {
    name: "ICAR",
    src: "./hcas-images/partners./images.jpeg",
    alt: "ICAR",
  },
  {
    name: "Times Now",
    src: "./hcas-images/partners/download.jpeg",
    alt: "Times Now",
  },
];
// --- DATA: FEATURES ---
const FEATURES = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Affiliated to University of Madras & Reaccredited by NAAC with 'A' Grade.",
  },
  {
    icon: Trophy,
    title: "University Ranks",
    description:
      "Consistent academic top performers and gold medalists year after year.",
  },
  {
    icon: Leaf,
    title: "Green Campus",
    description:
      "Beautiful lush environment overlooking the serene Muttukadu Lake.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Highly qualified professors with NET/SLET/Ph.D qualifications.",
  },
  {
    icon: Briefcase,
    title: "Career Placement",
    description:
      "Job-oriented add-on courses & dedicated placement support in every department.",
  },
  {
    icon: Star,
    title: "Scholarships",
    description:
      "Financial aid available for deserving students in academics & sports.",
  },
];

// --- COMPONENT 1: ACCREDITATIONS ---
export const AccreditationSection: React.FC = () => {
  return (
    <section className="relative shadow-inner py-20 bg-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-50/50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100 mb-2">
            <Award size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Recognitions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Accreditations
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Recognized for excellence in education and infrastructure by leading
            national and international bodies.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {LOGOS.map((logo, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100  rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-44 h-20 md:w-52 md:h-20 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-red-50/0 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-auto h-16 object-contain filter   group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const sibling = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (sibling) sibling.style.display = "flex";
                  }}
                />
                <div className="hidden flex-col items-center gap-2 text-gray-300 group-hover:text-red-500 transition-colors">
                  <ShieldCheck size={32} />
                  <span className="text-[10px] font-bold uppercase">
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

// --- COMPONENT 2: WHY HCAS ---
export const WhyHCASSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden text-gray-900">
      
      {/* Background Layers (Bright) */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/60 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* --- LEFT: VIDEO PLAYER --- */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
             
             {/* Header (Mobile Only) */}
             <div className="lg:hidden mb-8">
                 <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">Why Choose HCAS?</h2>
             </div>

             {/* Video Card (Clean White Theme) */}
             <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 group bg-white">
                  
                  {!isPlaying ? (
                    <div className="absolute inset-0 cursor-pointer flex items-center justify-center p-0 m-0 bg-white" onClick={() => setIsPlaying(true)}>
                        
                        {/* Logo Centered */}
                        <img 
                          src="./images/logo.png" 
                          alt="HCAS Logo" 
                          className="w-48 md:w-64 h-auto object-contain z-10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/5 group-hover:bg-black/0 transition-colors">
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
                                <div className="relative w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Play className="ml-1 text-white fill-white" size={32} />
                                </div>
                            </div>
                        </div>

                        {/* Text Label */}
                        <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Campus Tour</p>
                            <h3 className="text-xl font-bold text-gray-800 font-serif">Watch Video</h3>
                        </div>
                    </div>
                  ) : (
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/6t4i0zal984?si=w1dISYTtEQUNqmSr&autoplay=1" 
                        title="HCAS Campus Tour" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                  )}
             </div>

             {/* Decorative Background for Video */}
             <div className="absolute -z-10 top-20 left-4 w-[45%] h-[400px] border-2 border-dashed border-blue-200 rounded-[2.5rem] hidden lg:block" />

          </div>

          {/* --- RIGHT: FEATURES GRID --- */}
          <div className="w-full lg:w-[55%]">
            
            <div className="hidden lg:flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 border border-blue-100">
                    <Star size={20} fill="currentColor" />
                </div>
                <span className="text-blue-900 font-bold tracking-widest uppercase text-xs md:text-sm">Trusted Expertise</span>
            </div>

            <h2 className="hidden lg:block text-4xl md:text-5xl font-bold mb-10 font-serif leading-tight text-gray-900">
               Why Choose <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">HCAS Chennai?</span>
            </h2>

            {/* Bright Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {FEATURES.map((feature, index) => (
                <div 
                    key={index} 
                    className="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <feature.icon size={22} />
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                          <p className="text-xs md:text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                            {feature.description}
                          </p>
                      </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row (Bright) */}
            <div className="mt-10 flex flex-wrap gap-8 md:gap-12 border-t border-gray-200 pt-8">
                 <div>
                    <p className="text-4xl font-bold text-gray-900 font-serif">28<span className="text-blue-600">+</span></p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">Years of Excellence</p>
                 </div>
                 <div>
                    <p className="text-4xl font-bold text-gray-900 font-serif">A</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">NAAC Grade</p>
                 </div>
            </div>

          </div>

        </div>
      </div>


    </section>
  );
};
