import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEventByUrl } from "../../Redux/Slices/EventSlice";
import { fetchEventByUrl } from "../../Redux/Services/EventService";
import BreadCrumb from "../../Components/BreadCrumb";
import EventDetailTabs from "../../Components/EventDetailTabs";
import Footer from "../../Layouts/Footer";
import EventGeneral from "../../Components/EventDetail/EventGeneral";
import EventDetail from "../../Components/EventDetail/EventDetail";
import Organizers from "../../Components/EventDetailTabs/Organizers";

const Events = () => {
  // const dispatch = useDispatch();
  // const { eventUrl } = useParams();

  const [scrolled, setScrolled] = useState(false);

  // const event = useSelector(getEventByUrl);

  // useEffect(() => {
  //   dispatch(fetchEventByUrl(eventUrl));
  // }, []);

  return (
    <div>
      <div className="mb-16">
        <div className="bg-[url('https://images6.alphacoders.com/303/303014.jpg')] h-[45vh]  bg-cover bg-bottom ">
          <div className="dark:bg-black bg-white bg-opacity-20 dark:bg-opacity-20 h-full text-black dark:text-white text-center ">
            <div className="flex flex-col items-center h-full">
              <Navbar scrolled={scrolled} setScrolled={setScrolled} />
              <div
                className={`${
                  scrolled ? "mt-26" : "mt-10"
                } text-white  font-poppins container  mx-auto px-2 sm:px-5 text-center`}
              >
                <h1 className=" text-3xl md:text-5xl lg:text-6xl uppercase font-semibold  mb-5">
                  ETKİNLİKLER
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
