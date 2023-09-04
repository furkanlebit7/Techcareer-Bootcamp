import React from "react";

const WhyChooseCard = ({ title, description, index }) => {
  return (
    <div className="pl-6 pr-16 py-10 flex items-start gap-10 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all">
      <div className="p-2 px-3 text-white rounded-full bg-indigo-900">
        0{index}
      </div>
      <div>
        <p className="text-lg font-semibold uppercase mb-5">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
