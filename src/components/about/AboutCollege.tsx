'use client';

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Building2 } from 'lucide-react';

const AboutCollege = () => {

  // Updated Feature highlights from official About page
  const features = [
    "Unit of Hindustan Group of Institutions",
    "Affiliated to the University of Madras",
    "Accredited by NAAC",
    "Minority Status by NCMEI, Govt. of India"
  ];

  return (
    <section className="relative py-24 bg-gray-50 font-sans overflow-hidden">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* --- LEFT SIDE: Image Composition --- */}
          <div className="w-full lg:w-1/2 relative group perspective-1000">

            <div className="absolute top-8 left-8 w-full h-full border-[3px] border-dashed border-red-200 rounded-[3rem] -z-10 transition-transform duration-700 group-hover:rotate-2" />
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-50 rounded-[3rem] -z-20" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-[6px] border-white transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
              <img
                src="./images/Home-Slider4.webp"
                alt="Hindustan College of Arts & Science Campus"
                className="w-full h-auto object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Established Badge */}
            <div className="absolute -bottom-10 -right-6 lg:-right-10 z-30 animate-float">
              <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] p-5 flex items-center gap-4 group/badge">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/badge:animate-shimmer" />

                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3.5 rounded-xl text-white shadow-lg shadow-red-200">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-0.5">Established</p>
                  <p className="text-3xl font-sans font-bold text-gray-800 leading-none">1995</p>
                </div>
              </div>
            </div>

            {/* Founder Badge */}
            <div className="absolute top-10 -left-6 z-30 hidden md:block animate-float-delayed">
              <div className="bg-blue-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-blue-700">
                <Sparkles size={12} className="text-yellow-400" />
                Founded by Dr. K.C.G. Verghese
              </div>
            </div>

          </div>

          {/* --- RIGHT SIDE: Content --- */}
          <div className="w-full lg:w-1/2 space-y-8">

            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-red-600 rounded-full"></div>
                <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs">Who We Are</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] font-sans">
                About The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Institution</span>
              </h2>
            </div>

            {/* Updated Description Text */}
            <div className="space-y-6 text-gray-600 leading-relaxed text-base lg:text-lg">
              <p>
                Hindustan College of Arts & Science was established in 1995 by our Founder
                <span className="font-bold text-gray-900 underline decoration-red-200 decoration-2 underline-offset-2">
                  {" "}Dr. K.C.G. Verghese
                </span>.
                The institution was founded with a vision to provide quality higher education and develop socially responsible professionals.
              </p>
              <p>
                As a premier institution under the Hindustan Group of Institutions, HCAS is affiliated to the University of Madras and committed to academic excellence, innovation, research, and holistic student development.
              </p>
              <p>
                The college continues to empower students through value-based education, industry-oriented programs, and a vibrant campus environment that nurtures leadership and global competence.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-4 pt-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-gray-700 font-medium group-hover/item:text-blue-900 transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="relative overflow-hidden group bg-blue-950 text-white font-bold py-4 px-10 rounded-full transition-all hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.5)] active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Explore More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollege;
