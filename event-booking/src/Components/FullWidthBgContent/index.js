import React from "react";

import EventTypeStatistic from "./EventTypeStatistic";
//ICONS
import { BsMusicPlayer } from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";

const FullWidthBgContent = () => {
  return (
    <div className="w-full bg-fullWidth-bg h-96 bg-fixed bg-no-repeat">
      <div className="w-full h-full bg-black bg-opacity-70 flex items-center">
        <div className="flex items-center justify-evenly container mx-auto">
          <EventTypeStatistic
            icon={<BsMusicPlayer />}
            eventType={"CONCERT"}
            count={"2464"}
          />
          <EventTypeStatistic
            icon={<FaTheaterMasks />}
            eventType={"THEATER"}
            count={"643"}
          />
          <EventTypeStatistic
            icon={<GiTheater />}
            eventType={"CINEMA"}
            count={"321"}
          />
          <EventTypeStatistic
            icon={<MdOutlineFestival />}
            eventType={"FESTIVAL"}
            count={"3"}
          />
        </div>
      </div>
    </div>
  );
};

export default FullWidthBgContent;
