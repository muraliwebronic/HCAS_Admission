'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Mail, Phone, MapPin, BookOpen, ArrowUpRight, X, Sparkles, Info } from 'lucide-react';
import { enquiryData, getCourseList } from '@/data/enquiryData';

export default function EnquiryPage() {
    const [isNotesOpen, setIsNotesOpen] = useState(false);
    const courseList = getCourseList();

    // Data specifically for the info section
    const infoContent = {
        description: "Prospective students are requested to fill out the enquiry form with accurate details. Our admission team will review the information and contact you with further guidance regarding the admission process.",
        steps: [
            "Fill out accurate details",
            "Select your preferred course",
            "Our team will contact you",
            "Guidance on admission process"
        ]
    };

    return (
        <div
            className="relative min-h-screen w-full bg-gray-900 bg-cover bg-center font-sans flex flex-col lg:flex-row"
            style={{
                backgroundImage: "url('/images/Home-Slider4.webp')"
            }}
        >
            {/* Dark Overlay - Fixed to cover scrolling area */}
            <div className="fixed inset-0 bg-blue-950/70 lg:bg-blue-950/50 z-0 backdrop-blur-[2px]"></div>

            {/* =========================================
                MOBILE INFO MODAL (The "i" Button Popup)
               ========================================= */}
            {isNotesOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-gradient-to-br from-blue-950 to-indigo-900 w-full max-w-sm rounded-3xl p-6 relative border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto">

                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsNotesOpen(false)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <div className="space-y-6 relative z-0">
                            {/* Header */}
                            <div>
                                <h3 className="font-bold text-xl text-white border-b-2 border-red-500 pb-2 inline-block mb-3 font-sans">
                                    Admission Process
                                </h3>
                                <p className="text-blue-100/90 text-sm leading-relaxed font-light font-sans">
                                    {infoContent.description}
                                </p>
                            </div>

                            {/* Steps List */}
                            <ul className="space-y-3 bg-black/20 p-4 rounded-xl border border-white/5">
                                {infoContent.steps.map((text, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-blue-200/90 font-medium font-sans">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* The Creative Text (Mobile Modal Version) */}
                            <div className="pt-4 border-t border-white/10 text-center">
                                <h2 className="text-4xl font-black tracking-tight leading-none text-white drop-shadow-md font-sans">
                                    Be a <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                                        HCASian
                                    </span>
                                </h2>
                                <p className="text-lg italic text-blue-200 mt-2 font-light">
                                    Be a <span className="font-bold text-white not-italic">High Thinker</span> for Life.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsNotesOpen(false)}
                                className="w-full py-3 bg-white text-blue-900 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 2. LEFT PANEL (Sticky Sidebar) */}
            <div className="relative z-10 w-full lg:w-[42%] lg:h-screen lg:sticky lg:top-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white flex flex-col px-6 py-8 lg:px-14 lg:py-14 shadow-[20px_0_60px_rgba(0,0,0,0.6)] lg:rounded-r-[60px] border-r border-white/5 overflow-hidden">

                {/* Texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

                {/* Content Wrapper - justify-between adds the vertical breathing space */}
                <div className="relative h-full flex flex-col justify-between">

                    {/* TOP SECTION: Logo, Title, Info */}
                    <div className="space-y-10">
                        {/* Header Section */}
                        <div className="flex justify-between items-start">
                            <div className="space-y-5">
                                {/* Logo */}
                                <div className="h-17 lg:h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg shadow-blue-900/20 overflow-hidden relative">
                                    <Image
                                        src="./hcas-images/HCAS.png"
                                        alt="HCAS Logo"
                                        fill
                                        className="object-cover p-1 rounded-xl"
                                    />
                                </div>
                                <div>
                                    <p className="text-xl lg:text-3xl font-bold tracking-wide text-white drop-shadow-md font-sans">
                                        {enquiryData.sidebar.title}
                                    </p>
                                    <div className="flex items-center gap-3 mt-3">
                                        <div className="h-0.5 w-8 bg-red-500 rounded-full"></div>
                                        <p className="text-xs lg:text-sm font-bold text-blue-200 tracking-[0.15em] uppercase font-sans">
                                            HCAS ADMISSIONS
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE ONLY: Info Button */}
                            <button
                                onClick={() => setIsNotesOpen(true)}
                                className="lg:hidden p-2.5 bg-blue-500/20 hover:bg-blue-500/30 rounded-full backdrop-blur-md transition-all active:scale-95 border border-white/20 shadow-lg"
                                aria-label="Show Instructions"
                            >
                                <div className="text-white">
                                    <Info size={22} strokeWidth={2.5} />
                                </div>
                            </button>
                        </div>

                        {/* DESKTOP INFO */}
                        <div className="hidden lg:block max-w-md xl:max-w-lg w-full space-y-6 animate-fade-in-up">

                            <div className="space-y-4">


                                <p className="text-blue-100/85 leading-relaxed font-light text-sm xl:text-base font-sans">
                                    {infoContent.description}
                                </p>
                            </div>

                            <ul className="grid grid-cols-2 gap-4 ">
                                {infoContent.steps.map((text, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-sm xl:text-base text-blue-200/80 font-medium group font-sans"
                                    >
                                        <div className="mt-2 w-2 h-2 rounded-full bg-red-500 group-hover:bg-white transition-colors shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
                                        <span className="leading-relaxed">{text}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>

                    {/* BOTTOM SECTION: Creative Text */}
                    {/* Added padding top to ensure breathing space from above content */}
                    <div className="hidden lg:block relative pt-12">
                        <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>

                        <div className="relative z-10">
                            {/* Main Title */}
                            <h2 className="text-5xl xl:text-6xl font-black tracking-tight leading-[0.9] text-white drop-shadow-lg font-sans">
                                Be a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-300">
                                    HCASian
                                </span>
                            </h2>

                            {/* Subtitle */}
                            <div className="mt-5 flex flex-col items-start gap-3">
                                <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-transparent rounded-full shadow-lg"></div>
                                <h2 className="text-xl xl:text-2xl italic text-blue-100/80 tracking-wide font-light font-sans">
                                    Be a <span className="font-bold text-white not-italic">High Thinker</span> for Life.
                                </h2>
                            </div>
                        </div>

                        {/* Background Sparkle */}
                        <Sparkles className="absolute -top-6 right-0 text-white/5 opacity-100" size={140} strokeWidth={0.5} />
                    </div>

                </div>
            </div>

            {/* 3. RIGHT PANEL (Scrollable Form Area) */}
            <div className="relative z-20 flex-1 flex items-center justify-center lg:justify-center max-md:pb-10 px-3 max-md:-translate-y-5  lg:py-12 lg:p-10">

                {/* Increased max-width to 500px for a bigger form */}
                <div className="w-full max-w-[500px] bg-white/95 backdrop-blur-xl p-6 lg:p-8 rounded-[1.8rem] relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/40 ring-1 ring-white/50 transition-all duration-300 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]">

                    {/* Top Bar Accent */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-900 via-blue-600 to-red-600"></div>

                    {/* Form Header */}
                    <div className="text-center mb-6">
                        <span className="bg-blue-50 text-blue-900 text-[10px] font-extrabold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest font-sans">
                            Start Your Journey
                        </span>
                        <h1 className="text-2xl font-bold text-gray-900 mt-3 mb-1 font-sans">
                            {enquiryData.form.title}
                        </h1>
                    </div>

                    {/* Inputs - Increased vertical padding (py-3) for bigger look */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                        {/* Name */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">{enquiryData.form.fields.name}</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-700 transition-colors">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-gray-800 placeholder:text-gray-400 font-sans"
                                />
                            </div>
                        </div>

                        {/* Email & Mobile Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">{enquiryData.form.fields.email}</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-700 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email ID"
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-gray-800 placeholder:text-gray-400 font-sans"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">{enquiryData.form.fields.mobile}</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-700 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Mobile No"
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-gray-800 placeholder:text-gray-400 font-sans"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">{enquiryData.form.fields.location}</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-700 transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="City / District"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-gray-800 placeholder:text-gray-400 font-sans"
                                />
                            </div>
                        </div>

                        {/* Course Selection */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">{enquiryData.form.fields.course}</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-700 transition-colors">
                                    <BookOpen size={18} />
                                </div>
                                <select
                                    defaultValue=""
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-gray-800 placeholder:text-gray-400 appearance-none font-sans"
                                >
                                    <option value="" disabled>Select Preferred Course</option>
                                    {courseList.map((course, idx) => (
                                        <option key={idx} value={course}>{course}</option>
                                    ))}
                                </select>
                                {/* Custom Arrow */}
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="group w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] flex items-center justify-center gap-2 text-sm transition-all duration-300 font-sans">
                                {enquiryData.form.submitBtn}
                                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="my-5 flex items-center gap-3">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">or</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <button className="w-full bg-white border-2 border-red-50 hover:bg-red-50 hover:border-red-100 text-red-600 font-bold py-3.5 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2 group font-sans">
                        <Sparkles size={16} className="group-hover:text-red-500 group-hover:rotate-12 transition-transform" />
                        {enquiryData.bottomLink.text}
                    </button>
                </div>
            </div>

        </div>
    );
}