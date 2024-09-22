import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Specialties from "./components/Specialties";
import TeamMembers from "./components/TeamMembers";
import PatientTestimonials from "./components/PatientTestimonials";
import FacilitiesGallery from "./components/FacilitiesGallery";
import Contact from "./components/ContactUs";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Specialties />
      <TeamMembers />
      <PatientTestimonials />
      <FacilitiesGallery />
      <Contact />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
