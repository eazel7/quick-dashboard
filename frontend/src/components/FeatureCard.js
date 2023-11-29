import "./FeatureCard.css";
import { MeasurementRows } from "./MeasurementRows.js";
import { FeatureIcon } from "./FeatureIcon.js";
import { GetWorstDeviation } from "./GetWorstDeviation";

export function FeatureCard(props) {
  const worstDeviation = GetWorstDeviation(props.values);

  let headerClass;

  if (2 < worstDeviation) {
    headerClass = "Header Red";
  } else if (1 < worstDeviation) {
    headerClass = "Header Yellow";
  } else {
    headerClass = "Header Green";
  }

  return (
    <div className="FeatureCard">
      <div className={headerClass}>
        {props.featureName}
        <FeatureIcon deviation={worstDeviation}></FeatureIcon>
      </div>
      <table>
        <thead>
          <tr>
            <th>Control</th>
            <th>Dev</th>
            <th>Dev out</th>
            <th>Tol</th>
          </tr>
        </thead>
        <tbody>
          {props.values.map((value, index) => (
            <MeasurementRows key={index} value={value}></MeasurementRows>
          ))}
        </tbody>
      </table>
    </div>
  );
}
