import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import LatestNewsCard from "../../Components/LatestNewsCard";
import SeeAllButton from "../../Components/SeeAllButton";

const LatestNews = () => {
  return (
    <div className="my-32 px-44 container mx-auto">
      <SectionHeader
        title={"Latest news"}
        description={
          "You can choose to display Latest News about, Upcoming, Past Events here"
        }
      />
      <div className="flex items-center justify-center gap-10">
        <LatestNewsCard />
        <LatestNewsCard />
        <LatestNewsCard />
      </div>
      <SeeAllButton text={"All News"} />
    </div>
  );
};

export default LatestNews;
