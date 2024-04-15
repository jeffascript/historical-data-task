import { Dimensions } from "../types";

export function drawAxes(ctx: CanvasRenderingContext2D, dimensions: Dimensions) {
  const { margin, width, height } = dimensions;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(margin.left, margin.top);
  ctx.lineTo(margin.left, height - margin.bottom);
  ctx.lineTo(width - margin.right, height - margin.bottom);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw the time and power labels
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Time (hr:min:sec)", width / 2, height - margin.bottom / 6);

  ctx.translate(margin.left / 6, height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Power (kW & kVAr)", 0, 0);
  ctx.restore();
}
