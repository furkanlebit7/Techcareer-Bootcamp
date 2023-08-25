import React from "react";

const Header = ({ setLimit }) => {
  return (
    <div className="flex items-center justify-between mb-4 dark:text-white">
      <h1 className="sm:text-xl text-base font-semibold ">Customer List</h1>
      <div className="relative">
        <select
          onChange={(e) => setLimit(e.target.value)}
          className="bg-white  border border-gray-300 dark:bg-darkMain rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
        >
          <option value="">All</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
