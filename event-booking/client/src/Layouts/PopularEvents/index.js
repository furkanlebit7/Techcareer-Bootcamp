import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import PopularEventCard from "../../Components/PopularEventCard";

const PopularEvents = () => {
  return (
    <div className="lg:container mx-auto my-32 p-5 lg:p-0 ">
      <SectionHeader
        title={"Most Popular Events"}
        description={"Browse Popular Events"}
      />
      <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[calc(100vh-50vh)]">
        <div className="col-start-1 col-end-3 row-start-1 row-end-4">
          <PopularEventCard type={"concert"} />
        </div>
        <div className="col-start-3 col-end-5 row-start-1 row-end-2">
          <PopularEventCard type={"festival"} />
        </div>
        <div className="col-start-3 sm:col-end-4 col-end-5 row-start-2 row-end-4">
          <PopularEventCard type={"theater"} />
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-4 hidden sm:inline-block">
          <PopularEventCard type={"cinema"} />
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
