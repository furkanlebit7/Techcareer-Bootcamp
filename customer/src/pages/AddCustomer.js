import React from "react";
import CustomerForm from "../components/CustomerForm/CustomerForm";

const AddCustomer = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 dark:text-white">
        <h1 className="text-xl font-semibold">Add New Customer</h1>
      </div>
      <div>
        <CustomerForm />
      </div>
    </div>
  );
};

export default AddCustomer;
