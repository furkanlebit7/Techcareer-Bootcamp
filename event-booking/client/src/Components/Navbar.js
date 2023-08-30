import React, { useEffect, useState } from "react";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ scrolled, setScrolled }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);
  console.log(scrolled);

  const handleTheme = () => {
    setTheme(theme ? "" : "dark");
  };
  return (
    <div
      className={`${
        scrolled
          ? "bg-white dark:bg-darkContent dark:text-white fixed top-0 w-screen mx-auto "
          : ""
      } w-full p-4 transition-all z-50`}
    >
      <div className="container mx-auto z-50">
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
      </div>
    </div>
  );
};

export default Navbar;
