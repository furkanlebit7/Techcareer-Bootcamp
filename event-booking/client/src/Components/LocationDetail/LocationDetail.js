import React from "react";

//Packages
import Map from "../EventDetail/Map";

//Icons
import { BiDetail } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";

const LocationDetail = ({ location }) => {
  return (
    <div className="bg-white dark:bg-darkContent p-6 rounded-md">
      <div className="flex items-center justify-between text-xl text-gray-600">
        <h3 className="font-medium font-poppins">LOCATION DETAILS</h3>
        <BiDetail className="text-gray-400" />
      </div>
      <div className="py-8 ">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between gap-5">
            <span className="text-sm font-medium ">Location</span>
            <span className="opacity-70 text-xs text-right">
              {location.data.locationName}
            </span>
          </li>
          <li className="flex items-center justify-between gap-5">
            <span className="text-sm font-medium ">City</span>
            <span className="opacity-70 text-xs text-right">
              {location.data.city}
            </span>
          </li>
          <li className="flex items-center justify-between gap-5">
            <span className="text-sm font-medium ">State</span>
            <span className="opacity-70 text-xs text-right">
              {location.data.state}
            </span>
          </li>
          <li className="flex items-center justify-between gap-5">
            <span className="text-sm font-medium ">Address</span>
            <span className="opacity-70 text-xs text-right">
              {location.data.address}
            </span>
          </li>

          <li>
            <span className="text-sm font-medium w-full ">Map:</span>
            <Map location={location.data} />
          </li>
          <li className="text-center hover:bg-pinky rounded-md">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${location.data.lat},${location.data.lng}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-md gap-3 font-semibold text-black hover:text-white  dark:text-white border  py-3"
            >
              <FaLocationArrow className="text-blue-800" />
              <span>DIRECTION</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationDetail;
