import React from "react";
import { BsMusicPlayer } from "react-icons/bs";

const EventTypeStatistic = ({ icon, eventType, count }) => {
  return (
    <div className="relative text-white text-center">
      <div>
        <div className="text-9xl text-gray-500">{icon}</div>
        <p className="text-3xl font-bold absolute top-1/3 left-1/2 -translate-x-1/2">
          {count}
        </p>
      </div>
      <p className="text-xl font-semibold mt-3">{eventType}</p>
    </div>
  );
};

export default EventTypeStatistic;
