import React, { useState } from "react";

//Components
import TableItem from "./TableItem";

//Icons
import { FaArrowsAltV } from "react-icons/fa";

const CustomerTable = ({ customers, text }) => {
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
        {filteredData.map((customer) => (
          <TableItem customer={customer} key={customer.id} />
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
