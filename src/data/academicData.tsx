import { GraduationCap, ChevronLeft, ChevronRight, Sparkles, Scroll, BookOpen } from 'lucide-react';


// --- ASSETS & CONFIG ---
export const CAPS = {
  green: "./images/greencap.png",
  blue: "./images/bluecap.png",
};

// --- TYPES ---
type ThemeColor = 'red' | 'blue';
type LayoutType = 'static-left' | 'static-right';

interface ProgramItem {
  name: string;
  color: 'green' | 'blue';
}

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  theme: ThemeColor;
  layout: LayoutType;
  icon: React.ElementType;
  bgImage?: string;
  staticList: string[];
  sliderItems: ProgramItem[];
}

// --- DATA ---
export const programsData: SectionData[] = [
  {
    id: 'undergraduate',
    title: 'Undergraduate',
    subtitle: 'Select Your Path',
    theme: 'red',
    layout: 'static-left',
    icon: Sparkles,
    staticList: [
      'B.SC BIOTECHNOLOGY', 'B.SC VISUAL COMMUNICATION', 'B.SC COMPUTER SCIENCE', 'B.SC MICROBIOLOGY',
      'B.B.A. BUSINESS ADMINISTRATION', 'B.C.A. COMPUTER APPLICATIONS', 'B.S.W SOCIAL WORK',
      'B.SC CS [ ARTIFICIAL INTELLIGENCE ]', 'B.COM BANK MANAGEMENT', 'B.COM CORPORATE SECRETARYSHIP',
      'B.COM COMPUTER APPLICATION', 'B.COM ACCOUNTING & FINANCE', 'B.SC ELECTRONIC MEDIA',
      'B.SC PSYCHOLOGY', 'B.COM GENERAL', 'B.SC CS [ DATA SCIENCE ]',
    ],
    sliderItems: [
      { name: 'B.Sc Biotechnology', color: 'blue' },
      { name: 'B.Sc Visual Communication', color: 'green' },
      { name: 'B.Sc Computer Science', color: 'blue' },
      { name: 'B.Sc Microbiology', color: 'green' },
      { name: 'B.B.A. Business Administration', color: 'blue' },
      { name: 'B.C.A. Computer Applications', color: 'green' },
      { name: 'B.Com Bank Management', color: 'blue' },
      { name: 'B.Sc Artificial Intelligence', color: 'green' },
      { name: 'B.Com Corporate Secretaryship', color: 'blue' },
      { name: 'B.Sc Data Science', color: 'green' },
      { name: 'B.Sc Electronic Media', color: 'blue' },
      { name: 'B.Sc Psychology', color: 'green' },
    ]
  },
  {
    id: 'postgraduate',
    title: 'Post Graduate',
    subtitle: 'Master Your Skills',
    theme: 'blue',
    layout: 'static-right', // This will now work correctly without duplication
    icon: Sparkles,
    bgImage: 'images/pg-text.png',
    staticList: [
      'M.SC INFORMATION TECHNOLOGY', 'M.SC APPLIED MICROBIOLOGY', 'M.SC VISUAL COMMUNICATION',
      'M.SC BIOTECHNOLOGY', 'M.SC COMPUTER SCIENCE', 'M.S.W SOCIAL WORK',
      'M.COM GENERAL', 'MBA', 'MCA',
    ],
    sliderItems: [
      { name: 'M.Sc Information Technology', color: 'blue' },
      { name: 'M.Sc Applied Microbiology', color: 'green' },
      { name: 'M.Sc Visual Communication', color: 'blue' },
      { name: 'M.Sc Biotechnology', color: 'green' },
      { name: 'M.Sc Computer Science', color: 'blue' },
      { name: 'M.S.W Social Work', color: 'green' },
      { name: 'M.Com General', color: 'blue' },
      { name: 'MBA', color: 'green' },
      { name: 'MCA', color: 'blue' },
    ]
  },
  {
    id: 'research',
    title: 'Research',
    subtitle: 'Doctoral Programmes',
    theme: 'blue',
    layout: 'static-left',
    icon: Scroll,
    bgImage: './images/sclor.jpg',
    staticList: [
      'PH.D BIOTECHNOLOGY', 'PH.D MICROBIOLOGY', 'PH.D COMMERCE',
      'PH.D COMPUTER SCIENCE', 'PH.D MANAGEMENT STUDIES',
    ],
    sliderItems: [
      { name: 'Ph.D Biotechnology', color: 'blue' },
      { name: 'Ph.D Microbiology', color: 'green' },
      { name: 'Ph.D Commerce', color: 'blue' },
      { name: 'Ph.D Computer Science', color: 'green' },
      { name: 'Ph.D Management', color: 'blue' },
    ]
  },
  {
    id: 'diploma',
    title: 'Diploma',
    subtitle: 'Vocational Training',
    theme: 'red',
    layout: 'static-right',
    icon: BookOpen,
    bgImage: 'images/pg-text.png',
    staticList: [
      'VOCATIONAL DIPLOMA IN COMPUTER HARDWARE SERVICING (VDHS)',
      'VOCATIONAL DIPLOMA IN COMPUTER APPLICATIONS (VDCA)',
      'VOCATIONAL DIPLOMA IN BEAUTICIAN (VDIB)',
      'VOCATIONAL DIPLOMA IN DESKTOP PUBLISHING (VDTP)',
      'VOCATIONAL DIPLOMA IN GENERAL DUTY ASSISTANT (VDGA)',
      'DIPLOMA IN OPTOMETRY', 'DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY',
    ],
    sliderItems: [
      { name: 'Hardware Servicing (VDHS)', color: 'blue' },
      { name: 'Computer Applications (VDCA)', color: 'green' },
      { name: 'Beautician (VDIB)', color: 'blue' },
      { name: 'Desktop Publishing (VDTP)', color: 'green' },
      { name: 'General Duty Assistant (VDGA)', color: 'blue' },
      { name: 'Diploma in Optometry', color: 'green' },
      { name: 'Medical Lab Technology', color: 'blue' },
    ]
  }
];

// --- THEME UTILS ---
export const getThemeStyles = (theme: ThemeColor) => {
  switch (theme) {
    case 'red':
      return {
        gradient: 'bg-gradient-to-br from-red-700 via-red-600 to-red-800',
        solid: 'bg-red-950',
        subtle: 'bg-red-300',
        textHighlight: 'text-red-600',
        shadow: 'shadow-[0_20px_50px_-12px_rgba(185,28,28,0.5)]',
        bgAmbient: 'bg-red-200/40',
        pagination: 'bg-red-600',
        paginationInactive: 'bg-gray-300'
      };
    case 'blue':
    default:
      return {
        gradient: 'bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-950',
        solid: 'bg-blue-950',
        subtle: 'bg-blue-300',
        textHighlight: 'text-blue-600',
        shadow: 'shadow-[0_20px_50px_-12px_rgba(30,58,138,0.5)]',
        bgAmbient: 'bg-blue-200/40',
        pagination: 'bg-blue-600',
        paginationInactive: 'bg-gray-300'
      };
  }
};