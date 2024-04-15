import { useEffect, useRef } from "react";
import { ChartViewerProps } from "../types";
import { drawChart } from "../containers/drawChart";

const ChartViewer: React.FC<ChartViewerProps> = ({
  historicalData,
  dimensions,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && historicalData && historicalData.length > 0) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        drawChart(ctx, historicalData, dimensions);
      }
    }
  }, [dimensions, historicalData]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        id="canvas"
      />
    </div>
  );
};

export default ChartViewer;
