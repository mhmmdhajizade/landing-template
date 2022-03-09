import styled from "styled-components";
import WaveShape from "assets/img/h5-img-5.svg";

export const AppSecLayout = styled.div`
  background-color: #f3f8fa;
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
  .mainRow {
    align-items: center;
    .leftCol {
      padding-right: 20px;
      text-align: center;
      
    }
    .rightCol {
      padding-left: 20px;
      
    }
  }
  .secondRow{
      .leftCol{
        text-align: left;
      }
      .rightCol{
        text-align: center;
      }
  }
  .lastRow {
    .rightCol {
      padding-bottom: 100px;
    }
  }
`;
