import React, { useState } from "react";
import TicketPrice from "./TicketPrice";
import Sss from "./Sss";
import Comments from "./Comments";
import Contact from "./Contact";

const EventDetailTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const cls = "border-b-2 pb-3 border-dashed border-pinky";
  return (
    <div className="min-h-[50vh] bg-white dark:bg-darkContent rounded-md">
      <ul className="flex items-center justify-around border-b-2 p-4 sm:p-8 font-bold text-gray-400 text-sm cursor-pointer">
        <li
          className={activeTab === 1 ? cls : ""}
          onClick={() => setActiveTab(1)}
        >
          BİLET & FİYAT
        </li>
        <li
          className={activeTab === 2 ? cls : ""}
          onClick={() => setActiveTab(2)}
        >
          SSS
        </li>
        <li
          className={activeTab === 3 ? cls : ""}
          onClick={() => setActiveTab(3)}
        >
          YORUMLAR
        </li>
        <li
          className={activeTab === 4 ? cls : ""}
          onClick={() => setActiveTab(4)}
        >
          İLETİŞİM
        </li>
      </ul>
      <div className=" p-8">
        {activeTab === 1 && <TicketPrice />}
        {activeTab === 2 && <Sss />}
        {activeTab === 3 && <Comments />}
        {activeTab === 4 && <Contact />}
      </div>
    </div>
  );
};

export default EventDetailTabs;
