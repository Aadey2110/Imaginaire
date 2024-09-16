import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO } from "date-fns";
import { GraphProps, CustomTooltipProps, DataType } from "./types"; // Importing the custom types

// Utility function to round numbers to 2 decimal places
const roundToTwoDecimals = (num: number) => Math.round(num * 100) / 100;

// Function to round the data values to 2 decimal places
const roundDataValues = (data: GraphProps["data"]) => {
  return data.map((item) => ({
    ...item,
    value: roundToTwoDecimals(item.value),
  }));
};

// Function to calculate the range for Y-Axis with 25% padding
const calculateYAxisDomain = (data: GraphProps["data"]) => {
  const values = data.map((item) => item.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const range = maxValue - minValue;

  // Adding 25% padding to the min and max values
  const lowerBound = roundToTwoDecimals(minValue - range * 0.25);
  const upperBound = roundToTwoDecimals(maxValue + range * 0.25);

  return [lowerBound, upperBound];
};

// Function to generate evenly spaced ticks for Y-Axis
const generateYTicks = (min: number, max: number, count: number) => {
  const step = roundToTwoDecimals((max - min) / (count - 1));
  return Array.from({ length: count }, (_, index) =>
    roundToTwoDecimals(min + step * index)
  );
};

// Function to generate evenly spaced ticks for X-Axis
const generateXTicks = (data: GraphProps["data"], count: number) => {
  const step = Math.floor(data.length / (count - 1));
  return data.filter((_, index) => index % step === 0).map((item) => item.date);
};

// Function to determine the color of the graph based on the final value
const determineColor = (data: GraphProps["data"]) => {
  const initialValue = data[0].value;
  const finalValue = data[data.length - 1].value;

  if (finalValue > initialValue) return "#28a745"; // Green
  if (finalValue < initialValue) return "#dc3545"; // Red
  return "#6c757d"; // Grey
};

export function Graph({ data }: GraphProps) {
  const roundedData = roundDataValues(data); // Round the data first
  const [lowerBound, upperBound] = calculateYAxisDomain(roundedData); // Calculate the bounds using rounded data
  const yTicks = generateYTicks(lowerBound, upperBound, 8); // Generating 8 uniform ticks
  const xTicks = generateXTicks(roundedData, 8); // Generating 8 uniform ticks for X-axis

  // Determine the color based on data values
  const color = determineColor(roundedData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={roundedData}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.4} />
            <stop offset="75%" stopColor={color} stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          dataKey="value"
          stroke={color}
          fill="url(#color)"
          yAxisId="right"
        />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          ticks={xTicks} // Use the generated uniform ticks for X-axis
          tickFormatter={(str) => {
            const date = parseISO(str);
            return format(date, "MMM d");
          }}
          dx={12}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          ticks={yTicks} // Use the generated uniform ticks for Y-axis
          tickFormatter={(number) => `${number.toFixed(2)}`}
          yAxisId="right"
          orientation="right"
          domain={[lowerBound, upperBound]} // Set the calculated domain
          dx={15}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip bg-black p-3">
        <h4>{format(parseISO(label!), "eeee, d MMM, yyyy")}</h4>
        <p>{payload[0].value.toFixed(2)} INR</p>
      </div>
    );
  }
  return null;
}

export type { GraphProps, CustomTooltipProps, DataType };
