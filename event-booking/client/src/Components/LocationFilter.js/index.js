import React from "react";
import moment from "moment";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
moment.locale("tr");

const LocationFilter = ({
  isOpen,
  setIsOpen,
  locations,
  city,
  setCity,
  setState,
}) => {
  const cities = [...new Set(locations.data.map((location) => location.city))];

  const stateHelper = locations.data
    .filter((location) => {
      if (city === "") {
        return true;
      } else {
        return location.city === city;
      }
    })
    .map((location) => location.state);

  const states = [...new Set(stateHelper.map((state) => state))];

  return (
    <div className="mb-10 mt-3 px-2">
      <div className="flex items-center justify-center">
        <button
          className="animate-bounce px-5"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
        </button>
      </div>
      <div
        className={
          isOpen ? "grid grid-cols-1 md:grid-cols-2 my-5 gap-5 " : "hidden"
        }
      >
        <div>
          <select
            onChange={(e) => {
              setCity(e.target.value);
              setState("");
            }}
            defaultValue={""}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5 dark:bg-darkContent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-600"
          >
            <option value="">Bütün Şehirler</option>
            {cities.map((city, id) => (
              <option key={id} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            defaultValue={""}
            onChange={(e) => setState(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5 dark:bg-darkContent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-600"
          >
            <option value="">Bütün Mekanlar</option>
            {states.map((loc, id) => (
              <option key={id} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LocationFilter;
