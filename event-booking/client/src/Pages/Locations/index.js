import React, { useState } from "react";

//Packages
import { useSelector } from "react-redux";
import moment from "moment";

//Components
import Navbar from "../../Components/Navbar";
import Footer from "../../Layouts/Footer";
import EventSearch from "../../Components/EventSearch";
import LocationCard from "../../Components/LocationCard";
import LocationFilter from "../../Components/LocationFilter.js";
import Loading from "../../Components/Loading";
import EventNotFound from "../../Components/EventNotFound";

//Redux
import { getAllLocations } from "../../Redux/Slices/LocationSlice";

//Locals
import "moment/locale/tr"; // without this line it didn't work
moment.locale("tr");

const Locations = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const locations = useSelector(getAllLocations);

  const checkCity = (location) => {
    if (city === "") {
      return true;
    } else {
      return location.city === city;
    }
  };
  const checkState = (location) => {
    if (state === "") {
      return true;
    } else {
      return location.state === state;
    }
  };

  const filteredLocations = locations.data.filter((location) => {
    return (
      location.locationName.toLowerCase().includes(search.toLowerCase()) &&
      checkCity(location) &&
      checkState(location)
    );
  });

  return (
    <div>
      <div className="mb-16">
        <div className="bg-[url('https://images4.alphacoders.com/688/688446.jpg')] h-[45vh]  bg-cover bg-center ">
          <div className="bg-black  bg-opacity-20 h-full text-black dark:text-white text-center ">
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
                  LOCATIONS
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 transition-all duration-1000">
          <EventSearch search={search} setSearch={setSearch} />
          <LocationFilter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            locations={locations}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
          />
          {locations.status === "loading" && <Loading />}
          {filteredLocations.length === 0 && (
            <EventNotFound text={"Event location was not found"} />
          )}
          <div className="grid px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-8">
            {filteredLocations.map((location) => (
              <LocationCard location={location} key={location.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Locations;
