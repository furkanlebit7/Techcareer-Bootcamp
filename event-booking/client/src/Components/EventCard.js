import React from "react";

//Packages
import { Link } from "react-router-dom";
import moment from "moment";

//Locals
moment.locale("tr");

const EventCard = ({ event }) => {
  return (
    <Link
      className="border border-gray-300 dark:border-gray-600 rounded-md relative group transition-all  hover:bg-white hover:dark:bg-darkContent shadow-sm"
      to={`../event/${event.eventUrl}`}
    >
      <div className="h-[25vh] rounded-md relative">
        <img
          src={event.eventSmallPicture}
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="p-4 font-poppins text-center relative ">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-pinky rounded-full group-hover:bg-indigo-700 w-20 h-20 text-center text-sm flex items-center justify-center flex-col text-white">
          <div className="text-center items-center justify-center flex-col group-hover:hidden">
            <p className="font-bold">
              {moment(event.eventStartDate).format("ll").split(" ")[1]}
            </p>
            <p className="text-xs font-medium">
              {moment(event.eventStartDate).format("ll").split(" ")[0]
                .length === 1
                ? "0" +
                  moment(event.eventStartDate).format("ll").split(" ")[0] +
                  "-" +
                  moment(event.eventStartDate).format("ll").split(" ")[2]
                : moment(event.eventStartDate).format("ll").split(" ")[0] +
                  "-" +
                  moment(event.eventStartDate).format("ll").split(" ")[2]}
            </p>
          </div>
          <div className="hidden group-hover:block ">
            <p className="text-xs font-medium">
              {event.eventPrice === 0
                ? event.eventPrice + "₺"
                : event.eventPrice}
            </p>
          </div>
        </div>
        <h2 className="font-medium mt-10">{event.eventName}</h2>
        {moment(event.eventEndDate).isAfter(
          moment().format("YYYY-MM-DD"),
          "h:mma"
        ) && (
          <p className="my-5 text-blue-500 dark:text-blue-400 text-sm">
            Yakında
          </p>
        )}
        {moment(event.eventEndDate).isBefore(
          moment().format("YYYY-MM-DD"),
          "h:mma"
        ) && (
          <p className="my-5 text-red-500 dark:text-red-400 text-sm">Geçmiş</p>
        )}

        <p className="my-10 text-gray-500 text-sm">
          {event.eventShortDescription.slice(0, 75) + "..."}
        </p>
      </div>
      <button className="absolute -bottom-5 rounded-full dark:bg-darkMain bg-whiteMain group-hover:border group-hover:border-blue-500 group-hover:dark:border-blue-400 p-3 px-10 font-medium left-1/2 -translate-x-1/2 transition-all  hover:text-pinky">
        Bilet Al
      </button>
    </Link>
  );
};

export default EventCard;
