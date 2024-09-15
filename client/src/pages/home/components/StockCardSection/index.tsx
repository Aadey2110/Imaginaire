import React, { useRef } from "react";
import { StockCard } from "./components/stockCard";
import { useColumns } from "./hooks/useColumn";
import { StockCardSectionProps } from "../types";

export const StockCardSection: React.FC<StockCardSectionProps> = ({
  stocksList,
  title = "Stocks Overview",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the container element
  const columns = useColumns(containerRef); // Use custom hook to get the number of columns based on container width

  // Grid classes to adjust the layout based on the number of columns
  const gridColmnClassName = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
  ];

  return (
    <div className="" ref={containerRef}>
      <h2 className="text-white text-xl mb-2">{title}</h2>
      <div className="flex justify-center">
        <div className={`grid ${gridColmnClassName[columns - 1]} gap-3 w-full`}>
          {stocksList.map((stock, index) => (
            <div className="flex justify-center" key={index}>
              <StockCard
                symbol={stock.symbol}
                price={stock.price}
                change={stock.change}
                changePercent={stock.changePercent}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
