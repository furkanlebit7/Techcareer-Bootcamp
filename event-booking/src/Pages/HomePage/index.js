import React from "react";
import Header from "../../Layouts/Header";
import FeaturedEvents from "../../Layouts/FeaturedEvents";

const HomePage = () => {
  return (
    <div className="bg-whiteMain dark:bg-darkMain pb-96">
      <Header />
      <div className="container mx-auto my-32 px-44">
        <FeaturedEvents />
      </div>
    </div>
  );
};

export default HomePage;
