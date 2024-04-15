import { Data } from "../types";

export function filterDataInHrs(series: Data[]) {
  const now = new Date();

  // Define a constant for the maximum age (24 hours in milliseconds)
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Filter data entries that are less than 24 hours old
  return series.filter((entry: Data) => {
    // Parse the timestamp from the entry
    const timestamp = new Date(entry.timestamp);

    // Calculate the difference between now and the timestamp
    const age = now.getTime() - timestamp.getTime();

    // Return true if the entry is less than 24 hours old, false otherwise
    return age < maxAge;
  });
}
