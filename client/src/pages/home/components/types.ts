// Stock type definition
export interface Stock {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

// Props for StockCardSection component
export interface StockCardSectionProps {
  stocksList: Stock[];
  title?: string;
}
