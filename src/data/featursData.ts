import {
  CheckCircle2,
  Play,
  Award,
  ShieldCheck,
  Star,
  GraduationCap,
  Trophy,
  Users,
  Briefcase,
  Leaf,
} from "lucide-react";

// --- TYPES ---
export interface LogoItem {
  name: string;
  src: string;
  alt: string;
}

// --- DATA: ACCREDITATIONS ---
export const LOGOS: LogoItem[] = [
  {
    name: "India Today Ranking",
    // Matches the file named 'download' which is the India Today logo
    src: "./hcas-images/partners/download.jpeg",
    alt: "India Today Ranking",
  },
  {
    name: "ISO Certified",
    // Matches the file named 'download-8' which is the ISO logo
    src: "./hcas-images/partners/download-8.png",
    alt: "ISO 9001:2015 Certified",
  },
  {
    name: "NAAC",
    // Matches the file named 'images' which is the NAAC logo
    src: "./hcas-images/partners./images.jpeg",
    alt: "NAAC Accreditation",
  },
  {
    name: "ABET",
    // Matches the file named 'abet-1'
    src: "./hcas-images/partners/abet-1.png",
    alt: "ABET Computing Accreditation",
  },
  {
    name: "ICAR",
    // Matches the file named 'ICAR-accreditation'
    src: "./hcas-images/partners/ICAR-accreditation.png",
    alt: "ICAR Accreditation",
  },
  {
    name: "Times Now",
    // Matches the file named 'Times_Now_2010'
    src: "./hcas-images/partners/Times_Now_2010.png",
    alt: "Times Now Recognition",
  },
];
// --- DATA: FEATURES ---
export const FEATURES = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Affiliated to University of Madras & Reaccredited by NAAC with 'A' Grade.",
  },
  {
    icon: Trophy,
    title: "University Ranks",
    description:
      "Consistent academic top performers and gold medalists year after year.",
  },
  {
    icon: Leaf,
    title: "Green Campus",
    description:
      "Beautiful lush environment overlooking the serene Muttukadu Lake.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Highly qualified professors with NET/SLET/Ph.D qualifications.",
  },
  {
    icon: Briefcase,
    title: "Career Placement",
    description:
      "Job-oriented add-on courses & dedicated placement support in every department.",
  },
  {
    icon: Star,
    title: "Scholarships",
    description:
      "Financial aid available for deserving students in academics & sports.",
  },
];