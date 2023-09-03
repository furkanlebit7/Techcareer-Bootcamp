import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import LocationCardSlider from "./LocationCardSlider";
moment.locale("tr");

const LocationCard = ({ location }) => {
  return (
    <Link className="border border-gray-300 dark:border-gray-600 rounded-md relative group transition-all  hover:bg-white hover:dark:bg-darkContent shadow-sm">
      <div className="h-[25vh] rounded-md relative">
        <LocationCardSlider location={location} />
      </div>
      <div className="p-4 font-poppins text-center relative ">
        <h2 className="font-medium mt-5">{location.locationName}</h2>

        <p className="my-10 text-gray-500 text-sm">{location.address}</p>
      </div>
    </Link>
  );
};

export default LocationCard;
