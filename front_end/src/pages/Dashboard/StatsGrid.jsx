import { useState, useEffect } from "react";
import IncreasingNumber from "./IncreasingNumberEffect";

const StatsGrid = ({ statsGridText, statsValue, isLoading }) => {
  return (
    <div className="bg-white p-10 border border-black rounded-lg ">
      <h3 className="text-right text-[#079CEE] text-2xl font-bold">
        {statsGridText}
      </h3>
      {isLoading ? '' : <IncreasingNumber number={statsValue} />}
    </div>
  );
};


export default StatsGrid;
