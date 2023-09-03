import React from "react";

//Packages
import { useSelector } from "react-redux";

//Components
import Header from "../../Layouts/Header";
import FeaturedEvents from "../../Layouts/FeaturedEvents";
import FullWidthBgContent from "../../Components/FullWidthBgContent";
import LatestNews from "../../Layouts/LatestNews";
import Footer from "../../Layouts/Footer";
import PopularEvents from "../../Layouts/PopularEvents";
import WhyChooseUs from "../../Layouts/WhyChooseUs";

//Redux
import { getAllEvents } from "../../Redux/Slices/EventSlice";

const HomePage = () => {
  const events = useSelector(getAllEvents);

  return (
    <div>
      <Header />
      <FeaturedEvents events={events} />
      <FullWidthBgContent />
      <LatestNews />
      <PopularEvents />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HomePage;
