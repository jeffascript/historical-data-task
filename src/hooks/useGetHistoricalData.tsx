import { useEffect, useState } from "react";
import { Data } from "../types";

//   import { filterDataInHrs } from "../utils/filterDataInHrs";

export const useGetHistoricalData = (url: string) => {
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

        /** Ideally, To handle the filtering per 24 hrs, but will be stale since we are using the fake JSON data

        // const filteredData = filterDataInHrs(jsonData.series);

        // setData((state) => ({
        //   ...state,
        //   ...jsonData,
        //   series: filteredData || [],
        // }));
                    
        ***/

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);
  return data;
};
