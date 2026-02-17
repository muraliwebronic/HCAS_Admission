'use client';

import React from 'react';
import { MapPin, Phone, Smartphone, Mail, Globe, ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#051030] text-white font-sans overflow-hidden border-t border-blue-900/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]">
        </div>
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow">
        </div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] mix-blend-screen">
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col justify-start">
            <div className="flex flex-col items-start gap-4 mb-6">
              {/* --- LOGO REPLACEMENT --- */}
              <img
                src="/hcas-images/Hcas transparent v2.png"
                alt="HCAS Logo"
                className="object-contain h-14 rounded-2xl"
              />

              <div>
                <h2 className="text-2xl font-sans font-bold tracking-wide text-white leading-none mb-1">
                  HINDUSTAN
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold">
                  College of Arts & Science
                </p>
              </div>

            </div>
            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 border-l-2 border-red-600 pl-4">
              A Unit of Hindustan Group of Institutions, affiliated to the University of Madras and is
              accorded the Minority Status by National Commission for Minority Educational Institutions,
              Govt. of India.
            </p>

            <div className="flex gap-3">
              <a href="https://www.facebook.com/HindustanCollegeofArtsandScience/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/hcaschennai" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/school/hcaschennai/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/hcas_chennai/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@hcaschennai" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600"></span> Campus Address
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <MapPin size={16} />
                </div>
                <a
                  href="https://maps.google.com/?q=Hindustan+College+of+Arts+and+Science+Padur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  Padur, Kelambakkam (OMR), Rajiv Gandhi Salai, Chennai - 603 103.
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:+914469034444"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  +044 6903 4444 / +044 - 2747 4671
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Smartphone size={16} />
                </div>
                <a
                  href="tel:+917092288037"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  +91 7092288037
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:hcaspadur@yahoo.co.in"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  hcaspadur@yahoo.co.in
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Globe size={16} />
                </div>
                <a
                  href="https://hcaschennai.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  www.hcaschennai.edu.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600"></span> Admission Office
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <MapPin size={16} />
                </div>
                <a
                  href="https://maps.google.com/?q=Hindustan+College+Thiruvanmiyur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  No:115/1, 2nd Floor, Kamaraj Avenue, 2nd Street, Adyar, Near Bharath School, Chennai
                  - 600 020.
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:+914424469714"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  + 044 - 2446 9714 / 2446 9715
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Smartphone size={16} />
                </div>
                <a
                  href="tel:+919789885555"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  +91 9789885555
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:hcasadmin@gmail.com"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  hcasadmin@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div
                  className="p-2 rounded-lg bg-blue-900/30 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors mt-1">
                  <Globe size={16} />
                </div>
                <a
                  href="https://hcaschennai.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100/70 group-hover:text-white transition-colors leading-relaxed">
                  www.hcaschennai.edu.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="group">
                <a href="https://hcaschennai.edu.in/home/about-hcas/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span
                    className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">About
                    us</span>
                </a>
              </li>
              <li className="group">
                <a href="https://hcaschennai.edu.in/admission/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span
                    className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">Admission</span>
                </a>
              </li>
              <li className="group">
                <a href="https://hcaschennai.edu.in/academics/programmes/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span
                    className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">Courses</span>
                </a>
              </li>
              <li className="group">
                <a href="https://pay.hcaschennai.edu.in:5002/student/welcome.jsp" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span
                    className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">Student
                    Login</span>
                </a>
              </li>
              <li className="group">
                <a href="https://pay.hcaschennai.edu.in:5002/onlineregistration/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span
                    className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">Online
                    Payment</span>
                </a>
              </li>
              <li className="group">
                <a href="https://hcaschennai.edu.in/library/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span
                    className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">Library
                    OPAC</span>
                </a>
              </li>
              <li className="group">
                <a href="https://hcaschennai.edu.in/infrastructure/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-blue-100/60 hover:text-white transition-colors py-1 pl-2 border-l border-transparent hover:border-red-600 hover:bg-white/5 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span
                    className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">360 View</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-[#020a1e]/80 backdrop-blur-sm border-t border-white/5 py-6 px-6">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-gray-500 text-xs font-medium tracking-wide text-center">
            © 2026 Hindustan College of Arts & Science. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
