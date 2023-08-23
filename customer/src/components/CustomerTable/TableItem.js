import React from "react";

//Packages
import { Link } from "react-router-dom";

const TableItem = ({ customer }) => {
  return (
    <tr>
      <td className="py-3 px-4">{customer.id}</td>
      <td className="py-3 px-4">{customer.companyName}</td>
      <td className="py-3 px-4">{customer.address.street}</td>
      <td className="py-3 px-4">{customer.address.city}</td>
      <td className="py-3 px-4">
        <Link to={"customer/5"}>
          <button className="border border-gray-300 rounded-md px-4 py-1 text-black dark:text-white hover:bg-gray-300 hover:dark:bg-darkMain">
            View
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default TableItem;
