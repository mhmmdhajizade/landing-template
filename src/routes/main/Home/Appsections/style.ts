import styled from "styled-components";
import WaveShape from "assets/img/h5-img-5.svg";

export const AppSecLayout = styled.div`
  background-color: #f3f8fa;
  margin-top: 70px;
  position: relative;
  padding-bottom: 100px;
  &:after {
    content: "";
    width: 100%;
    height: 140px;
    background-image: url(${WaveShape});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .textBox{
    margin-left: 50px;
  }
  .mainRow {
    align-items: center;
  }
  .lastRow {
    margin-bottom: 120px;
  }
  .imgSec {
    text-align: center;
  }
`;
