import React, { useEffect } from "react";

//Packages
import { useDispatch, useSelector } from "react-redux";

//Components
import Header from "../../Layouts/Header";
import FeaturedEvents from "../../Layouts/FeaturedEvents";
import FullWidthBgContent from "../../Components/FullWidthBgContent";
import LatestNews from "../../Layouts/LatestNews";
import Footer from "../../Layouts/Footer";
import PopularEvents from "../../Layouts/PopularEvents";
import WhyChooseUs from "../../Layouts/WhyChooseUs";

//Redux
import { fetchEvents } from "../../Redux/Services/EventService";
import { getAllEvents } from "../../Redux/Slices/EventSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const events = useSelector(getAllEvents);

  console.log(events);

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
