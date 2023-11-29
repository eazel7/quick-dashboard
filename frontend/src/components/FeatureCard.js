import "./FeatureCard.css";
import { MeasurementRows } from "./MeasurementRows.js";

export function FeatureCard(props) {
  return (
    <div className="FeatureCard">
      <div className="Header">{props.featureName}</div>
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
