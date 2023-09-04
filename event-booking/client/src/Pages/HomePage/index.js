import React, { useEffect } from "react";

//Packages
import { useDispatch, useSelector } from "react-redux";

//Components
import Header from "../../Layouts/Header";
import FeaturedEvents from "../../Layouts/FeaturedEvents";
import FullWidthBgContent from "../../Components/FullWidthBgContent";
import Footer from "../../Layouts/Footer";
import PopularEvents from "../../Layouts/PopularEvents";
import WhyChooseUs from "../../Layouts/WhyChooseUs";

//Redux
import { getAllEvents } from "../../Redux/Slices/EventSlice";
import { fetchEventTypes } from "../../Redux/Services/EventService";

const HomePage = () => {
  const dispatch = useDispatch();
  const events = useSelector(getAllEvents);

  useEffect(() => {
    dispatch(fetchEventTypes());
  }, []);

  return (
    <div>
      <Header />
      <FeaturedEvents events={events} />
      <FullWidthBgContent />
      {/* <LatestNews /> */}
      <PopularEvents />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HomePage;
