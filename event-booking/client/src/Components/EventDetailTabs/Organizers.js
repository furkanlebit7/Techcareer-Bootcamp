import React, { useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import moment from "moment";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Organizers = ({ event }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  return (
    <div className="bg-white dark:bg-darkContent p-6 rounded-md">
      <div className="flex items-center justify-between text-xl text-gray-600">
        <h3 className="font-medium font-poppins">ORGANİZATÖR</h3>
        <BsFillPersonFill className="text-gray-400" />
      </div>
      <div className="py-8 ">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium ">Organizatör</span>
            <span className="opacity-70 text-xs">
              {user && user.name.first} {user && user.name.last}
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium mr-4">Email</span>
            <span className="opacity-70 text-xs">{user && user.email} </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium mr-4">Telefon</span>
            <span className="opacity-70 text-xs">{user && user.phone} </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium mr-4">Web Sitesi</span>
            <span className="opacity-70 text-xs">www.passo.com.tr</span>
          </li>
          <li className="flex  justify-between items-start">
            <span className="text-sm font-medium mr-4">Açıklama</span>
            <span className="opacity-70 text-xs text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              reiciendis odit neque similique maiores facere vel eveniet sequi
              esse porro!{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Organizers;
