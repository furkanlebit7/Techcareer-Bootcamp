import React from "react";

const EventNotFound = ({ text }) => {
  return (
    <div className="flex items-center justify-center flex-col w-full text-center ">
      <img
        src={require("../assets/Images/empty.svg").default}
        alt="404"
        className="w-[100px] md:w-[200px]"
      />
      <h2 className="text-base md:text-xl mt-5">{text}</h2>
    </div>
  );
};

export default EventNotFound;
