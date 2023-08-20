import React from "react";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";
import Map from "./Map";

const PageContent = () => {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Map />
    </div>
  );
};

export default PageContent;
