import { Data, Dimensions } from "../types";
import { mapPowerToY } from "../utils/mapPowerToY";
import { mapTimeToX } from "../utils/mapTimeToX";

export function drawLine(
  ctx: CanvasRenderingContext2D,
  series: Data[],
  color: string,
  valueExtractor: (point: Data) => number,
  dimensions: Dimensions
) {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;

  const startTime = new Date(series[0].timestamp).getTime();
  const endTime = new Date(series[series.length - 1].timestamp).getTime();

  const activePowers = series.map((point) => point.value.activepower_kW);
  const reactivePowers = series.map((point) => point.value.reactivepower_kVAr);

  const powers = [...activePowers, ...reactivePowers];
  const maxPower = Math.max(...powers);
  const minPower = Math.min(...powers);

  series.forEach((point, index) => {
    const currentTimestamp = new Date(point.timestamp).getTime();

    const x = mapTimeToX(currentTimestamp, startTime, endTime, dimensions);

    const y = mapPowerToY(valueExtractor(point), minPower, maxPower, dimensions);

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y); // Draw a line to the next point
    }
  });
  ctx.stroke();

  ctx.restore();
}
