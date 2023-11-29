export function GetWorstDeviation(values) {
  let worstOfAll;

  for (let measurementKey in values) {
    const measurement = values[measurementKey];

    const worst = [
      Math.abs(measurement.x.deviationTolerance),
      Math.abs(measurement.y.deviationTolerance),
      Math.abs(measurement.z.deviationTolerance),
      Math.abs(measurement.diameter.deviationTolerance),
    ].sort().reverse()[0];
    if (!worstOfAll) worstOfAll = worst;
    if (worstOfAll < worst) worstOfAll = worst;
  }

  return worstOfAll;
}
