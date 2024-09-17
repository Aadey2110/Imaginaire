import React, { useState, useEffect } from "react";
import { Graph, DataType } from "./components/Graph";
import { subDays } from "date-fns";
import { useParams } from "react-router-dom";

// Utility function to round numbers to 2 decimal places
const roundToTwoDecimals = (num: number) => Math.round(num * 100) / 100;

// Function to get min and max from the data
const getMinMaxValues = (data: DataType[]) => {
  const values = data.map((item) => item.value);
  const minValue = roundToTwoDecimals(Math.min(...values));
  const maxValue = roundToTwoDecimals(Math.max(...values));
  return { minValue, maxValue };
};

export const StockDisplayPage: React.FC = () => {
  const { symbol } = useParams<{ symbol?: string }>();
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  const data: DataType[] = [];
  for (let num = 180; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 100 * Math.random(),
    });
  }

  // Extract the min and max values from the data
  const { minValue, maxValue } = getMinMaxValues(data);

  // Get current date and time and set it in state
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    }, 1000); // Updates every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="p-5 bg-black min-h-screen overflow-x-hidden">
      <h2 className="text-white">{symbol}</h2>

      {/* Displaying Min, Max, and Current Date/Time */}
      <div className="text-white mb-5">
        <p>Min Value: {minValue} INR</p>
        <p>Max Value: {maxValue} INR</p>
        <p>Current Date & Time: {currentDateTime}</p>
      </div>

      {/* The Graph */}
      <div className="m-10">
        <Graph data={data} />
      </div>
    </div>
  );
};
