import React from "react";

const EventTypeStatistic = ({ icon, eventType, count }) => {
  return (
    <div className="relative text-white text-center">
      <div>
        <div className="text-6xl md:text-9xl text-gray-500">{icon}</div>
        <p className=" text-md md:text-3xl font-bold absolute top-1/3 left-1/2 -translate-x-1/2">
          {count}
        </p>
      </div>
      <p className="text-xs md:text-xl font-semibold mt-3">{eventType}</p>
    </div>
  );
};

export default EventTypeStatistic;
