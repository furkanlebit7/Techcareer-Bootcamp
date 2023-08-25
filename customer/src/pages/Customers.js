import React, { useEffect, useState } from "react";

//Packages
import axios from "axios";

//Components
import CustomerTable from "../components/CustomerTable/CustomerTable";
import Loading from "../components/Loading";
import Header from "../components/CustomerTable/Header";
import Search from "../components/CustomerTable/Search";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [limit, setLimit] = useState("");
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

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
      <Header setLimit={setLimit} />
      <Search text={text} setText={setText} />
      {loading ? (
        <Loading />
      ) : (
        <CustomerTable customers={customers} setLimit={setLimit} text={text} />
      )}
    </div>
  );
};

export default Customers;
