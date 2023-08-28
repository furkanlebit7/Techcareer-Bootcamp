import React from "react";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-2xl">
        <span className="font-bold text-3xl">Event</span>ick
      </p>
      <ul className="flex items-center gap-10 font-normal font-mont">
        <li>Schedule</li>
        <li>About</li>
        <li>Cinema</li>
        <li>Speakers</li>
        <li>Ticket</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
      <button className="sm:hidden">
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default Navbar;
