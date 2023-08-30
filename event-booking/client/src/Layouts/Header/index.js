import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { SlLocationPin } from "react-icons/sl";
import { HiChevronDoubleDown } from "react-icons/hi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className="bg-header-bg h-screen  bg-cover">
      <div className="bg-white-gradient dark:bg-dark-gradient h-screen text-black dark:text-white text-center">
        <div className="flex flex-col items-center h-full">
          <Navbar scrolled={scrolled} setScrolled={setScrolled} />
          <h1
            className={`${
              scrolled ? "mt-50" : "mt-32"
            } text-4xl mb-32 font-semibold font-mont text-center`}
          >
            Discover and Book the <br /> Hottest Events Worldwide
          </h1>

          <div className="flex-auto w-full">
            <div className="bg-gray-200 p-3 flex items-center justify-between w-2/3 mx-auto rounded-md text-black ">
              <div className="w-1/3 flex items-center text-xl">
                <SlLocationPin />
                <input
                  type="text"
                  placeholder="Zip Code or City"
                  className="w-full border-r border-0 bg-transparent focus:outline-none focus:ring-0 text-xl"
                />
              </div>
              <div className="w-1/3">
                <input
                  type="date"
                  className="w-full border-r border-0 bg-transparent focus:outline-none focus:ring-0 text-xl"
                />
              </div>
              <div className="w-1/3">
                <input
                  type="date"
                  className="w-full border-0 bg-transparent focus:ring-0 text-xl"
                />
              </div>
              <button className=" p-2 px-3 bg-pinky rounded-lg text-white dark:text-black">
                Search
              </button>
            </div>
          </div>

          <button
            className="text-2xl animate-bounce mb-10 z-10"
            onClick={() => window.scrollTo(0, 950)}
          >
            <HiChevronDoubleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
