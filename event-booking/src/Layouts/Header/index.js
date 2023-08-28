import React from "react";
import Navbar from "../../Components/Navbar";
import { Carousel } from "flowbite-react";
import { SlLocationPin } from "react-icons/sl";
import { HiChevronDoubleDown } from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-header-bg h-screen  bg-cover">
      <div className="bg-white-gradient dark:bg-dark-gradient h-screen text-black dark:text-white text-center">
        <div className="container mx-auto p-4 flex flex-col items-center h-full">
          <Navbar />
          <h1 className="text-4xl my-32 font-semibold font-mont text-center">
            Discover and Book the <br /> Hottest Events Worldwide
          </h1>

          <div className="flex-auto w-full">
            <div className="bg-gray-200 p-3 flex items-center justify-between w-2/3 mx-auto rounded-md text-black ">
              <div className="w-1/3 flex items-center">
                <SlLocationPin />
                <input
                  type="text"
                  placeholder="Zip Code or City"
                  className="w-full border-r border-0 bg-transparent focus:outline-none focus:border-o"
                />
              </div>
              <div className="w-1/3">
                <input
                  type="date"
                  className="w-full border-r border-0 bg-transparent focus:outline-none"
                />
              </div>
              <div className="w-1/3">
                <input type="date" className="w-full border-0 bg-transparent" />
              </div>
            </div>
          </div>

          <button className="text-2xl animate-bounce">
            <HiChevronDoubleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
