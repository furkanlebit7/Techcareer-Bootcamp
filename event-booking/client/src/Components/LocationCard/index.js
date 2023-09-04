import React from "react";

//Packages
import { Link } from "react-router-dom";
import moment from "moment";

//Components
import LocationCardSlider from "./LocationCardSlider";

//Icons
import { FaLocationDot } from "react-icons/fa6";

//Locals
moment.locale("tr");

const LocationCard = ({ location }) => {
  return (
    <Link
      to={`../location/${location.id}`}
      className="border border-gray-300 dark:border-gray-600 rounded-md relative group transition-all overflow-hidden  hover:bg-gray-200 hover:dark:bg-darkContent shadow-sm group"
    >
      <div className="h-[25vh] rounded-md relative">
        <LocationCardSlider location={location} />
        <div className="absolute z-10 top-0 left-0 h-[25vh] w-full hidden group-hover:flex flex-col items-center justify-center text-white bg-black bg-opacity-70">
          <FaLocationDot className="text-white" />
          <h2 className="font-medium">
            <p className="my-3 ">{location.state + " / " + location.city}</p>
          </h2>
        </div>
      </div>
      <div className="p-4 font-poppins text-center relative ">
        <h2 className="font-medium">{location.locationName}</h2>

        <p className="my-10 text-gray-500 text-sm">{location.address}</p>
      </div>
    </Link>
  );
};

export default LocationCard;
