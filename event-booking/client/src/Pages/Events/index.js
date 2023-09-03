import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "moment/locale/tr"; // without this line it didn't work
import { getAllEvents } from "../../Redux/Slices/EventSlice";
import { useSelector } from "react-redux";
import Footer from "../../Layouts/Footer";
import EventCard from "../../Components/EventCard";
import EventSearch from "../../Components/EventSearch";
import EventFilter from "../../Components/EventFilter";
import moment from "moment";

moment.locale("tr");

const Events = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [eventTypes, setEventTypes] = useState([1, 2, 3, 4, 5]);
  const [date, setDate] = useState({
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().add(1, "y").format("YYYY-MM-DD"),
  });
  const [eventStatus, setEventStatus] = useState("future");
  const events = useSelector(getAllEvents);

  const checkStatus = (event) => {
    const stat =
      moment(event.eventEndDate).isAfter(date.startDate, "day") &&
      moment(event.eventStartDate).isBefore(date.endDate, "day");

    return stat;
  };

  const checkTypes = (event) => {
    return eventTypes.includes(event.eventTypeId);
  };

  const filteredEvents = events.data.filter((event) => {
    return (
      event.eventName.toLowerCase().includes(search.toLowerCase()) &&
      checkStatus(event) &&
      checkTypes(event)
    );
  });

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
                <h1 className=" text-3xl md:text-5xl lg:text-7xl xl:text7xl xl:text-9xl text-black dark:text-white uppercase font-semibold  mb-5">
                  ETKİNLİKLER
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 transition-all duration-1000">
          <EventSearch search={search} setSearch={setSearch} />
          <EventFilter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setEventTypes={setEventTypes}
            eventTypes={eventTypes}
            eventStatus={eventStatus}
            setEventStatus={setEventStatus}
            date={date}
            setDate={setDate}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
          <div className="grid px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-8">
            {filteredEvents.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
