import React from "react";
import { useNavigate } from "react-router-dom";

interface StockCardProps {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  flexBasis?: string;
}

export const StockCard: React.FC<StockCardProps> = ({
  symbol,
  price,
  change,
  changePercent,
}: StockCardProps) => {
  const isPositive = change >= 0;
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg shadow-lg border-2 cursor-pointer ${
        isPositive
          ? " text-green-800 border-green-900"
          : "text-red-800 border-red-900"
      } w-full max-w-80`}
      onClick={() => navigate(`/stockDisplay/${symbol}`)}
    >
      <div className="flex items-center justify-between w-full text-xs sm:text-md">
        <span className="font-bold">{symbol}</span>
        <div className="text-center">
          <div className="flex gap-1 items-center text-wrap">
            <span className="">{price.toFixed(2)}</span>
            <div
              className={`${isPositive ? "text-green-600" : "text-red-600"}`}
            >
              {change >= 0 ? `+${change.toFixed(2)}` : `${change.toFixed(2)}`}(
              {changePercent >= 0
                ? `+${changePercent.toFixed(2)}`
                : `${changePercent.toFixed(2)}`}
              %)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
