import { StatsProps } from "@/types";
import React from "react";

const Stats: React.FC<StatsProps> = ({ totalCount }) => {
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">Total count: {totalCount}</div>
    </div>
  );
};

export default Stats;
