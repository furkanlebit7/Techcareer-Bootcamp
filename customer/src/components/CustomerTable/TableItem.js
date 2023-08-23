import React from "react";

const TableItem = ({ customer }) => {
  return (
    <tr>
      <td className="py-3 px-4">{customer.id}</td>
      <td className="py-3 px-4">{customer.companyName}</td>
      <td className="py-3 px-4">{customer.address?.street}</td>
      <td className="py-3 px-4">{customer.address?.city}</td>
    </tr>
  );
};

export default TableItem;
