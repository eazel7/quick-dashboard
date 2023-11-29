import "./MeasurementRows.css";
import { Fragment } from "react";
import { ToleranceIcon } from "./ToleranceIcon";

export function MeasurementRows(props) {
  return (
    <Fragment>
      <tr>
        <td className="Label">X:</td>
        <td>{props.value.x.deviation}</td>
        <td>{props.value.x.deviationTolerance}</td>
        <td><ToleranceIcon values={props.value.x}></ToleranceIcon></td>
      </tr>
      <tr>
        <td className="Label">Y:</td>
        <td>{props.value.y.deviation}</td>
        <td>{props.value.y.deviationTolerance}</td>
        <td><ToleranceIcon values={props.value.y}></ToleranceIcon></td>
      </tr>
      <tr>
        <td className="Label">Z:</td>
        <td>{props.value.z.deviation}</td>
        <td>{props.value.z.deviationTolerance}</td>
        <td><ToleranceIcon values={props.value.z}></ToleranceIcon></td>
      </tr>
      <tr>
        <td className="Label">Diameter:</td>
        <td>{props.value.diameter.deviation}</td>
        <td>{props.value.diameter.deviationTolerance}</td>
        <td><ToleranceIcon values={props.value.diameter}></ToleranceIcon></td>
      </tr>
    </Fragment>
  );
}
