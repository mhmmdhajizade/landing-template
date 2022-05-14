import styled from "styled-components";
import WaveShapeDark from "assets/img/dark/h5-img-5.svg";
import WaveShapeLight from "assets/img/light/h5-img-5.svg";

export const AppSecLayout = styled.div`
  background-color: ${(props) => props.theme.style.getColor("grey")};
  margin-top: 70px;
  position: relative;
  padding-bottom: 100px;
  @media (max-width: 991px) {
    text-align: center !important;
  }
  .container {
    padding-top: 100px;
  }
  &:after {
    content: "";
    width: 100%;
    height: 140px;
    ${(props) =>
      props.theme.style.name === "light" &&
      `background-image: url(${WaveShapeLight});`}
    ${(props) =>
      props.theme.style.name === "dark" &&
      `background-image: url(${WaveShapeDark});`}
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .textBox {
    margin-left: 50px;
    @media (max-width: 1439px) {
      margin-left: 0;
    }
    padding-top: 0;
  }
  .mainRow {
    align-items: center;
  }
  .lastRow {
    margin-bottom: 100px;
  }
  .imgSec {
    text-align: center;
    img {
      @media (max-width: 420px) {
        width: 100%;
      }
    }
  }
`;
