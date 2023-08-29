import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-medium mb-2 uppercase">{title}</h3>
      {description && <p className="text-xl font-light mb-4">{description}</p>}
      <hr className="w-1/12 bg-red text-red-800 mb-10 mx-auto border-b-2 border-pinky" />
    </div>
  );
};

export default SectionHeader;
