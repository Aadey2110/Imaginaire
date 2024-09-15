import React from "react";

interface IndexProps {
  indexName: string;
  className: string;
}

const IndexButton: React.FC<IndexProps> = ({ indexName, className }) => (
  <button className={`px-4 py-2 rounded-lg shadow-lg border-2 ${className}`}>
    {indexName}
  </button>
);

export const IndexSection: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mb-4 gap-4 max-w-full">
      <IndexButton indexName="Sensex" className="text-green-800 border-green-900" />
      <IndexButton indexName="Nifty 50" className="text-green-800 border-green-900" />
      <IndexButton indexName="Nifty Bank" className="text-red-800 border-red-900" />
    </div>
  );
};