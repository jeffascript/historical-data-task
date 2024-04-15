import { useMemo } from "react";

import ChartViewer from "./components/ChartViewer";
import { useGetHistoricalData } from "./hooks/useGetHistoricalData";
import { interpolateMissingData } from "./utils/interpolateMissingData";

function App() {
  // memoised since objects are by reference
  const dimensions = useMemo(
    () => ({
      width: 800,
      height: 550,
      margin: { top: 20, right: 50, bottom: 100, left: 100 },
    }),
    []
  );

  /**Ideally, this is how the Data would be fetched from the API **
   *
   *  const start = "2024-04-16T09:15:28.120Z";
   *  const end = new Date(Date.now()).toISOString();
   *  const assetId = "dummy-bess";
   *  const url = `/api/historical-data?asset_id=${assetId}&start=${start}&end=${end}`;
   *  const data = useGetHistoricalData(url);
   * ***/

  const data = useGetHistoricalData("./src/sampleData/dummy-bess.json");

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!data.series || data.series.length === 0) {
    return <p>No Data to show</p>;
  }

  // in-memory data splice
  interpolateMissingData(data.series, 5000); // > 5-second intervals lag handler

  return (
    <>
      <ChartViewer historicalData={data.series} dimensions={dimensions} />;
    </>
  );
}

export default App;
