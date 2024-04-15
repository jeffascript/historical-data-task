import { Dimensions } from "../types";
export const mapPowerToY = (
  power: number,
  minPower: number,
  maxPower: number,
  dimensions: Dimensions
) => {
  const { margin, height } = dimensions;

  const normalizedPower = (power - minPower) / (maxPower - minPower);
  const verticalSpace = height - margin.bottom - margin.top; // vertical usable space
  const fromTop = normalizedPower * verticalSpace;

  return height - margin.bottom - fromTop;
};
