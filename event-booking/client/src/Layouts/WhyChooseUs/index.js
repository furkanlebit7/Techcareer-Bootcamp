import React from "react";

//Components
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
        <WhyChooseCard
          title={"Comprehensive Event Coverage"}
          description={
            "We provide an extensive list of concerts, theater performances, festivals, and more, ensuring you never miss out on your favorite events."
          }
          index={1}
        />
        <WhyChooseCard
          title={"Easy Event Discovery"}
          description={
            "Discover events effortlessly with our user-friendly search and filter options. Find the perfect event based on your preferences in just a few clicks."
          }
          index={2}
        />
        <WhyChooseCard
          title={"Verified Event Information"}
          description={
            "Rest easy knowing that our event listings are accurate and up-to-date. We verify event details to give you the most reliable information."
          }
          index={3}
        />
        <WhyChooseCard
          title={"User-Focused Experience"}
          description={
            "We prioritize your needs. Create a personalized user profile, save your favorite events, and receive tailored event recommendations."
          }
          index={4}
        />
        <WhyChooseCard
          title={"Secure Ticket Booking"}
          description={
            "Your security matters to us. Book tickets securely through our platform, and trust that your transactions are protected."
          }
          index={5}
        />
        <WhyChooseCard
          title={"Mobile-Ready Convenience"}
          description={
            "Access our platform on the go. Our mobile-responsive design ensures you can find and book events from your smartphone or tablet."
          }
          index={6}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
