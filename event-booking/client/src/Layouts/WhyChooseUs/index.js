import React from "react";
import WhyChooseCard from "../../Components/WhyChooseCard";
import SectionHeader from "../../Components/SectionHeader";

const WhyChooseUs = () => {
  return (
    <div className="bg bg-white dark:bg-darkContent  py-20 pb-28 px-5 lg:px-0">
      <SectionHeader
        title={"Why Choose Us"}
        description={"Reasions why you Choose Us"}
      />
      <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:w-2/3">
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
      </div>
    </div>
  );
};

export default WhyChooseUs;
