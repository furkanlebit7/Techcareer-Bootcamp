import React from "react";
import { VscLoading } from "react-icons/vsc";
const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <VscLoading className="animate-spin" />
    </div>
  );
};

export default Loading;
