import { FeatureCard } from "./FeatureCard";
import './Part.css';

export function Part(props) {
  return (
    <div>
      <div className="Title">{props.partName}</div>
      
      {Object.keys(props.currentValues).map((key, index) => (
        <FeatureCard
          key={index}
          featureName={key}
          values={props.currentValues[key]}
        />
      ))}
    </div>
  );
}
