import React, { useState } from "react";

//Components
import TableItem from "./TableItem";

//Icons
import { FaArrowsAltV } from "react-icons/fa";

const CustomerTable = ({ customers, setLimit }) => {
  const [isAscending, setIsAscending] = useState(true);

  const handleOrder = () => {
    setIsAscending((prevIsAscending) => !prevIsAscending);
  };

  const sortedCustomers = [...customers].sort((a, b) => {
    if (isAscending) {
      return a.companyName.localeCompare(b.companyName);
    } else {
      return b.companyName.localeCompare(a.companyName);
    }
  });

  return (
    <div>
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
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden dark:bg-darkBg">
        <thead className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm dark:bg-darkMain dark:text-white">
          <tr>
            <th className="py-3 px-4 font-semibold text-left">ID</th>
            <th className="py-3 px-4 font-semibold text-left">
              Company Name
              <button
                className="ml-2 text-sm text-gray-400"
                onClick={handleOrder}
              >
                <FaArrowsAltV />
              </button>
            </th>
            <th className="py-3 px-4 font-semibold text-left">Street</th>
            <th className="py-3 px-4 font-semibold text-left">City</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 dark:text-gray-200">
          {sortedCustomers.map((customer) => (
            <TableItem customer={customer} key={customer.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
