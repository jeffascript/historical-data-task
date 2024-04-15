import { Dimensions } from "../types";

export const mapTimeToX = (
  currentTimestamp: number,
  initialTimestamp: number,
  finalTimestamp: number,
  dimensions: Dimensions
) => {
  const { margin, width } = dimensions;

  const timeRatio = (currentTimestamp - initialTimestamp) / (finalTimestamp - initialTimestamp);

  // Compute the x-coordinate corresponding to the current timestamp
  return margin.left + timeRatio * (width - margin.left - margin.right);
};
