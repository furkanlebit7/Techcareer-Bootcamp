import React from "react";
import { BiSolidChevronRightCircle } from "react-icons/bi";

const AllEventsButton = () => {
  return (
    <div className="flex items-center justify-center mt-16 ">
      <div className="group">
        <button className="flex items-center border  p-2 px-4 rounded-full border-gray-300 gap-4   transition-all group-hover:bg-pinky group-hover:text-white">
          <BiSolidChevronRightCircle className="text-pinky group-hover:text-white" />
          <span className="font-medium">All Events</span>
        </button>
      </div>
    </div>
  );
};

export default AllEventsButton;
