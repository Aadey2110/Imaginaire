import React from "react";
import { StockCard } from "./components/stockCard";

export const Home: React.FC = () => {
  // Create an array with 13 elements
  const stockCards: JSX.Element[] = Array.from({ length: 13 }, (_, i) => (
    <div key={i} className="float-left w-72 mx-3 my-3">
      <StockCard symbol="SYM1" price={100} change={0.5} changePercent={0.5} />
    </div>
  ));

  return (
    <div className="flex justify-center p-5">
      <div className="grid grid-cols-4 gap-4 max-w-full">
        {stockCards}
      </div>
    </div>
  );
};
