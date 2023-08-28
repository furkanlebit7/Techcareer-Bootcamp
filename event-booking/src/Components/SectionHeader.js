import React from "react";

const SectionHeader = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-medium mb-2">FEATURED EVENTS</h3>
      <p className="text-xl font-light mb-4">
        You can choose to display Featured, Upcoming, Past Events here
      </p>
      <hr className="w-1/12 bg-red text-red-800 mb-10 mx-auto border-b-2 border-pinky" />
    </div>
  );
};

export default SectionHeader;
