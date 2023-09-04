import React from "react";

//Icons
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full text-5xl ">
      <VscLoading className="animate-spin" />
    </div>
  );
};

export default Loading;
