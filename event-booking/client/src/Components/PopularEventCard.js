import React from "react";

const PopularEventCard = ({ type, count }) => {
  let cl = "";
  if (type === "CONCERT") {
    cl = "bg-[url('/src/assets/Images/popular_concert.jpg')]";
  } else if (type === "THEATER") {
    cl = "bg-[url('/src/assets/Images/popular_theater.jpg')]";
  } else if (type === "EXHIBITION") {
    cl = "bg-[url('/src/assets/Images/sergi.jpg')]";
  } else if (type === "FESTIVAL") {
    cl = "bg-[url('/src/assets/Images/popular_festival.jpg')]";
  }
  return (
    <div
      className={`${cl} w-full h-full bg-center rounded-2xl bg-cover text-white transition-all group hover:bg-left-4 overflow-hidden`}
    >
      <div className="w-full h-full group-hover:bg-blight-gradient rounded-2xl relative">
        <p className="uppercase  absolute bottom-8 duration-500 left-1/2 -translate-x-1/2 font-bold text-lg group-hover:bottom-12 transition-all">
          {type}
        </p>
        <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 transition-all duration-1000 group-hover:bottom-6 ">
          {count} Events
        </p>
      </div>
    </div>
  );
};

export default PopularEventCard;
