import React, { useState } from "react";

//Components
import TableItem from "./TableItem";

//Icons
import { FaArrowsAltV } from "react-icons/fa";

const CustomerTable = ({ customers, text }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [sortBy, setSortBy] = useState("id");

  const handleOrder = (sort) => {
    setSortBy(sort);
    setIsAscending((prevIsAscending) => !prevIsAscending);
  };

  const sortedCustomers = [...customers].sort((a, b) => {
    if (isAscending) {
      if (sortBy.startsWith("address.")) {
        let sort = sortBy.split(".")[1];
        return a.address[sort].localeCompare(b.address[sort]);
      }
      return a[sortBy].localeCompare(b[sortBy]);
    } else {
      if (sortBy.startsWith("address.")) {
        let sort = sortBy.split(".")[1];
        return b.address[sort].localeCompare(a.address[sort]);
      }
      return b[sortBy].localeCompare(a[sortBy]);
    }
  });

  const filteredData = sortedCustomers?.filter((customer) => {
    const companyName = customer?.companyName?.toLowerCase() || "";
    const street = customer?.address?.street?.toLowerCase() || "";
    const city = customer?.address?.city?.toLowerCase() || "";

    return (
      companyName.includes(text.toLowerCase()) ||
      street.includes(text.toLowerCase()) ||
      city.includes(text.toLowerCase())
    );
  });

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden dark:bg-darkBg">
      <thead className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm dark:bg-darkMain dark:text-white">
        <tr>
          <th className="py-3 px-4 font-semibold text-left">
            ID
            <button
              className="ml-2 text-sm text-gray-400"
              onClick={() => handleOrder("id")}
            >
              <FaArrowsAltV />
            </button>
          </th>
          <th className="py-3 px-4 font-semibold text-left">
            Company Name
            <button
              className="ml-2 text-sm text-gray-400"
              onClick={() => handleOrder("companyName")}
            >
              <FaArrowsAltV />
            </button>
          </th>
          <th className="py-3 px-4 font-semibold text-left">
            Street
            <button
              className="ml-2 text-sm text-gray-400"
              onClick={() => handleOrder("address.street")}
            >
              <FaArrowsAltV />
            </button>
          </th>
          <th className="py-3 px-4 font-semibold text-left">
            City
            <button
              className="ml-2 text-sm text-gray-400"
              onClick={() => handleOrder("address.city")}
            >
              <FaArrowsAltV />
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-600 dark:text-gray-200">
        {filteredData.map((customer) => (
          <TableItem customer={customer} key={customer.id} />
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
