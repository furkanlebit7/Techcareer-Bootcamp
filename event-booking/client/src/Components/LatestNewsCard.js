import React from "react";

//ICONS
import { BiImage } from "react-icons/bi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";

const LatestNewsCard = () => {
  return (
    <div className="bg-white dark:bg-darkContent dark:text-white text-black rounded-md backdrop-blur-md cursor-pointer border dark:border-gray-600 text-center group 2xl:w-1/5 xl:w-1/4  lg:w-1/3 md:w-2/5 sm:w-1/2 w-full">
      <div className="relative">
        <img
          src={require("../assets/Images/festival.jpg")}
          className="rounded-t-md w-full"
          alt="Event"
        />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-pinky rounded-full w-18 h-18 text-center text-xl flex items-center justify-center flex-col text-white group-hover:bg-indigo-700">
          <BiImage className="font-bold group-hover:hidden" />
          <HiOutlineArrowLongRight className="font-bold hidden group-hover:block" />
        </div>
      </div>
      <div>
        <div className="p-4 pt-16">
          <p className="font-semibold text-xl">Online Yoga Class</p>
          <p className="my-3 dark:text-gray-300 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            laudantium excepturi consequatur dolore officia quis ipsum quasi
            tempore porro ut?
          </p>
        </div>
        <div className="p-4 flex items-center justify-between transition-all border-t dark:border-gray-600 font-mont">
          <p className="flex items-center gap-2 text-sm ">
            <SlCalender className="text-pinky" /> May 15, 2017
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaRegCommentDots className="text-pinky" /> 0 Comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
