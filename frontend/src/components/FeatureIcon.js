import { BadIcon } from "./BadIcon";
import { WarningIcon } from "./WarningIcon";
import { GoodIcon } from "./GoodIcon";
import "./FeatureIcon.css";

export function FeatureIcon(props) {
  if (2 < props.deviation)
    return (
      <span className="FeatureIcon">
        <BadIcon  white={true}></BadIcon>
      </span>
    );
  else if (1 < props.deviation)
    return (
      <span className="FeatureIcon">
        <WarningIcon white={true}></WarningIcon>
      </span>
    );
  else
    return (
      <span className="FeatureIcon">
        <GoodIcon  white={true}></GoodIcon>
      </span>
    );
}
