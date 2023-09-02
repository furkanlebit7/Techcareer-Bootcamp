import React from "react";

const EventFilter = ({ search, setSearch }) => {
  return (
    <div>
      <div>
        <input
          value={search}
          type="text"
          placeholder="Search event"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md dark:bg-darkContent"
        />
      </div>
    </div>
  );
};

export default EventFilter;
