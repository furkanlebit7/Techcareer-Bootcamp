import React from "react";

//Packages
import { Link } from "react-router-dom";

//Icons
import { BiSolidChevronRightCircle } from "react-icons/bi";

const SeeAllButton = ({ text, link }) => {
  return (
    <Link to={link} className="flex items-center justify-center mt-16 ">
      <div className="group">
        <button className="flex items-center border  p-2 px-4 rounded-full border-gray-300 gap-4   transition-all group-hover:bg-pinky group-hover:text-white">
          <BiSolidChevronRightCircle className="text-pinky group-hover:text-white" />
          <span className="font-medium">{text}</span>
        </button>
      </div>
    </Link>
  );
};

export default SeeAllButton;
