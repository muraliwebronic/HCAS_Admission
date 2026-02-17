
import React from "react";
import dynamic from "next/dynamic";

// Dynamic Imports
const LoginPage = dynamic(() => import("./login/page"));
const AcademicsPage = dynamic(() => import("@/components/home/Acadamic"));
const AdmissionEligibility = dynamic(() => import("@/components/about/AdmissionEligibility"));
const AboutCollege = dynamic(() => import("@/components/about/AboutCollege"));
const ScholarshipContactSection = dynamic(() => import("@/components/home/ScholarshipContactSection"));
const RankingAccreditation = dynamic(() => import("@/components/home/RankingAccreditation"));
const PlacementSection = dynamic(() => import("@/components/about/PlacementSection").then(mod => mod.PlacementSection));
const Footer = dynamic(() => import("@/components/layout/Footer"));

// Named exports from AccreditationSection
const AccreditationSection = dynamic(() => import("@/components/home/AccreditationSection").then(mod => mod.AccreditationSection));
const WhyHCASSection = dynamic(() => import("@/components/home/AccreditationSection").then(mod => mod.WhyHCASSection));


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
