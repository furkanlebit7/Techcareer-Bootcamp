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

const Event = () => {
  const dispatch = useDispatch();
  const { eventUrl } = useParams();

  const [scrolled, setScrolled] = useState(false);

  const event = useSelector(getEventByUrl);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchEventByUrl(eventUrl));
  }, []);

  return (
    <div>
      <div className="mb-16">
        <div className="bg-[url('https://www.headlinesecurity.com/wp-content/uploads/2016/04/metallicaconcertbanner-1.jpg')] h-[45vh]  bg-cover  ">
          <div className="bg-black bg-opacity-70 h-full text-black dark:text-white text-center">
            <div className="flex flex-col items-center h-full">
              <Navbar
                scrolled={scrolled}
                setScrolled={setScrolled}
                white={true}
              />
              <div
                className={`${
                  scrolled ? "mt-26" : "mt-10"
                } text-white  font-poppins container 2xl:w-3/4 mr-auto px-2 sm:px-5 xl:mx-auto text-start`}
              >
                <h1 className=" text-3xl md:text-5xl lg:text-6xl uppercase font-semibold  mb-5">
                  {event.data.eventName}
                </h1>

                {event && event.data && event.data.eventType && (
                  <BreadCrumb
                    eventType={event.data.eventType.name}
                    eventName={event.data.eventName}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="xl:container px-2 sm:px-5 flex flex-col lg:flex-row mx-auto w-full 2xl:w-3/4 -mt-28 gap-10 xl:gap-20">
          <div className="w-full lg:w-8/12 flex flex-col gap-10">
            <EventGeneral event={event} />
            <EventDetailTabs event={event} />
          </div>
          <div className="w-full lg:w-4/12 2xl:px-2 flex flex-col gap-20">
            <button className="bg-pinky hover:bg-pink-700 w-full p-6 rounded-md text-base sm:text-lg md:text-xl  text-white">
              ŞİMDİ BİLET AL
            </button>
            {event && event.data && event.data.location && (
              <EventDetail event={event} />
            )}
            <Organizers />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
