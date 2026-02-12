'use client';

import React from 'react';
import { Award, Star, Trophy, Sparkles } from 'lucide-react';

const RankingAccreditation = () => {
    return (
        <section className="relative w-full py-24 lg:py-32 bg-gray-50 overflow-hidden font-sans">

            {/* --- BACKGROUND AMBIENCE --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                {/* Blue Side Strip (Far Left) */}

                {/* Ambient Blobs */}
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 md:px-8 max-w-[1600px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* --- LEFT SIDE: Content --- */}
                    <div className="w-full lg:w-1/2 relative z-10">

                        {/* Header Group */}
                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="h-0.5 w-12 bg-red-600 hidden md:block rounded-full"></div>
                                <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-sm md:text-xs">
                                    <Trophy size={14} />
                                    <span>What We Have Achieved</span>
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] font-serif">
                                Ranking & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Accreditations</span>
                            </h2>
                        </div>

                        {/* Description Text */}
                        <div className="relative p-6 md:p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/50 shadow-xl shadow-blue-900/5 mb-12 group hover:bg-white/80 transition-colors duration-500">
                            <div className="absolute left-0 top-8 w-1 h-16 bg-blue-600 rounded-r-full group-hover:h-24 transition-all duration-500"></div>
                            <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                                Hindustan College of Arts & Science (formerly HCAS) has been accredited
                                with grade <span className="font-bold text-blue-900 text-2xl mx-1">"A"</span> in its 4th cycle by
                                <span className="font-bold text-gray-900"> NAAC </span>
                                (National Assessment and Accreditation Council).
                            </p>
                        </div>

                        {/* NAAC Badge & Stats */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">

                            {/* NAAC Logo Container */}
                            <div className="relative group">
                                {/* Glow Effect behind logo */}
                                <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-75 group-hover:scale-100" />

                                <img
                                    src="./images/naac.png"
                                    // Note: Ensure you have a clean NAAC logo here
                                    alt="NAAC Grade A Accreditation"
                                    className="relative w-40 md:w-48 h-auto object-contain drop-shadow-lg transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 ease-out"
                                    onError={(e) => {
                                        // Fallback Visual if image fails
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling!.classList.remove('hidden');
                                    }}
                                />

                                {/* Fallback Badge (Hidden by default, shows if img fails) */}
                                <div className="hidden relative w-40 h-40 bg-white rounded-full border-4 border-yellow-400 items-center justify-center shadow-xl flex-col">
                                    <Award size={48} className="text-blue-900 mb-2" />
                                    <span className="font-bold text-2xl text-blue-900">NAAC</span>
                                    <span className="text-sm font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full mt-1">Grade A</span>
                                </div>
                            </div>

                            {/* Stats / Cycles */}
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <p className="text-4xl font-serif font-bold text-blue-900">4<span className="text-lg align-top text-blue-500">+</span></p>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Cycles Completed</p>
                                </div>
                                <div className="w-px h-12 bg-gray-300"></div>
                                <div className="text-center">
                                    <p className="text-4xl font-serif font-bold text-blue-900">A</p>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Grade Awarded</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: Image Composition --- */}
                    <div className="w-full lg:w-1/2 relative perspective-1000 group/image">

                        {/* Red Decorative Background (The Red Box behind) */}
                        <div className="absolute -top-8 -right-8 w-[90%] h-[105%] bg-gradient-to-br from-red-600 to-red-700 rounded-[3rem] -z-10 overflow-hidden transform group-hover/image:rotate-2 transition-transform duration-700 ease-out shadow-2xl shadow-red-900/20">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-white group h-[400px] md:h-[500px] transform transition-transform duration-700 group-hover/image:-translate-y-2">

                            {/* Blue Overlay Tint */}
                            <div className="absolute inset-0 bg-blue-950/40 z-10 mix-blend-multiply transition-opacity duration-500 group-hover/image:bg-blue-950/20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent z-10 opacity-80" />

                            {/* Background Building Image */}
                            <img
                                src="./images/Home-Slider4.webp"
                                alt="Hindustan College Campus"
                                className="w-full h-full object-cover transform scale-100 group-hover/image:scale-110 transition-transform duration-[1.5s] ease-out"
                            />

                            {/* Centered Logo Overlay */}
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                                <div className="relative">
                                    {/* Glow behind logo */}
                                    <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse-slow"></div>
                                    <img
                                        src="./images/logo.png"
                                        alt="HCAS Logo"
                                        className="relative w-48 md:w-64 h-auto drop-shadow-2xl opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating Accent Badge */}
                        <div className="absolute -bottom-8 left-8 md:left-12 z-30 animate-float">
                            <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-white flex items-center gap-4 group/badge hover:scale-105 transition-transform">
                                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl text-white shadow-lg shadow-green-200">
                                    <Award size={28} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Accreditation</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-gray-900 font-serif">Grade A</span>
                                        <Sparkles size={16} className="text-yellow-500 fill-yellow-500 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default RankingAccreditation;