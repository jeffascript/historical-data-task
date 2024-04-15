export type DataValue = {
  activepower_kW: number;
  reactivepower_kVAr: number;
};

export type Data = {
  timestamp: string;
  value: DataValue;
};

export type Dimensions = {
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
};

export type ChartViewerProps = {
  historicalData: Data[];
  dimensions: Dimensions;
};
