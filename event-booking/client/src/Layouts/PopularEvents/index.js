import React from "react";

//Packages
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Components
import SectionHeader from "../../Components/SectionHeader";
import PopularEventCard from "../../Components/PopularEventCard";

//Redux
import { getEventTypes } from "../../Redux/Slices/EventSlice";

const PopularEvents = () => {
  const { data } = useSelector(getEventTypes);

  return (
    <div className="lg:container mx-auto my-32 px-4 sm:p-5 lg:p-0 ">
      <SectionHeader
        title={"Popular Events"}
        description={"Discover the most popular events in your city."}
      />
      <div className="grid grid-cols-4 grid-rows-2 gap-2 sm:gap-6 h-[calc(100vh-50vh)]">
        <Link
          to={"/events"}
          className="col-start-1 col-end-3 row-start-1 row-end-4"
        >
          <PopularEventCard type={"CONCERT"} count={data[0]?.events?.length} />
        </Link>
        <Link
          to={"/events"}
          className="col-start-3 col-end-5 row-start-1 row-end-2"
        >
          <PopularEventCard type={"FESTIVAL"} count={data[3]?.events?.length} />
        </Link>
        <Link
          to={"/events"}
          className="col-start-3 sm:col-end-4 col-end-5 row-start-2 row-end-4"
        >
          <PopularEventCard type={"THEATER"} count={data[1]?.events?.length} />
        </Link>
        <Link
          to={"/events"}
          className="col-start-4 col-end-5 row-start-2 row-end-4 hidden sm:inline-block"
        >
          <PopularEventCard
            type={"EXHIBITION"}
            count={data[2]?.events?.length}
          />
        </Link>
      </div>
    </div>
  );
};

export default PopularEvents;
