import AboutCollege from "@/components/about/AboutCollege";
import AdmissionEligibility from "@/components/about/AdmissionEligibility";
import { PlacementSection } from "@/components/about/PlacementSection";
import AcademicsPage from "@/components/home/Acadamic";
import {
  AccreditationSection,
  WhyHCASSection,
} from "@/components/home/AccreditationSection";
import RankingAccreditation from "@/components/home/RankingAccreditation";
import ScholarshipContactSection from "@/components/home/ScholarshipContactSection";
import Footer from "@/components/layout/Footer";
import React from "react";
import LoginPage from "./login/page";

export default function page() {
  return (
    <>
     <LoginPage />
      <AcademicsPage />
      <AdmissionEligibility />
      <AboutCollege />
      <ScholarshipContactSection />
      <AccreditationSection />
      <WhyHCASSection />
      <RankingAccreditation />
      <PlacementSection />
      <Footer />
    </>
  );
}
