import React, { useEffect, useState } from "react";

//Packages
import { Link } from "react-router-dom";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = ({ scrolled, setScrolled, white }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [toggle, setToggle] = useState(false);

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

  const handleTheme = () => {
    setTheme(theme ? "" : "dark");
  };
  return (
    <div
      className={`${
        scrolled
          ? "bg-white dark:bg-darkContent dark:text-white fixed top-0 w-screen mx-auto "
          : !white
          ? ""
          : !toggle
          ? "text-white"
          : ""
      } w-full p-4 transition-all z-50`}
    >
      <div className="lg:container mx-auto z-50">
        <div className="flex items-center justify-between w-full">
          <Link to={"/"} className="text-2xl">
            <span className="font-bold text-3xl">Event</span>ick
          </Link>
          <ul
            className={`absolute px-10 md:px-0 text-lg md:text-base bg-white dark:bg-darkMain md:dark:bg-transparent h-screen w-screen  md:h-auto md:w-auto md:bg-transparent md:relative md:items-center gap-3 font-medium  lg:gap-10  font-mont flex-col md:flex-row justify-evenly  md:flex ${
              toggle ? "flex top-0 left-0" : "hidden -top-full"
            }`}
            //Bir şey olursa transition-all silindi buradan
          >
            <li
              className="absolute top-6 right-4 inline-block md:hidden"
              onClick={() => setToggle(!toggle)}
            >
              <AiOutlineCloseCircle />
            </li>
            <li>
              <Link to={"/"}>Anasayfa</Link>
            </li>
            <li>
              <Link to={"/events"}>Etkinlikler</Link>
            </li>
            <li>
              <Link to={"/locations"}>Mekanlar</Link>
            </li>
          </ul>

          <div className="flex items-center gap-10">
            <button onClick={() => handleTheme()}>
              {theme ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
            <button className="md:hidden" onClick={() => setToggle(!toggle)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
