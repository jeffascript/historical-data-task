import { useEffect, useState } from "react";
import { Data } from "../types";

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
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);
  return data;
};
