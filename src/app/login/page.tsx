'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Mail, Phone, MapPin, BookOpen, ArrowRight, Sparkles, CheckCircle2, GraduationCap, Quote, Send, ArrowRightCircle, X, Info } from 'lucide-react';
import { enquiryData, getCourseList } from '@/data/enquiryData';

export default function EnquiryPage() {
    const courseList = getCourseList();
    const [activeStep, setActiveStep] = useState(0);
    const [isNotesOpen, setIsNotesOpen] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
        course: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Validation Functions
    const validateName = (name: string): string => {
        if (!name.trim()) return 'Name is required';
        if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name should contain only letters';
        if (name.trim().length < 3) return 'Name must be at least 3 characters';
        return '';
    };

    const validateEmail = (email: string): string => {
        if (!email.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return '';
    };

    const validateMobile = (mobile: string): string => {
        if (!mobile.trim()) return 'Mobile number is required';
        // Indian phone number: 10 digits, starting with 6-9
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(mobile)) return 'Please enter a valid 10-digit Indian mobile number (starting with 6-9)';
        return '';
    };

    const validateCity = (city: string): string => {
        if (!city.trim()) return 'City is required';
        if (city.trim().length < 2) return 'City must be at least 2 characters';
        return '';
    };

    const validateCourse = (course: string): string => {
        if (!course) return 'Please select a course';
        return '';
    };

    // Handle Input Change with validation
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Handle Input Blur - validate on blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let error = '';

        switch (name) {
            case 'name':
                error = validateName(value);
                break;
            case 'email':
                error = validateEmail(value);
                break;
            case 'mobile':
                error = validateMobile(value);
                break;
            case 'city':
                error = validateCity(value);
                break;
            case 'course':
                error = validateCourse(value);
                break;
        }

        if (error) {
            setErrors({ ...errors, [name]: error });
        }
    };

    // Submit Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        // Comprehensive Validation
        const newErrors: { [key: string]: string } = {
            name: validateName(formData.name),
            email: validateEmail(formData.email),
            mobile: validateMobile(formData.mobile),
            city: validateCity(formData.city),
            course: validateCourse(formData.course)
        };

        // Filter out empty errors
        const hasErrors = Object.values(newErrors).some(error => error !== '');

        if (hasErrors) {
            setErrors(newErrors);
            setSubmitStatus({ type: 'error', message: 'Please fix the errors in the form.' });
            setIsSubmitting(false);
            return;
        }

        try {
            const payload = {
                lead_type: "CSL",
                name: formData.name,
                email: formData.email,
                phone: formData.mobile,
                clg_id: Number(process.env.NEXT_PUBLIC_GATI_COLLEGE_ID) || 0, // Default to 0 if not set
                city: formData.city,
                course: formData.course,
                // Static / Default Values
                source: "Web_API",
                utm_source: "HCAS_Website",
                utm_medium: "Web_Form",
                utm_campaign: "Admissions_2025"
            };

            const response = await fetch('https://hcaschennai.gaticrm.com/api/v1/lead/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'secret-key': process.env.NEXT_PUBLIC_GATI_SECRET_KEY || ''
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus({ type: 'success', message: 'Enquiry submitted successfully! We will contact you soon.' });
                setFormData({ name: '', email: '', mobile: '', city: '', course: '' }); // Reset form
                setErrors({}); // Clear errors
            } else {
                setSubmitStatus({ type: 'error', message: data.message || 'Submission failed. Please try again.' });
            }
        } catch (error) {
            console.error('API Error:', error);
            setSubmitStatus({ type: 'error', message: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                style={{ backgroundImage: "url('/images/Home-Slider4.webp')" }}
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
                <div className="w-full lg:w-[45%] bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 relative overflow-hidden rounded-r-3xl flex flex-col justify-between p-8 lg:p-14 text-white shadow-2xl">

                    {/* Deep Gradient Overlay */}

                    {/* Abstract Shapes */}

                    {/* --- Content Top --- */}
                    <div className="relative z-10 space-y-8">
                        {/* Logo Area */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <div className=" h-20  bg-white backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                                    <img
                                        src="/hcas-images/Hcas transparent.png"
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
                                Be a <br />
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

                        {submitStatus.type && (
                            <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={handleSubmit}>

                            {/* Inputs */}
                            <div className="space-y-1">
                                <div className="group relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Full Name"
                                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 ${errors.name ? 'border-red-300 focus:border-red-400' : 'border-transparent focus:border-blue-100'} rounded-xl outline-none focus:bg-white focus:ring-4 ${errors.name ? 'focus:ring-red-50/50' : 'focus:ring-blue-50/50'} transition-all font-medium text-gray-800`}
                                        required
                                    />
                                </div>
                                {errors.name && <p className="text-xs text-red-600 ml-1">{errors.name}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div className="group relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Email"
                                            className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 ${errors.email ? 'border-red-300 focus:border-red-400' : 'border-transparent focus:border-blue-100'} rounded-xl outline-none focus:bg-white focus:ring-4 ${errors.email ? 'focus:ring-red-50/50' : 'focus:ring-blue-50/50'} transition-all font-medium text-gray-800`}
                                            required
                                        />
                                    </div>
                                    {errors.email && <p className="text-xs text-red-600 ml-1">{errors.email}</p>}
                                </div>
                                <div className="space-y-1">
                                    <div className="group relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Mobile (10 digits)"
                                            maxLength={10}
                                            className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 ${errors.mobile ? 'border-red-300 focus:border-red-400' : 'border-transparent focus:border-blue-100'} rounded-xl outline-none focus:bg-white focus:ring-4 ${errors.mobile ? 'focus:ring-red-50/50' : 'focus:ring-blue-50/50'} transition-all font-medium text-gray-800`}
                                            required
                                        />
                                    </div>
                                    {errors.mobile && <p className="text-xs text-red-600 ml-1">{errors.mobile}</p>}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="group relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                        <MapPin size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="City / District"
                                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 ${errors.city ? 'border-red-300 focus:border-red-400' : 'border-transparent focus:border-blue-100'} rounded-xl outline-none focus:bg-white focus:ring-4 ${errors.city ? 'focus:ring-red-50/50' : 'focus:ring-blue-50/50'} transition-all font-medium text-gray-800`}
                                        required
                                    />
                                </div>
                                {errors.city && <p className="text-xs text-red-600 ml-1">{errors.city}</p>}
                            </div>

                            <div className="space-y-1">
                                <div className="group relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                        <BookOpen size={18} />
                                    </div>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 ${errors.course ? 'border-red-300 focus:border-red-400' : 'border-transparent focus:border-blue-100'} rounded-xl outline-none focus:bg-white focus:ring-4 ${errors.course ? 'focus:ring-red-50/50' : 'focus:ring-blue-50/50'} transition-all font-medium text-gray-800 appearance-none cursor-pointer`}
                                        required
                                    >
                                        <option value="" disabled>Select Course</option>
                                        {courseList.map((course, idx) => (
                                            <option key={idx} value={course}>{course}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                    </div>
                                </div>
                                {errors.course && <p className="text-xs text-red-600 ml-1">{errors.course}</p>}
                            </div>

                            {/* --- BUTTON SECTION FROM IMAGE --- */}
                            <div className="mt-8 space-y-5">

                                {/* 1. Submit Enquiry (Blue Button) */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-[#1a3696] hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-[0_4px_14px_0_rgba(26,54,150,0.39)] active:scale-[0.98] flex items-center justify-center gap-2 text-base transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                                    {!isSubmitting && <Send size={18} className="ml-1" />}
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
                                <a
                                    href="https://pay.hcaschennai.edu.in:5002/onlineregistration/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-[#e60000] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-lg transition-all duration-200 group hover:bg-red-50 cursor-pointer"
                                >
                                    <ArrowRightCircle size={22} className="text-[#e60000] group-hover:translate-x-0.5 transition-transform" />
                                    Apply Now
                                </a>

                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}