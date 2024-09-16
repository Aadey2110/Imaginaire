import React from "react";
import { Graph, DataType } from "./components/Graph";
import { subDays } from "date-fns";
import { useParams } from "react-router-dom";

export const StockDisplayPage: React.FC = () => {
  const { symbol } = useParams<{ symbol?: string }>();
  const data: DataType[] = [];
  for (let num = 180; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 100 * Math.random(),
    });
  }

  return (
    <div className="p-5 bg-black min-h-screen overflow-x-hidden">
      <h2>{symbol}</h2>
      <div className="m-10">
        <Graph data={data} />
      </div>
    </div>
  );
};
