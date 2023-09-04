import React from "react";

//Packages
import moment from "moment";
import { Link } from "react-router-dom";

//Icons
import { SlLocationPin } from "react-icons/sl";

//Locals
import "moment/locale/tr"; // without this line it didn't work
moment.locale("tr");

const HeaderSliderCard = ({ event }) => {
  return (
    <Link
      to={`event/${event.eventUrl}`}
      className="bg-white dark:bg-darkContent dark:text-white text-black rounded-md backdrop-blur-md cursor-pointer border dark:border-gray-600 min-h-[600px] flex flex-col justify-between flex-1 self-stretch"
    >
      <div className="relative h-52">
        <img
          src={event.eventSmallPicture}
          className="rounded-t-md w-full h-full "
          alt="Event"
        />

        <div className="absolute -bottom-10 left-5 bg-pinky rounded-full w-18 h-18 text-center text-sm flex items-center justify-center flex-col text-white">
          <p className="font-bold">
            {moment(event.eventStartDate).format("ll").split(" ")[1]}
          </p>
          <p className="text-xs font-semibold">
            {moment(event.eventStartDate).format("ll").split(" ")[0].length == 1
              ? "0" +
                moment(event.eventStartDate).format("ll").split(" ")[0] +
                "-" +
                moment(event.eventStartDate).format("ll").split(" ")[2]
              : moment(event.eventStartDate).format("ll").split(" ")[0] +
                "-" +
                moment(event.eventStartDate).format("ll").split(" ")[2]}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 flex-1 mt-10">
        <p className="font-semibold text-lg mb-5 ">{event.eventName}</p>
        <p className=" text-gray-500 flex-1 ">
          {event.eventShortDescription.slice(0, 200) + "..."}
        </p>
        <p className="flex items-center gap-3">
          <SlLocationPin className="text-blue-800" />
          {event.location?.locationName.slice(0, 25) + "..."}
        </p>
      </div>
      <div className="p-4  flex items-center justify-between font-semibold hover:text-pinky transition-all border-t dark:border-gray-600">
        <p className="">Get Ticket</p>
        <p className="text-pinky ">
          {event.eventPrice ? event.eventPrice : "Ücretsiz"}
        </p>
      </div>
    </Link>
  );
};

export default HeaderSliderCard;
