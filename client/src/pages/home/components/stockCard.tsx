import React from "react";

interface StockCardProps {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  flexBasis?: string;
}

export const StockCard: React.FC<StockCardProps> = (sp: StockCardProps) => {
  const isPositive = sp.change >= 0;

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg shadow-lg border-2 ${
        isPositive
          ? " text-green-800 border-green-900"
          : "text-red-800 border-red-900"
      } w-full`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="font-bold mr-4">{sp.symbol}</span>
        <div className="text-right">
          <div className="flex items-center">
            <span className="mr-2">{sp.price.toFixed(2)}</span>
            <div
              className={`${isPositive ? "text-green-600" : "text-red-600"}`}
            >
              {sp.change >= 0
                ? `+${sp.change.toFixed(2)}`
                : `${sp.change.toFixed(2)}`}
              (
              {sp.changePercent >= 0
                ? `+${sp.changePercent.toFixed(2)}`
                : `${sp.changePercent.toFixed(2)}`}
              %)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
