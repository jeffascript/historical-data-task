import { Data, Dimensions } from "../types";
import { mapPowerToY } from "../utils/mapPowerToY";
import { mapTimeToX } from "../utils/mapTimeToX";

export function drawAxeslabels(
  ctx: CanvasRenderingContext2D,
  data: Data[],
  unitsPerTick: number,
  dimensions: Dimensions
) {
  const { margin, height } = dimensions;

  const timestamps = data.map((point) => new Date(point.timestamp).getTime());
  const activePowers = data.map((point) => point.value.activepower_kW);
  const reactivePowers = data.map((point) => point.value.reactivepower_kVAr);

  const startTime = Math.min(...timestamps);
  const endTime = Math.max(...timestamps);

  const powers = [...activePowers, ...reactivePowers];
  const maxPower = Math.max(...powers);
  const minPower = Math.min(...powers);

  ctx.save();
  // Add x-axis labels
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.save();
  for (let i = startTime; i <= endTime; i += (endTime - startTime) / unitsPerTick) {
    const x = mapTimeToX(i, startTime, endTime, dimensions);
    ctx.save();
    ctx.translate(x, height - margin.bottom / 1.5);
    ctx.rotate(-Math.PI / 2);

    ctx.fillText(new Date(i).toISOString().split("T")[1].split(".")[0], 0, 0);
    ctx.restore();
  }
  ctx.restore();

  //  Add y-axis labels for active power

  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.save();
  for (let i = minPower; i <= maxPower; i += (maxPower - minPower) / unitsPerTick) {
    const y = mapPowerToY(i, minPower, maxPower, dimensions);
    ctx.fillText(i.toFixed(2), margin.left - 10, y);
  }

  ctx.restore();
}
