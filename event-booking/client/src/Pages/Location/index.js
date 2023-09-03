import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocationById } from "../../Redux/Slices/LocationSlice";
import { fetchLocationById } from "../../Redux/Services/LocationService";
import Navbar from "../../Components/Navbar";
import Footer from "../../Layouts/Footer";
import LocationGeneral from "../../Components/LocationDetail/LocationGeneral";
import LocationDetail from "../../Components/LocationDetail/LocationDetail";
import LocationEvents from "../../Components/LocationEvents";
import EventNotFound from "../../Components/EventNotFound";
const Location = () => {
  const dispatch = useDispatch();
  const { locationId } = useParams();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchLocationById(locationId));
  }, []);

  const location = useSelector(getLocationById);

  return (
    <div>
      <div className="mb-16">
        <div className="bg-[url('https://images4.alphacoders.com/688/688446.jpg')] bg-center h-[45vh]  bg-cover  ">
          <div className="bg-black bg-opacity-70 h-full text-black dark:text-white text-center ">
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
                  {location.data.locationName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:container px-2 sm:px-5 flex flex-col lg:flex-row mx-auto w-full 2xl:w-3/4 -mt-28 gap-10 xl:gap-20">
          <div className="w-full lg:w-8/12 flex flex-col gap-10">
            <LocationGeneral location={location} />
            {location && location.data && location.data.events && (
              <LocationEvents location={location} />
            )}
          </div>
          <div className="w-full lg:w-4/12 2xl:px-2 flex flex-col gap-20">
            <LocationDetail location={location} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
