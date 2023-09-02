import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "moment/locale/tr"; // without this line it didn't work
import { getAllEvents } from "../../Redux/Slices/EventSlice";
import { useSelector } from "react-redux";
import Footer from "../../Layouts/Footer";
import EventCard from "../../Components/EventCard";
import EventFilter from "../../Components/EventFilter";
import { BsChevronDoubleDown } from "react-icons/bs";
const Events = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [eventTypes, setEventTypes] = useState([]); // ["Konser", "Spor", "Tiyatro"
  const events = useSelector(getAllEvents);

  const filteredEvents = events.data.filter((event) => {
    return event.eventName.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filteredEvents);

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
          <EventFilter search={search} setSearch={setSearch} />
          <div className="mb-10 mt-3">
            <button
              className="flex items-center w-full animate-bounce justify-center"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <BsChevronDoubleDown />
            </button>
            <div className={isOpen ? "grid grid-cols-3 my-5 gap-5 " : "hidden"}>
              <div className="dark:bg-darkContent dark:border-gray-7000 bg-white border p-2 px-3 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Konser
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Tiyatro
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sergi
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Festival
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Diğer
                  </label>
                </div>
              </div>
              <div className="dark:bg-darkContent dark:border-gray-7000 bg-white border p-2 px-3 rounded-md flex items-center justify-between">
                <input
                  type="date"
                  className="p-0 bg-transparent w-full border-none focus:outline-none focus:ring-0"
                />
                <span className="mx-10">to</span>
                <input
                  type="date"
                  className="p-0 bg-transparent w-full border-none focus:outline-none focus:ring-0"
                />
              </div>
              <div className="dark:bg-darkContent dark:border-gray-7000 bg-white border p-2 px-3 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radi"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Hepsi
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Gelecek
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Geçmiş
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-8">
            {filteredEvents.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
