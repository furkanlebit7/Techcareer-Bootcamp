import React, { useEffect, useState } from "react";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme ? "" : "dark");
  };
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
        <li className="mr-auto">Contact</li>
        <li>Login</li>
      </ul>

      <button onClick={() => handleTheme()}>
        {theme ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <button className="sm:hidden">
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default Navbar;
