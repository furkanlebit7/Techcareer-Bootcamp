import React from "react";
import Header from "../../Layouts/Header";
import FeaturedEvents from "../../Layouts/FeaturedEvents";
import FullWidthBgContent from "../../Components/FullWidthBgContent";
import LatestNews from "../../Layouts/LatestNews";
import Footer from "../../Layouts/Footer";
import PopularEvents from "../../Layouts/PopularEvents";

const HomePage = () => {
  return (
    <div className="bg-whiteMain dark:bg-darkMain pb-96">
      <Header />
      <FeaturedEvents />
      <FullWidthBgContent />
      <LatestNews />
      <PopularEvents />
      <Footer />
    </div>
  );
};

export default HomePage;
