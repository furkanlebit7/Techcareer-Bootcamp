import React from "react";

//Components
import SectionHeader from "../../Components/SectionHeader";
import LatestNewsCard from "../../Components/LatestNewsCard";
import SeeAllButton from "../../Components/SeeAllButton";

const LatestNews = () => {
  return (
    <div className="my-32 xl:container mx-auto px-5 md:p-0">
      <SectionHeader
        title={"Latest news"}
        description={
          "You can choose to display Latest News about, Upcoming, Past Events here"
        }
      />
      <div className="flex items-center justify-center lg:gap-10 gap-3 flex-wrap">
        <LatestNewsCard />
        <LatestNewsCard />
        <LatestNewsCard />
        <LatestNewsCard />
      </div>
      <SeeAllButton text={"All News"} link={"/blogs"} />
    </div>
  );
};

export default LatestNews;
