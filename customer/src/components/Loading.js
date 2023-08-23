import React from "react";

//Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-80">
      <AiOutlineLoading3Quarters className="animate-spin dark:text-white" />
    </div>
  );
};

export default Loading;
