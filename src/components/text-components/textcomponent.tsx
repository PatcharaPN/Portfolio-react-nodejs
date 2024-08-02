import "./textComponent.scss";

type Props = {
  variableType: string;
  variable: any;
  type?: string;
  value?: any;
  isObject: boolean;
};

const TextComponent = (props: Props) => {
  return (
    <div className="age-section">
      <span className="age">
        <span className="variable">{props.variableType}</span>
        <span>{props.variable} =</span>
        <span className="type">{props.type}</span>
        <span></span>
      </span>
      <span className="value">
        {props.value}
        {props.isObject ? <span>;</span> : null}
      </span>
    </div>
  );
};

export default TextComponent;
