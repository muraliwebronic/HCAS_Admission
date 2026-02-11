'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Mail, Phone, MapPin, BookOpen, ArrowRight, Sparkles, CheckCircle2, GraduationCap, Quote, Send, ArrowRightCircle, X, Info } from 'lucide-react';
import { enquiryData, getCourseList } from '@/data/enquiryData';

export default function EnquiryPage() {
    const courseList = getCourseList();
    const [activeStep, setActiveStep] = useState(0);
    const [isNotesOpen, setIsNotesOpen] = useState(false);

    // The content you requested to show
    const infoContent = {
        description: "Prospective students are requested to fill out the enquiry form with accurate details. Our admission team will review the information and contact you with further guidance regarding the admission process.",
        steps: [
            "Fill out accurate details",
            "Select your preferred course",
            "Our team will contact you",
            "Guidance on admission process"
        ]
    };

    // Mapping infoContent steps to our Visual Roadmap icons
    const roadmapSteps = [
        { title: "Enquire", desc: infoContent.steps[0], icon: User },
        { title: "Selection", desc: infoContent.steps[1], icon: CheckCircle2 },
        { title: "Response", desc: infoContent.steps[2], icon: Sparkles },
        { title: "Admission", desc: infoContent.steps[3], icon: GraduationCap },
    ];

    return (
        <div className="min-h-screen w-full flex max-md:bg-white overflow-hidden font-sans relative">
            
            {/* Background Image (Fixed) */}
            <div 
                className="absolute hidden md:block  inset-0 z-0 bg-cover bg-center  "
                style={{ backgroundImage: "url('./images/Home-Slider4.webp')" }}
            />

            {/* Dark Overlay for better contrast */}
            <div className="fixed inset-0 bg-slate-900/5 z-0 pointer-events-none"></div>

            {/* =========================================
                INFO MODAL (To show full details if needed)
               ========================================= */}
            {isNotesOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-md rounded-3xl p-6 relative shadow-2xl overflow-hidden">
                        <button
                            onClick={() => setIsNotesOpen(false)}
                            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="mt-2">
                            <h3 className="font-bold text-xl text-blue-900 mb-4">Admission Guidelines</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {infoContent.description}
                            </p>
                            <ul className="space-y-3">
                                {infoContent.steps.map((step, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium bg-blue-50 p-3 rounded-lg border border-blue-100">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                                            {idx + 1}
                                        </div>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="relative z-10 w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row h-full min-h-screen">

                {/* =========================================
                    1. LEFT SIDE: ROADMAP + INFO CONTENT
                   ========================================= */}
                <div className="w-full lg:w-[45%] bg-blue-950 relative overflow-hidden flex flex-col justify-between p-8 lg:p-14 text-white shadow-2xl">
                    
                    {/* Deep Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 z-0"></div>
                    
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    {/* --- Content Top --- */}
                    <div className="relative z-10 space-y-8">
                        {/* Logo Area */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <div className=" h-14  bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                                    <img
                                        src="./hcas-images/HCAS.png"
                                        alt="HCAS Logo"
                                        className="object-contain h-14 rounded-2xl"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg tracking-wide">HCAS</h3>
                                    <p className="text-[10px] text-blue-200 uppercase tracking-[0.2em]">Excellence in Education</p>
                                </div>
                            </div>
                            
                            {/* Mobile Info Button */}
                            <button 
                                onClick={() => setIsNotesOpen(true)}
                                className="lg:hidden p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <Info size={20} />
                            </button>
                        </div>

                        {/* --- Main Heading & Description --- */}
                        <div className="relative py-4">
                            <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white drop-shadow-2xl mb-6">
                                Be a <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-300">
                                    HCASian
                                </span>
                            </h1>

                            {/* SHOWING THE INFO CONTENT DESCRIPTION HERE */}
                            <div className="max-w-md relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
                                <p className="pl-6 text-blue-100/80 text-sm leading-relaxed font-light">
                                    {infoContent.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- THE ROADMAP (Visualizing the Steps) --- */}
                    <div className="relative z-10 py-10 lg:py-0 pl-2">
                        <div className="space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent"></div>

                            {roadmapSteps.map((step, idx) => (
                                <div 
                                    key={idx} 
                                    className="group flex items-center gap-6 relative cursor-default"
                                    onMouseEnter={() => setActiveStep(idx)}
                                >
                                    {/* Dot */}
                                    <div className={`
                                        relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                        ${idx <= activeStep ? 'bg-blue-600 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-110' : 'bg-blue-950/50 border-white/20 scale-100'}
                                    `}>
                                        <step.icon size={16} />
                                    </div>
                                    
                                    {/* Text */}
                                    <div className={`transition-all duration-300 ${idx <= activeStep ? 'opacity-100 translate-x-2' : 'opacity-40'}`}>
                                        <h4 className="font-bold text-lg">{step.title}</h4>
                                        <p className="text-xs text-blue-200 tracking-wide line-clamp-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop "Read More" Link */}
                    <div className="hidden lg:block relative z-10 pt-4">
                        <button 
                            onClick={() => setIsNotesOpen(true)}
                            className="text-xs text-blue-300 hover:text-white flex items-center gap-2 transition-colors"
                        >
                            <Info size={14} />
                            View Full Admission Guidelines
                        </button>
                    </div>
                </div>


             
                <div className="flex-1 flex items-center justify-center p-4 lg:p-12 relative">
                    
                    <div className="w-full max-w-lg bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 p-8 lg:p-10 relative overflow-hidden">
                        
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-800 via-blue-600 to-red-600"></div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Enquiry Form</h2>
                            <p className="text-sm text-gray-500 mt-1">Fill in the details below to get started.</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            
                            {/* Inputs */}
                            <div className="group relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                    <User size={18} />
                                </div>
                                <input type="text" placeholder="Full Name" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-blue-100 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-50/50 transition-all font-medium text-gray-800" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input type="email" placeholder="Email" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-blue-100 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-50/50 transition-all font-medium text-gray-800" />
                                </div>
                                <div className="group relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <input type="tel" placeholder="Mobile" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-blue-100 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-50/50 transition-all font-medium text-gray-800" />
                                </div>
                            </div>

                            <div className="group relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <input type="text" placeholder="City / District" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-blue-100 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-50/50 transition-all font-medium text-gray-800" />
                            </div>

                            <div className="group relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                    <BookOpen size={18} />
                                </div>
                                <select className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-blue-100 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-50/50 transition-all font-medium text-gray-800 appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Course</option>
                                    {courseList.map((course, idx) => (
                                        <option key={idx} value={course}>{course}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                </div>
                            </div>

                            {/* --- BUTTON SECTION FROM IMAGE --- */}
                            <div className="mt-8 space-y-5">
                                
                                {/* 1. Submit Enquiry (Blue Button) */}
                                <button className="w-full bg-[#1a3696] hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-[0_4px_14px_0_rgba(26,54,150,0.39)] active:scale-[0.98] flex items-center justify-center gap-2 text-base transition-all duration-200">
                                    Submit Enquiry
                                    <Send size={18} className="ml-1" />
                                </button>

                                {/* Divider */}
                                <div className="relative flex items-center py-1">
                                    <div className="flex-grow border-t border-gray-200"></div>
                                    <span className="flex-shrink-0 mx-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] select-none">
                                        Ready to Join?
                                    </span>
                                    <div className="flex-grow border-t border-gray-200"></div>
                                </div>

                                {/* 2. Apply Now (White Button with Red Accent) */}
                                <button className="w-full  text-[#e60000] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-lg transition-all duration-200 group">
                                    <ArrowRightCircle size={22} className="text-[#e60000] group-hover:translate-x-0.5 transition-transform" />
                                    Apply Now
                                </button>

                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}