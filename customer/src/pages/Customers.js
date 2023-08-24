import React, { useEffect, useState } from "react";

//Packages
import axios from "axios";

//Components
import CustomerTable from "../components/CustomerTable/CustomerTable";
import Loading from "../components/Loading";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [limit, setLimit] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCustomers() {
      const { data } = await axios(
        `https://northwind.vercel.app/api/customers?_limit=${limit}`
      );
      setCustomers(data);
      setLoading(false);
    }
    getCustomers();
  }, [limit]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <CustomerTable customers={customers} setLimit={setLimit} />
      )}
    </div>
  );
};

export default Customers;
