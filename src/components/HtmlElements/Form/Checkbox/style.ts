import styled from "styled-components";
import { Button } from "components/HtmlElements";

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.style.getColor("grey")};
  border-radius: ${(props) => props.theme.style.sizing.radius + "rem"};

`;
export const Checkbox = styled(Button)`
  flex: 0 0 50%;
  position: relative;
  border-radius: 0;

  &:nth-child(2n){
    border-left: 0;
  }
  &:nth-child(1n + 3){
    border-top: 0;
  }
  &:first-child {
    border-top-left-radius: ${(props) => props.theme.style.sizing.radius + "rem"};
  }
  &:last-child {
    border-bottom-right-radius: ${(props) => props.theme.style.sizing.radius + "rem"};
  }
  &:nth-child(2) {
    border-top-right-radius: ${(props) => props.theme.style.sizing.radius + "rem"};
  }
  &:nth-last-child(2) {
    border-bottom-left-radius: ${(props) => props.theme.style.sizing.radius + "rem"};
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;
