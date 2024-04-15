import { Data } from "../types";

export function interpolateMissingData(series: Data[], expectedInterval: number) {
  for (let i = 1; i < series.length; i++) {
    const prevTimestamp = new Date(series[i - 1].timestamp);
    const currTimestamp = new Date(series[i].timestamp);
    const timeDiff = currTimestamp - prevTimestamp;

    // Check if there's a gap
    if (timeDiff !== expectedInterval) {
      const numMissing = Math.floor(timeDiff / expectedInterval) - 1;

      // Interpolation steps for both properties
      const activePowerDiff = series[i].value.activepower_kW - series[i - 1].value.activepower_kW;
      const reactivePowerDiff =
        series[i].value.reactivepower_kVAr - series[i - 1].value.reactivepower_kVAr;
      const activePowerStep = activePowerDiff / (numMissing + 1);
      const reactivePowerStep = reactivePowerDiff / (numMissing + 1);

      // Create and insert interpolated data points
      for (let j = 1; j <= numMissing; j++) {
        const newTimestamp = new Date(prevTimestamp.getTime() + j * expectedInterval);
        const interpolatedValue = {
          activepower_kW: series[i - 1].value.activepower_kW + j * activePowerStep,
          reactivepower_kVAr: series[i - 1].value.reactivepower_kVAr + j * reactivePowerStep,
        };

        series.splice(i, 0, {
          timestamp: newTimestamp.toISOString(),
          value: interpolatedValue,
        });
        i++; // Adjust the index since we inserted a new element
      }
    }
  }
}
