import { Data, Dimensions } from "../types";
import { drawAxes } from "./drawAxes";
import { drawAxeslabels } from "./drawAxesLabels";
import { drawLine } from "./drawLine";

export function drawChart(ctx: CanvasRenderingContext2D, data: Data[], dimensions: Dimensions) {
  const { width, height } = dimensions;

  ctx.clearRect(0, 0, width, height);
  drawAxes(ctx, dimensions);
  drawAxeslabels(ctx, data, 15, dimensions);

  drawLine(ctx, data, "blue", (point) => point.value.activepower_kW, dimensions);
  drawLine(ctx, data, "red", (point) => point.value.reactivepower_kVAr, dimensions);
}
