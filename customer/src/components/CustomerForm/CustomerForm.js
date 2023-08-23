import React, { useState } from "react";

//Packages
import axios from "axios";
import { toast } from "react-toastify";

const CustomerForm = () => {
  const [data, setData] = useState({
    companyName: "",
    contactName: "",
    contactTitle: "",
  });

  const handleSubmit = () => {
    if (data.companyName && data.contactName && data.contactTitle) {
      postData();
    } else {
      errorNotify();
    }
  };

  const postData = async () => {
    try {
      const result = await axios.post(
        "https://northwind.vercel.app/api/customers",
        data
      );
      result.status === 201 ? successNotify() : errorNotify();
      setData({ companyName: "", contactName: "", contactTitle: "" });
    } catch (e) {
      errorNotify(e);
    }
  };

  const errorNotify = () => toast.error("Please Fill All The Blanks");
  const successNotify = () => toast.success("Successful");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-darkMain">
      <div className="space-y-7">
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-400"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="mt-1 focus:outline-none p-2  px-5 focus:border-blue-300 block w-full shadow-sm sm:text-md border-gray-300 rounded-md dark:bg-darkBg dark:text-gray-300"
            value={data.companyName}
            onChange={(e) => setData({ ...data, companyName: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="contactName"
            className="block text-sm font-medium text-gray-400"
          >
            Contact Name
          </label>
          <input
            type="text"
            id="contactName"
            className="mt-1 focus:outline-none p-2  px-5 focus:border-blue-300 block w-full shadow-sm sm:text-md border-gray-300 rounded-md dark:bg-darkBg dark:text-gray-300"
            value={data.contactName}
            onChange={(e) => setData({ ...data, contactName: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="contactTitle"
            className="block text-sm font-medium text-gray-400"
          >
            Contact Title
          </label>
          <input
            type="text"
            id="contactTitle"
            className="mt-1 focus:outline-none p-2  px-5 focus:border-blue-300 block w-full shadow-sm sm:text-md border-gray-300 rounded-md dark:bg-darkBg dark:text-gray-300"
            value={data.contactTitle}
            onChange={(e) => setData({ ...data, contactTitle: e.target.value })}
            required
          />
        </div>
        <div>
          <button
            onClick={() => handleSubmit()}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
