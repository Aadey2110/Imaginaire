import React from "react";
import { StockCardSection } from "./components/StockCardSection/index";
import { Stock } from "./components/types";
import Graph from "../../components/graph";

export const Home: React.FC = () => {
  const test: Stock[] = [
    {
      symbol: "SYM1",
      price: 100,
      change: 0.5,
      changePercent: 0.5,
    },
    {
      symbol: "SYM1",
      price: 100,
      change: 0.5,
      changePercent: 0.5,
    },
    {
      symbol: "SYM1",
      price: 100,
      change: 0.5,
      changePercent: 0.5,
    },
    {
      symbol: "SYM1",
      price: 100,
      change: 0.5,
      changePercent: 0.5,
    },
    {
      symbol: "SYM1",
      price: 100,
      change: 0.5,
      changePercent: 0.5,
    },
    {
      symbol: "SYM1",
      price: 100,
      change: 0.5,
      changePercent: 0.5,
    },
    {
      symbol: "SYM1",
      price: 100,
      change: 0.5,
      changePercent: 0.5,
    },
  ];

  return (
    <div className="p-5 bg-black min-h-screen overflow-x-hidden">
      {/* <IndexSection /> */}
      <StockCardSection stocksList={test} title="Recently Visited Stocks" />
      <Graph />
    </div>
  );
};
