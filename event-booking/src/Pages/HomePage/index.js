import React from "react";
import Header from "../../Layouts/Header";
import FeaturedEvents from "../../Layouts/FeaturedEvents";
import FullWidthBgContent from "../../Components/FullWidthBgContent";

const HomePage = () => {
  return (
    <div className="bg-whiteMain dark:bg-darkMain pb-96">
      <Header />
      <FeaturedEvents />
      <FullWidthBgContent />
    </div>
  );
};

export default HomePage;
