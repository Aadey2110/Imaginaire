// Define a type for the data that will be passed to the graph
export interface DataType {
    date: string; // date in ISO string format (yyyy-mm-dd)
    value: number; // the numerical value
  }
  
  // Interface for Graph component props
  export interface GraphProps {
    data: DataType[]; // Array of data to be displayed
  }
  
  // Interface for CustomTooltip component props
  export interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[]; // Tooltip payload
    label?: string; // Tooltip label
  }
  