import { useMemo } from "react";

import ChartViewer from "./components/ChartViewer";
import { useGetHistoricalData } from "./hooks/useGetHistoricalData";

function App() {
  /**  Ideally, how the Data would be fetched from the API **
   *
   *  const start = "2024-04-16T09:15:28.120Z";
   *  const end = new Date(Date.now()).toISOString();
   *  const assetId = "dummy-bess";
   *  const url = `/api/historical-data?asset_id=${assetId}&start=${start}&end=${end}`;
   *  const data = useGetHistoricalData(url);
   * ***/

  const data = useGetHistoricalData("./src/sampleData/dummy-bess.json");

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
      <ChartViewer historicalData={data.series} dimensions={dimensions} />;
    </>
  );
}

export default App;
