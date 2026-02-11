import { GraduationCap, ChevronLeft, ChevronRight, Sparkles, Scroll, BookOpen } from 'lucide-react';


// --- ASSETS & CONFIG ---
export const CAPS = {
  green: "./images/greencap.png",
  blue: "./images/bluecap.png",
  red: "./images/redcap.png", // Added just in case, though not used in original
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
      { label: 'B.B.A. BUSINESS ADMINISTRATION', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-b-a/' },
      { label: 'B.C.A. COMPUTER APPLICATIONS', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-c-a-computer-applications/' },
      { label: 'B.COM ACCOUNTING & FINANCE', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-com-accounting-finance/' },
      { label: 'B.COM BANK MANAGEMENT', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-com-bank-management/' },
      { label: 'B.COM COMPUTER APPLICATION', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-com-computer-application/' },
      { label: 'B.COM CORPORATE SECRETARYSHIP', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-com-corporate-secretaryship' },
      { label: 'B.COM GENERAL', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-com-general/' },
      { label: 'B.S.W SOCIAL WORK', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/bsw-social-work' },

      // B.Sc – Alphabetical
      { label: 'B.SC CS [ ARTIFICIAL INTELLIGENCE ]', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-computer-science-with-artificial-intelligence/' },
      { label: 'B.SC BIOTECHNOLOGY', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-biotechnology/' },
      { label: 'B.SC COMPUTER SCIENCE', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-computer-science/' },
      { label: 'B.SC CS [ DATA SCIENCE ]', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-computer-science-with-data-science/' },
      { label: 'B.SC MICROBIOLOGY', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-microbiology/' },
      { label: 'B.SC PSYCHOLOGY', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-psychology/' },
      { label: 'B.SC VISUAL COMMUNICATION', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-visual-communication/' },
    ],
    sliderItems: [
      { name: 'B.B.A. Business Administration', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-b-a/' },
      { name: 'B.C.A. Computer Applications', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-c-a-computer-applications/' },

      { name: 'B.Sc Artificial Intelligence', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-computer-science-with-artificial-intelligence/' },
      { name: 'B.Sc Biotechnology', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-biotechnology/' },
      { name: 'B.Sc Computer Science', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-computer-science/' },
      { name: 'B.Sc Data Science', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-computer-science-with-data-science/' },
      { name: 'B.Sc Microbiology', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-microbiology/' },
      { name: 'B.Sc Psychology', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-psychology/' },
      { name: 'B.Sc Visual Communication', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/undergraduate-courses/b-sc-visual-communication/' },
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
      // MBA & MCA on top
      { label: 'MBA', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/mba/' },
      { label: 'MCA', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/mca/' },

      { label: 'M.COM GENERAL', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-com/' },
      { label: 'M.S.W SOCIAL WORK', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/msw/msw-social-work' },
      { label: 'M.SC APPLIED MICROBIOLOGY', link: '#' },
      { label: 'M.SC BIOTECHNOLOGY', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-biotechnology/' },
      { label: 'M.SC COMPUTER SCIENCE', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-computer-science/' },
      { label: 'M.SC INFORMATION TECHNOLOGY', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-information-technology/' },
      { label: 'M.SC VISUAL COMMUNICATION', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-visual-communication/' },
    ],
    sliderItems: [
      { name: 'MBA', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/mba/' },
      { name: 'MCA', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/mca/' },
      { name: 'M.Com General', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-com/' },
      { name: 'M.S.W Social Work', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/msw/msw-social-work' },
      { name: 'M.Sc Biotechnology', color: 'green', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-biotechnology/' },
      { name: 'M.Sc Computer Science', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-computer-science/' },
      { name: 'M.Sc Information Technology', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-information-technology/' },
      { name: 'M.Sc Visual Communication', color: 'blue', link: 'https://hcaschennai.edu.in/academics/programmes/postgraduate-courses/m-sc-visual-communication/' },
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
      { label: 'PH.D BIOTECHNOLOGY', link: '#' },
      { label: 'PH.D COMMERCE', link: '#' },
      { label: 'PH.D MICROBIOLOGY', link: '#' },
    ],
    sliderItems: [
      { name: 'Ph.D Biotechnology', color: 'blue', link: '#' },
      { name: 'Ph.D Commerce', color: 'blue', link: '#' },
      { name: 'Ph.D Microbiology', color: 'green', link: '#' },
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