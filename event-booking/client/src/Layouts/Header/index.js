import React, { useState } from "react";

//Components
import Navbar from "../../Components/Navbar";

//Icons
import { HiChevronDoubleDown } from "react-icons/hi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className="bg-header-bg h-[60vh]  bg-cover">
      <div className="bg-white-gradient dark:bg-dark-gradient h-[61vh] text-black dark:text-white text-center">
        <div className="flex flex-col items-center h-full">
          <Navbar scrolled={scrolled} setScrolled={setScrolled} />
          <h1
            className={`${
              scrolled ? "mt-50" : "mt-32"
            } text-4xl mb-32 font-semibold font-mont text-center`}
          >
            Discover and Book the <br /> Hottest Events Worldwide
          </h1>

          {/* <div className="flex-auto w-full px-5 lg:px-0">
            <div className="bg-gray-200 p-3 flex flex-col md:flex-row items-center justify-between w-full lg:w-2/3 mx-auto rounded-md text-black ">
              <div className="w-full md:w-1/3 flex items-center text-lg md:text-xl pr-3">
                <SlLocationPin className="order-1 md:order-none" />
                <input
                  type="text"
                  placeholder="Zip Code or City"
                  className="w-full md:border-r  border-0 bg-transparent focus:outline-none focus:ring-0 text-base md:text-xl"
                />
              </div>
              <div className="w-full md:w-1/3">
                <input
                  type="date"
                  className="w-full md:border-r border-0 bg-transparent focus:outline-none focus:ring-0 text-base md:text-xl"
                />
              </div>
              <div className="w-full md:w-1/3">
                <input
                  type="date"
                  className="w-full border-0 bg-transparent focus:ring-0 text-base md:text-xl"
                />
              </div>
              <button className="p-1 px-2 md:p-2 md:px-3 bg-pinky rounded-lg text-white dark:text-black text-base w-full md:w-auto">
                Search
              </button>
            </div>
          </div> */}

          <button
            className="text-2xl animate-bounce mb-10 z-10"
            onClick={() => window.scrollTo(0, 600)}
          >
            <HiChevronDoubleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
