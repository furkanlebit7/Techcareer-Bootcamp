import React from "react";

//Packages
import moment from "moment";

//Icons
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

//Locals
moment.locale("tr");

const EventFilter = ({
  isOpen,
  setIsOpen,
  eventTypes,
  setEventTypes,
  eventStatus,
  setEventStatus,
  date,
  setDate,
  isDisabled,
  setIsDisabled,
}) => {
  const checkType = (id) => {
    if (eventTypes.includes(id)) {
      setEventTypes(eventTypes.filter((type) => type !== id));
    } else {
      setEventTypes([...eventTypes, id]);
    }
  };

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
          isOpen
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-5 gap-5 "
            : "hidden"
        }
      >
        <div className="dark:bg-darkContent dark:border-gray-7000 bg-white border p-2 px-3 rounded-md flex items-center justify-between ">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={eventTypes.includes(1)}
              value="1"
              onChange={() => checkType(1)}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Concert
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={eventTypes.includes(2)}
              value="2"
              onChange={() => checkType(2)}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Theater
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={eventTypes.includes(3)}
              value="3"
              onChange={() => checkType(3)}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Exhibition
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={eventTypes.includes(4)}
              onChange={() => checkType(4)}
              value="4"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Festival
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              value="5"
              checked={eventTypes.includes(5)}
              onChange={() => checkType(5)}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Others
            </label>
          </div>
        </div>

        <div
          className="dark:bg-darkContent dark:border-gray-7000 bg-white border p-2 px-3 rounded-md flex items-center justify-between"
          onChange={(e) => setEventStatus(e.target.value)}
        >
          <div className="flex items-center">
            <input
              type="radio"
              checked={eventStatus === "all"}
              name="eventStatus"
              onClick={() => {
                setIsDisabled(false);
                setDate({
                  startDate: moment().add(-1, "y").format("YYYY-MM-DD"),
                  endDate: moment().add(1, "y").format("YYYY-MM-DD"),
                });
              }}
              value="all"
              readOnly
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              checked={eventStatus === "future"}
              name="eventStatus"
              value="future"
              onClick={() => {
                setIsDisabled(true);
                setDate({
                  startDate: moment().format("YYYY-MM-DD"),
                  endDate: moment().add(1, "y").format("YYYY-MM-DD"),
                });
              }}
              readOnly
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Future
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              checked={eventStatus === "past"}
              name="eventStatus"
              onClick={() => {
                setIsDisabled(true);
                setDate({
                  startDate: moment().add(-1, "y").format("YYYY-MM-DD"),
                  endDate: moment().format("YYYY-MM-DD"),
                });
              }}
              readOnly
              value="past"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Past
            </label>
          </div>
        </div>
        <div
          className={`${
            isDisabled ? "hidden" : "block"
          } dark:bg-darkContent bg-white dark:border-gray-700 col-start-1 col-end-2 md:col-start-1 md:col-end-3 xl:col-start-3 xl:col-end-4 border p-2 px-3 rounded-md flex items-center justify-between`}
        >
          <input
            type="date"
            onChange={(e) => setDate({ ...date, startDate: e.target.value })}
            value={date.startDate}
            disabled={isDisabled}
            className="p-0 bg-transparent  border-none focus:outline-none focus:ring-0"
          />
          <span className="mx-10 text-center flex-1">to</span>
          <input
            type="date"
            onChange={(e) => setDate({ ...date, endDate: e.target.value })}
            value={date.endDate}
            disabled={isDisabled}
            className="p-0 bg-transparent  border-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

export default EventFilter;
