import styled from "styled-components";
import { IThemeColor } from "typings/theme";

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--height);
  z-index: -1;
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    margin: auto;
    border-radius: 50px;
  }
  &::before {
    width: 100%;
    height: 50%;
    background-color: ${(props) => props.theme.style.getColor("grey")};
  }
  &::after {
    transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    width: Clamp(0%, calc(var(--ca) * 1%), 100%);
    height: 50%;
  }
`;
export const Value = styled.div`
  position: absolute;
  top: calc(var(--height) + 2px);
  left: Clamp(0%, calc(var(--ca) * 1%) - (var(--height) / 2), 100%);
  z-index: -1;
  transform: translate(calc(-100% + var(--height)), 0);
  font-size: var(--fz);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  background-color: ${(props) => props.theme.style.getColor("grey")};
  padding: 5px;
  line-height: 1;
  border-radius: 50px;
`;
export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: Clamp(
    0%,
    calc(var(--ca) * 1%) - (var(--height) / 2),
    calc(100% - (var(--height)))
  );
  z-index: -1;
  width: var(--height);
  height: var(--height);
  border-radius: 50%;
  transition: left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
`;
interface IRangeSlider {
  $textColor?: Partial<IThemeColor>,
  $bgColor?: Partial<IThemeColor>,
  $isDisabled?: boolean,
  $min: number;
  $max: number;
  $step: number;
  $value: number;

}
export const RangeSlider = styled.div<IRangeSlider>`
  --height: 15px;
  --fz: 0.8rem;
  --fzActive: 1rem;
  --min: ${(props) => props.$min};
  --max: ${(props) => props.$max};
  --step: ${(props) => props.$step};
  --value: ${(props) => props.$value};
  --value-a: Clamp(var(--min), var(--value, 0), var(--max));
  --value-b: var(--value, 0);
  --completed-a: calc(
    (var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100
  );
  --completed-b: calc(
    (var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100
  );
  --ca: Min(var(--completed-a), var(--completed-b));
  --cb: Max(var(--completed-a), var(--completed-b));
  padding-bottom: 15px;
  position: relative;
  z-index: 1;
  &::before,
  &::after {
    content: "${(props) => props.$min}";
    position: absolute;
    top: calc(var(--height) + 5px);
    font-size: var(--fz);
    color: ${(props) => props.theme.style.getColor('txt')};
    z-index: -2;
  }
  &::before {
    content: "${(props) => props.$min}";
    left: 0;
  }
  &::after {
    content: "${(props) => props.$max}";
    right: 0;
  }

  input {
    width: 100%;
    height: var(--height);
    opacity: 0;
    cursor: pointer;
  }
  ${Circle},${Value}{
    color: ${(props) => props.$textColor ? props.theme.style.getColor(props.$textColor.name, props.$textColor.mood, props.$textColor.opacity) : props.theme.style.getColor('white')};
    background-color: ${(props) => props.$bgColor ? props.theme.style.getColor(props.$bgColor.name, props.$bgColor.mood, props.$bgColor.opacity) : props.theme.style.getColor('primary')};
  }
  ${Line} {
    &::after{
    background-color: ${(props) => props.$bgColor ? props.theme.style.getColor(props.$bgColor.name, props.$bgColor.mood, props.$bgColor.opacity) : props.theme.style.getColor('primary')};
    }
  }
  ${props => {
    if (props.$isDisabled) {
      return (`
        opacity: 0.6;
      `)
    } else {
      return (`
      &:hover {
        ${Value} {
          background-color: ${props.$bgColor ? props.theme.style.getColor(props.$bgColor.hover || props.$bgColor.name, props.$bgColor.mood, props.$bgColor.opacity) : props.theme.style.getColor('primary')};
          color: ${props.theme.style.getColor("white")};
          font-size: var(--fzActive);
        }
      }
      `)
    }
  }}
  
`;
