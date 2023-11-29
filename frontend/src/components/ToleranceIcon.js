import { BadIcon } from "./BadIcon";
import { WarningIcon } from "./WarningIcon";
import { GoodIcon } from "./GoodIcon";

export function ToleranceIcon(props) {
  const absDev = Math.abs(props.values.deviationTolerance);
  if (absDev > 2) return <BadIcon></BadIcon>;
  else if (absDev > 1) return <WarningIcon></WarningIcon>;
  else return <GoodIcon></GoodIcon>;
}
