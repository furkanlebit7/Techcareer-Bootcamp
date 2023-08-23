import React, { useEffect, useState } from "react";

//Packages
import { Link } from "react-router-dom";

//Icons
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill, BsGithub } from "react-icons/bs";

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
    <nav className="bg-white border-gray-200 dark:bg-darkMain">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center dark:text-white text-2xl gap-3 hover:text-green-500"
        >
          <AiTwotoneHome />
          <span className="self-center  font-semibold whitespace-nowrap">
            Techcareer
          </span>
        </Link>
        <ul className="dark:text-white flex items-center gap-10 font-medium">
          <Link to={`add`} className="hover:text-blue-500">
            Add Customer
          </Link>
          <li className="cursor-pointer text-lg animate-bounce">
            <a
              href="https://github.com/furkanlebit7"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li
            className="cursor-pointer hover:animate-spin text-lg"
            onClick={() => handleTheme()}
          >
            {theme ? <BsFillMoonFill /> : <BsFillSunFill />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
