import { GraduationCap, ChevronLeft, ChevronRight, Sparkles, Scroll, BookOpen } from 'lucide-react';


// --- ASSETS & CONFIG ---
export const CAPS = {
  green: "/images/greencap.png",
  blue: "/images/bluecap.png",
  red: "/images/redcap.png", // Added just in case, though not used in original
};

// --- TYPES ---
type ThemeColor = 'red' | 'blue';
type LayoutType = 'static-left' | 'static-right';

interface ProgramItem {
  name: string;
  color: 'green' | 'blue';
  link: string;
}

interface StaticItem {
  label: string;
  link: string;
}

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  theme: ThemeColor;
  layout: LayoutType;
  icon: React.ElementType;
  bgImage?: string;
  staticList: StaticItem[];
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
      { label: 'B.B.A. BUSINESS ADMINISTRATION', link: '#' },
      { label: 'B.C.A. COMPUTER APPLICATIONS', link: '#' },
      { label: 'B.COM ACCOUNTING & FINANCE', link: '#' },
      { label: 'B.COM BANK MANAGEMENT', link: '#' },
      { label: 'B.COM COMPUTER APPLICATION', link: '#' },
      { label: 'B.COM CORPORATE SECRETARYSHIP', link: '#' },
      { label: 'B.COM GENERAL', link: '#' },
      { label: 'B.S.W SOCIAL WORK', link: '#' },
      { label: 'B.SC BIOTECHNOLOGY', link: '#' },
      { label: 'B.SC COMPUTER SCIENCE', link: '#' },
      { label: 'B.SC CS [ ARTIFICIAL INTELLIGENCE ]', link: '#' },
      { label: 'B.SC CS [ DATA SCIENCE ]', link: '#' },
      { label: 'B.SC MICROBIOLOGY', link: '#' },
      { label: 'B.SC PSYCHOLOGY', link: '#' },
      { label: 'B.SC VISUAL COMMUNICATION', link: '#' },
    ],
    sliderItems: [
      { name: 'B.Sc Biotechnology', color: 'blue', link: '#' },
      { name: 'B.Sc Visual Communication', color: 'green', link: '#' },
      { name: 'B.Sc Computer Science', color: 'blue', link: '#' },
      { name: 'B.Sc Microbiology', color: 'green', link: '#' },
      { name: 'B.B.A. Business Administration', color: 'blue', link: '#' },
      { name: 'B.C.A. Computer Applications', color: 'green', link: '#' },
      { name: 'B.Com Bank Management', color: 'blue', link: '#' },
      { name: 'B.Sc Artificial Intelligence', color: 'green', link: '#' },
      { name: 'B.Com Corporate Secretaryship', color: 'blue', link: '#' },
      { name: 'B.Sc Data Science', color: 'green', link: '#' },
      { name: 'B.Sc Psychology', color: 'green', link: '#' },
    ]
  },
  {
    id: 'postgraduate',
    title: 'Post Graduate',
    subtitle: 'Master Your Skills',
    theme: 'blue',
    layout: 'static-right',
    icon: Sparkles,
    bgImage: 'images/pg-text.png',
    staticList: [
      { label: 'MBA', link: '#' },
      { label: 'MCA', link: '#' },
      { label: 'M.COM GENERAL', link: '#' },
      { label: 'M.S.W SOCIAL WORK', link: '#' },
      { label: 'M.SC APPLIED MICROBIOLOGY', link: '#' },
      { label: 'M.SC BIOTECHNOLOGY', link: '#' },
      { label: 'M.SC COMPUTER SCIENCE', link: '#' },
      { label: 'M.SC INFORMATION TECHNOLOGY', link: '#' },
      { label: 'M.SC VISUAL COMMUNICATION', link: '#' },
    ],
    sliderItems: [
      { name: 'MBA', color: 'green', link: '#' },
      { name: 'MCA', color: 'blue', link: '#' },
      { name: 'M.Sc Information Technology', color: 'blue', link: '#' },
      { name: 'M.Sc Applied Microbiology', color: 'green', link: '#' },
      { name: 'M.Sc Visual Communication', color: 'blue', link: '#' },
      { name: 'M.Sc Biotechnology', color: 'green', link: '#' },
      { name: 'M.Sc Computer Science', color: 'blue', link: '#' },
      { name: 'M.S.W Social Work', color: 'green', link: '#' },
      { name: 'M.Com General', color: 'blue', link: '#' },
    ]
  },
  {
    id: 'research',
    title: 'Research',
    subtitle: 'Doctoral Programmes',
    theme: 'blue',
    layout: 'static-left',
    icon: Scroll,
    bgImage: '/images/sclor.jpg',
    staticList: [
      { label: 'PH.D BIOTECHNOLOGY', link: '#' },
      { label: 'PH.D COMMERCE', link: '#' },
      { label: 'PH.D MICROBIOLOGY', link: '#' },
    ],
    sliderItems: [
      { name: 'Ph.D Biotechnology', color: 'blue', link: '#' },
      { name: 'Ph.D Microbiology', color: 'green', link: '#' },
      { name: 'Ph.D Commerce', color: 'blue', link: '#' },
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
      { label: 'VOCATIONAL DIPLOMA IN COMPUTER HARDWARE SERVICING (VDHS)', link: '#' },
      { label: 'VOCATIONAL DIPLOMA IN COMPUTER APPLICATIONS (VDCA)', link: '#' },
      { label: 'VOCATIONAL DIPLOMA IN BEAUTICIAN (VDIB)', link: '#' },
      { label: 'VOCATIONAL DIPLOMA IN DESKTOP PUBLISHING (VDTP)', link: '#' },
      { label: 'VOCATIONAL DIPLOMA IN GENERAL DUTY ASSISTANT (VDGA)', link: '#' },
      { label: 'DIPLOMA IN OPTOMETRY', link: '#' },
      { label: 'DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY', link: '#' },
    ],
    sliderItems: [
      { name: 'Hardware Servicing (VDHS)', color: 'blue', link: '#' },
      { name: 'Computer Applications (VDCA)', color: 'green', link: '#' },
      { name: 'Beautician (VDIB)', color: 'blue', link: '#' },
      { name: 'Desktop Publishing (VDTP)', color: 'green', link: '#' },
      { name: 'General Duty Assistant (VDGA)', color: 'blue', link: '#' },
      { name: 'Diploma in Optometry', color: 'green', link: '#' },
      { name: 'Medical Lab Technology', color: 'blue', link: '#' },
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