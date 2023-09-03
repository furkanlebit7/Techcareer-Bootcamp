import React from "react";

const EventSearch = ({ search, setSearch }) => {
  return (
    <div className="px-2">
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

export default EventSearch;
