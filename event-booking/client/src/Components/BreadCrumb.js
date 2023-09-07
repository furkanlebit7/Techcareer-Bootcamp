import React from "react";

//Icons
import { HiHome } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const BreadCrumb = ({ eventType, eventName }) => {
  return (
    <div className=" text-white flex items-center gap-2 text-sm md:text-base">
      <Link to="/" className="flex items-center gap-2">
        <HiHome />
        <p>Home</p>
      </Link>
      <BsChevronRight className="font-bold" />
      <Link to="/events" className="flex items-center gap-2">
        <p>{eventType}</p>
      </Link>
      <BsChevronRight className="font-bold" />
      <p>{eventName}</p>
    </div>
  );
};

export default BreadCrumb;
