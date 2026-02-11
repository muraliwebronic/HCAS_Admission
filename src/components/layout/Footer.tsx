'use client';

import React from 'react';
import { MapPin, Phone, Smartphone, Mail, Globe, ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Send, User, BookOpen } from 'lucide-react';

// --- DATA CONFIGURATION ---
const footerData = {
  about: {
    title: "HINDUSTAN",
    subtitle: "College of Arts & Science",
    description: "A Unit of Hindustan Group of Institutions, affiliated to the University of Madras and is accorded the Minority Status by National Commission for Minority Educational Institutions, Govt. of India."
  },
  campusAddress: {
    title: "Contact Details",
    details: [
      { icon: MapPin, text: "Padur, Kelambakkam (OMR), Rajiv Gandhi Salai, Chennai - 603 103." },
      { icon: Phone, text: "+044 6903 4444 / 2747 4671" },
      { icon: Smartphone, text: "+91 97898 85555" }, // Combined Admission Mobile here
      { icon: Mail, text: "hcaspadur@yahoo.co.in" },
      { icon: Globe, text: "www.hcaschennai.edu.in" }
    ]
  },
  // Added Placement URL here
  quickLinks: [
    { text: "About us", href: "#" },
    { text: "Admission", href: "#" },
    { text: "Placement", href: "https://hcaschennai.edu.in/placement/" }, // NEW LINK
    { text: "Courses", href: "#" },
    { text: "Staff Login", href: "#" },
    { text: "Online Payment", href: "#" },
    { text: "Library OPAC", href: "#" }
  ],
  socials: [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" }
  ]
};

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#051030] text-white font-sans overflow-hidden border-t border-blue-900/30">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* --- COLUMN 1: BRANDING --- */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                 <span className="font-bold text-3xl text-red-500 font-serif">H</span>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-wide text-white leading-none mb-1">
                    {footerData.about.title}
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold">
                    {footerData.about.subtitle}
                </p>
              </div>
            </div>
            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 border-l-2 border-red-600 pl-4">
              {footerData.about.description}
            </p>
            
            <div className="flex gap-3">
                {footerData.socials.map((social, idx) => (
                    <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10">
                        <social.icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          {/* --- COLUMN 2: CONTACT INFO --- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600"></span> {footerData.campusAddress.title}
            </h3>
            <ul className="space-y-6">
                {footerData.campusAddress.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                            <item.icon size={16} />
                        </div>
                        <span className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
          </div>

          {/* --- COLUMN 3: QUICK ENQUIRY FORM (NEW) --- */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600"></span> Quick Enquiry
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                    <User size={16} className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-blue-950/50 border border-blue-900/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                </div>
                <div className="relative group">
                    <Smartphone size={16} className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        className="w-full bg-blue-950/50 border border-blue-900/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                </div>
                <div className="relative group">
                    <BookOpen size={16} className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    <select className="w-full bg-blue-950/50 border border-blue-900/50 rounded-xl py-3 pl-10 pr-4 text-sm text-gray-400 focus:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select Course</option>
                        <option value="ug">UG Courses</option>
                        <option value="pg">PG Courses</option>
                        <option value="research">Research</option>
                    </select>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm mt-2">
                    Submit Request <Send size={14} />
                </button>
            </form>
          </div>

          {/* --- COLUMN 4: QUICK LINKS --- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600"></span> Quick Links
            </h3>
            <ul className="space-y-3">
                {footerData.quickLinks.map((link, idx) => (
                    <li key={idx} className="group">
                        <a href={link.href} className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                            <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">{link.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
          </div>

        </div>
      </div>

      {/* --- COPYRIGHT BAR --- */}
      <div className="relative z-10 w-full bg-[#020a1e]/80 backdrop-blur-sm border-t border-white/5 py-6 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs font-medium tracking-wide text-center md:text-left">
              © 2018 Hindustan College of Arts & Science. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 font-medium">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;