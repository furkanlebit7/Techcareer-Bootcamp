import React from "react";
import WhyChooseCard from "../../Components/WhyChooseCard";
import SectionHeader from "../../Components/SectionHeader";

const WhyChooseUs = () => {
  return (
    <div className="bg bg-white dark:bg-darkContent  py-20 pb-28 ">
      <SectionHeader
        title={"Why Choose Us"}
        description={"Reasions why you Choose Us"}
      />
      <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-6 w-2/3">
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
