import { Dimensions } from "../types";

export const mapTimeToX = (
  currentTimestamp: number,
  initialTimestamp: number,
  finalTimestamp: number,
  dimensions: Dimensions
) => {
  const { margin, width } = dimensions;

  // Calculate the relative distance of the current timestamp within the total time range
  const timeRatio = (currentTimestamp - initialTimestamp) / (finalTimestamp - initialTimestamp);

  // Compute the x-coordinate corresponding to the current timestamp
  // Incorporating the designated margins on both, left and right sides
  return margin.left + timeRatio * (width - margin.left - margin.right);
};
