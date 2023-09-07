import React, { useEffect, useState } from "react";

//Packages
import { useSelector } from "react-redux";
import moment from "moment";

//Components
import Navbar from "../../Components/Navbar";
import Footer from "../../Layouts/Footer";
import EventCard from "../../Components/EventCard";
import EventSearch from "../../Components/EventSearch";
import EventFilter from "../../Components/EventFilter";
import Loading from "../../Components/Loading";
import EventNotFound from "../../Components/EventNotFound";

//Redux
import { getAllEvents } from "../../Redux/Slices/EventSlice";

//Locals
import "moment/locale/tr"; // without this line it didn't work
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="mb-16">
        <div className="bg-[url('https://images6.alphacoders.com/303/303014.jpg')] h-[45vh]  bg-cover bg-bottom ">
          <div className="bg-black bg-opacity-20 h-full text-black dark:text-white text-center ">
            <div className="flex flex-col items-center h-full">
              <Navbar
                scrolled={scrolled}
                setScrolled={setScrolled}
                white={true}
              />
              <div
                className={`${
                  scrolled ? "mt-26" : "mt-10"
                } text-white  font-poppins container  mx-auto px-2 sm:px-5 text-center`}
              >
                <h1 className=" text-3xl md:text-5xl lg:text-7xl xl:text7xl xl:text-9xl text-white uppercase font-semibold  mb-5">
                  EVENTS
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
          {events.status === "loading" && <Loading />}
          {filteredEvents.length === 0 && (
            <EventNotFound
              text={"This type of event does not exist recently"}
            />
          )}

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
