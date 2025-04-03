import { CountProps } from "@/types";
import React from "react";

const Count: React.FC<CountProps> = ({ count }) => {
  return <div className="text-2xl font-semibold">{count}</div>;
};

export default Count;
