import { IFormRange } from "../types";
import { RangeSlider, Line, Circle, Value } from "./style";

const RangeCustom = ({
  name,
  value = 0,
  isError,
  disabled,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}: IFormRange) => {
  return (
    <RangeSlider
    $min={min}
    $max={max} 
    $step={step}
    $value={Number(value)}
    $isDisabled={disabled}
    $bgColor={{
      name : isError ? "red" : "primary"
    }}>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={Number(value)}
        onChange={onChange}
        disabled={disabled}
      />
      <Line />
      <Circle />
      <Value><span>{value}</span></Value>
    </RangeSlider>
  );
};

export default RangeCustom;
