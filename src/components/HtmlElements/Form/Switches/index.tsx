import styled from "styled-components";
import { IThemeColor } from "typings/theme";
import { IFormSwitches } from "../types";

const FormCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 2em;
  height: 1em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  appearance: none;
  color-adjust: exact;

  &:not(:disabled) {
    background-color: ${(props) => props.theme.style.getColor("light")};
  }
  &:disabled {
    background-color: ${(props) => props.theme.style.getColor("grey")};
  }
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${(props) => props.theme.style.getColor("primary")}' /%3e%3c/svg%3e");
  border: 1px solid ${(props) => props.theme.style.getColor("grey", "darker")};
  ${(props) => {
    if (props.theme.lang.dictionary["theme.dir"] === "ltr") {
      return `
            background-position: left center;
            `;
    } else {
      return `
            background-position: right center;
            `;
    }
  }}
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
  &:checked {
    background-color: ${(props) => props.theme.style.getColor("primary")};
    border-color: ${(props) =>
    props.theme.style.getColor("primary", "darkest")};
    ${(props) => {
    if (props.theme.lang.dictionary["theme.dir"] === "ltr") {
      return `
            background-position: right center;
            `;
    } else {
      return `
            background-position: left center;
            `;
    }
  }}
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${(props) => props.theme.style.getColor("white")}' /%3e%3c/svg%3e");
  }
`;

interface ILabel {
  $color: IThemeColor["name"];
}
const Label = styled.label<ILabel>`
  display: inline-block;
  margin-bottom: 0;
  color: ${(props) => props.theme.style.getColor(props.$color)};
`;

const FormSwitches = ({
  name,
  value,
  disabled,
  isError,
  onChange,
  label,
  startLabel,
}: IFormSwitches) => {
  const _onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!onChange) return;
    const { name, checked } = event.target;
    onChange(name, checked);
  };

  return (
    <FormCheck>
      {startLabel && (
        <Label $color={isError ? "red" : "text"} className="me-1">
          {startLabel}
        </Label>
      )}
      <Input
        disabled={disabled}
        type="checkbox"
        name={name}
        checked={Boolean(value)}
        onChange={_onChange}
      />
      {label && (
        <Label className="ms-1" $color={isError ? "red" : "text"}>
          {label}
        </Label>
      )}
    </FormCheck>
  );
};

export default FormSwitches;
