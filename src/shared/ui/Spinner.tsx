import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <AiOutlineLoading3Quarters className="text-white text-xl animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
