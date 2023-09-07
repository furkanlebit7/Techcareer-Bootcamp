import React, { useEffect, useState } from "react";

//Packages
import { useSelector } from "react-redux";

//Components
import EventTypeStatistic from "./EventTypeStatistic";

//Redux
import { getEventTypes } from "../../Redux/Slices/EventSlice";

//Icons
import { BsMusicPlayer } from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";
import { ImTicket } from "react-icons/im";

const FullWidthBgContent = () => {
  const { data } = useSelector(getEventTypes);

  return (
    <div className="w-full bg-fullWidth-bg h-96 bg-fixed bg-no-repeat">
      <div className="w-full h-full bg-black bg-opacity-70 flex items-center">
        <div className="grid grid-cols-2 md:flex place-items-center gap-6 items-center justify-evenly container mx-auto">
          <EventTypeStatistic
            icon={<BsMusicPlayer />}
            eventType={"CONCERT"}
            count={data[0]?.events?.length}
          />
          <EventTypeStatistic
            icon={<FaTheaterMasks />}
            eventType={"THEATRE"}
            count={data[1]?.events?.length}
          />
          <EventTypeStatistic
            icon={<GiTheater />}
            eventType={"EXHIBITION"}
            count={data[2]?.events?.length}
          />
          <EventTypeStatistic
            icon={<MdOutlineFestival />}
            eventType={"FESTIVAL"}
            count={data[3]?.events?.length}
          />
          <EventTypeStatistic
            icon={<ImTicket />}
            eventType={"OTHERS"}
            count={data[4]?.events?.length}
          />
        </div>
      </div>
    </div>
  );
};

export default FullWidthBgContent;
