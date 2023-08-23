import React from "react";

const TableItem = ({ customer }) => {
  return (
    <tr>
      <td className="py-3 px-4 text-xs sm:text-base">{customer.id}</td>
      <td className="py-3 px-4 text-xs sm:text-base">{customer.companyName}</td>
      <td className="py-3 px-4 text-xs sm:text-base">
        {customer.address?.street}
      </td>
      <td className="py-3 px-4 text-xs sm:text-base">
        {customer.address?.city}
      </td>
    </tr>
  );
};

export default TableItem;
