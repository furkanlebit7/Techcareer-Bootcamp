import React from "react";
import { SlLocationPin } from "react-icons/sl";

const HeaderSliderCard = () => {
  return (
    <div className="bg-white text-black rounded-md backdrop-blur-md cursor-pointer border">
      <div className="relative">
        <img
          src={require("../assets/Images/festival.jpg")}
          className="rounded-t-md w-full"
        />
        <div className="absolute -bottom-10 left-5 bg-pink-600 rounded-full w-20 h-20 text-center text-sm flex items-center justify-center flex-col text-white">
          <p className="font-semibold">SEP</p>
          <p>18-2024</p>
        </div>
      </div>
      <div>
        <div className="p-4 pt-16">
          <p className="font-semibold text-lg">Online Yoga Class</p>
          <p className="my-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mae...
          </p>
          <p className="flex items-center gap-3">
            <SlLocationPin />
            Manchester Airport
          </p>
        </div>
        <hr />
        <div className="p-4 flex items-center justify-between font-semibold hover:text-pink-500 transition-all">
          <p className="">Get Ticket</p>
          <p className="text-pink-500 ">Free</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSliderCard;
