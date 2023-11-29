import "./MeasurementRows.css";
import { Fragment } from "react";

export function MeasurementRows(props) {
  return (
    <Fragment>
      <tr>
        <td className="Label">X:</td>
        <td>{props.value.x.deviation}</td>
        <td>{props.value.x.deviationTolerance}</td>
        <td>x</td>
      </tr>
      <tr>
        <td className="Label">Y:</td>
        <td>{props.value.y.deviation}</td>
        <td>{props.value.y.deviationTolerance}</td>
        <td>x</td>
      </tr>
      <tr>
        <td className="Label">Z:</td>
        <td>{props.value.z.deviation}</td>
        <td>{props.value.z.deviationTolerance}</td>
        <td>x</td>
      </tr>
      <tr>
        <td className="Label">Diameter:</td>
        <td>{props.value.diameter.deviation}</td>
        <td>{props.value.diameter.deviationTolerance}</td>
        <td>x</td>
      </tr>
    </Fragment>
  );
}
