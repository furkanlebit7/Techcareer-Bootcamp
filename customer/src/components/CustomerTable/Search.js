import React from "react";

const Search = ({ text, setText }) => {
  return (
    <div className="pb-5 w-full">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="w-full py-1 px-3 rounded-md focus:outline-blue-300"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
