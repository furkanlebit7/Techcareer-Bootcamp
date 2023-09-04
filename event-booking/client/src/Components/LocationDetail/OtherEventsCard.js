import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
moment.locale("tr");

const OtherEventsCard = ({ event }) => {
  return (
    <Link
      className="border border-gray-300 dark:border-gray-600 rounded-md relative group transition-all  hover:bg-white hover:dark:bg-darkContent shadow-sm"
      to={`../event/${event.eventUrl}`}
    >
      <div className="h-[15vh] rounded-md relative">
        <img
          src={event.eventSmallPicture}
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="p-4 font-poppins text-center relative flex flex-col">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-pinky rounded-full group-hover:bg-indigo-700 w-16 h-16 text-center text-xs flex items-center justify-center flex-col text-white">
          <div className="text-center items-center justify-center flex-col group-hover:hidden">
            <p className="font-semibold">
              {moment(event.eventStartDate).format("ll").split(" ")[1]}
            </p>
            <p className="text-2xs font-medium">
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
            <p className="text-2xs font-medium">
              {event.eventPrice === 0
                ? event.eventPrice + "₺"
                : event.eventPrice}
            </p>
          </div>
        </div>
        <h2 className="font-medium mt-5 min-h-[5vh]">{event.eventName}</h2>
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

        <p className="mt-5 text-gray-500 text-sm flex-1 m-auto">
          {event.eventShortDescription.slice(0, 50) + "..."}
        </p>
      </div>
      <button className="absolute -bottom-4 rounded-full dark:bg-darkContent bg-white group-hover:border group-hover:border-blue-500 group-hover:dark:border-blue-400 p-1 px-5 text-sm font-medium left-1/2 -translate-x-1/2 transition-all  hover:text-pinky">
        Detaylar
      </button>
    </Link>
  );
};

export default OtherEventsCard;
