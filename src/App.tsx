import { useEffect, useMemo, useRef, useState } from "react";
import { ChartViewerProps, Data } from "./types";

const ChartViewer: React.FC<ChartViewerProps> = ({
  historicalData,
  dimensions,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && historicalData && historicalData.length > 0) {
      console.log("RUN now");
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        console.log("RUN now !");
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

const useGetHistoricalData = (url: string) => {
  const [data, setData] = useState<{
    asset_id: string;
    series: Array<Data>;
  } | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);
  return data;
};

function App() {
  /**  Ideally, how the Data would be fetched from the API **
   *
   *  const start = "2024-04-16T09:15:28.120Z";
   *  const end = new Date(Date.now()).toISOString();
   *  const assetId = "dummy-bess";
   *  const url = `/api/historical-data?asset_id=${assetId}&start=${start}&end=${end}`;
   *  const data = useGetHistoricalData(url);
   * ***/

  const data = useGetHistoricalData("./src/data-dummy-bess.json");

  const dimensions = useMemo(
    () => ({
      width: 800,
      height: 550,
      margin: { top: 20, right: 50, bottom: 100, left: 100 },
    }),
    []
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ChartViewer historicalData={data!.series} dimensions={dimensions} />;
    </>
  );
}

export default App;
