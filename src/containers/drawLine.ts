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
  let previousTimestamp = startTime; //points[0].timestamp;
  series.forEach((point, index) => {
    const currentTimestamp = new Date(point.timestamp).getTime();
    const timeDifference = currentTimestamp - previousTimestamp;
    const x = mapTimeToX(currentTimestamp, startTime, endTime, dimensions);

    //

    console.log(
      ...series.map((point) => point.value.activepower_kW),
      ...series.map((point) => point.value.reactivepower_kVAr)
    );
    const y = mapPowerToY(
      valueExtractor(point),
      Math.min(
        ...series.map((point) => point.value.activepower_kW),
        ...series.map((point) => point.value.reactivepower_kVAr)
      ),
      Math.max(
        ...series.map((point) => point.value.activepower_kW),
        ...series.map((point) => point.value.reactivepower_kVAr)
      ),
      dimensions
    );

    // const y = mapPowerToY(
    //   valueExtractor(point),
    //   Math.min(...series.map((point) => point.value.activepower_kW)),
    //   Math.max(...series.map((point) => point.value.reactivepower_kVAr)), dimensions
    // );

    // const y = mapPowerToY(i, minActivePower, maxReactivePower);
    // if (timeDifference <= 5000 * 1.5 || index === 0) {
    //   ctx.moveTo(x, y);
    // } else {
    //   ctx.lineTo(x, y);
    // }

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y); // Draw a line to the next point
    }

    previousTimestamp = currentTimestamp;
  });
  ctx.stroke();

  ctx.restore();
}
