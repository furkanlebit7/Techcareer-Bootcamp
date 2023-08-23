import React from "react";
import { useParams } from "react-router-dom";

const CustomerDetail = () => {
  let { customerId } = useParams();

  console.log(customerId);
  return <div>{customerId}</div>;
};

export default CustomerDetail;
