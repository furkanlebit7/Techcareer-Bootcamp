import React from "react";
import { SlLocationPin } from "react-icons/sl";

const HeaderSliderCard = ({ event }) => {
  return (
    <div className="bg-white dark:bg-darkContent dark:text-white text-black rounded-md backdrop-blur-md cursor-pointer border dark:border-gray-600">
      <div className="relative">
        <img
          src={event.eventSmallPicture}
          className="rounded-t-md w-full"
          alt="Event"
        />
        <div className="absolute -bottom-10 left-5 bg-pinky rounded-full w-18 h-18 text-center text-sm flex items-center justify-center flex-col text-white">
          <p className="font-bold">SEP</p>
          <p className="text-xs font-semibold">18-2024</p>
        </div>
      </div>
      <div>
        <div className="p-4 pt-16">
          <p className="font-semibold text-lg">{event.eventName}</p>
          <p className="my-6 text-gray-500">{event.eventShortDescription}</p>
          <p className="flex items-center gap-3">
            <SlLocationPin className="text-blue-800" />
            {event.location?.locationName}
          </p>
        </div>
        <div className="p-4 flex items-center justify-between font-semibold hover:text-pinky transition-all border-t dark:border-gray-600">
          <p className="">Get Ticket</p>
          <p className="text-pinky ">Free</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSliderCard;
