
import { programsData } from './academicData';

export const enquiryData = {
  sidebar: {
    title: "Admission Enquiry",
    description: "Prospective students are requested to fill out the enquiry form with accurate details. Our admission team will review the information and contact you with further guidance regarding the admission process."
  },
  form: {
    title: "Admission Page",
    fields: {
      name: "Your Name",
      email: "Your Email",
      mobile: "Your Mobile",
      location: "Location",
      course: "Select Course"
    },
    submitBtn: "Submit Enquiry"
  },
  bottomLink: {
    text: "Apply Now",
    url: "/application" // Placeholder, user can update
  }
};

export const getCourseList = () => {
  // Extract all courses from the static lists in academicData
  // You might want to remove duplicates if any, though the current data seems unique enough.
  const courses = programsData.flatMap(section => section.staticList.map(item => item.label));
  return Array.from(new Set(courses)).sort(); // Remove duplicates and sort alphabetically
};
