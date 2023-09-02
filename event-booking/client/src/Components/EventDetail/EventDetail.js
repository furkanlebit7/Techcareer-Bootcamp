import React from "react";
import { BiDetail } from "react-icons/bi";
import moment from "moment";
import Map from "./Map";
import { FaLocationArrow } from "react-icons/fa";

const EventDetail = ({ event }) => {
  return (
    <div className="bg-white dark:bg-darkContent p-6 rounded-md">
      <div className="flex items-center justify-between text-xl text-gray-600">
        <h3 className="font-medium font-poppins">ETKİNLİK DETAYLARI</h3>
        <BiDetail className="text-gray-400" />
      </div>
      <div className="py-8 ">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium ">Lokasyon</span>
            <span className="opacity-70 text-xs">
              {event.data.location.locationName}
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium ">Şehir</span>
            <span className="opacity-70 text-xs">
              {event.data.location.city}
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium ">Adres</span>
            <span className="opacity-70 text-xs">
              {event.data.location.address}
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium ">Başlama Tarihi:</span>
            <span className="opacity-70 text-xs">
              {moment(event.data.eventEndDate).format("LLL")}
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium ">Bitiş Tarihi:</span>
            <span className="opacity-70 text-xs">
              {moment(event.data.eventStartDate).format("LLL")}
            </span>
          </li>
          <li>
            <span className="text-sm font-medium w-full ">Map:</span>
            <Map location={event.data.location} />
          </li>
          <li className="text-center hover:bg-pinky rounded-md">
            <a
              href="https://www.google.com/maps"
              className="flex items-center justify-center rounded-md gap-3 font-semibold text-black hover:text-white  dark:text-white border  py-3"
            >
              <FaLocationArrow className="text-blue-800" />
              <span>YOL TARİFİ</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventDetail;
