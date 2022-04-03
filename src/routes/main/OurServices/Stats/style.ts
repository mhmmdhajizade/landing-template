import styled from "styled-components";

export const StatsSec = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  
  .headerSec {
    text-align: center;
    margin-bottom: 50px;
  }
  .row {
    .col-lg-6 {
      display: flex;
      align-items: center;
    }
    .textSec {
      padding-right: 30px;
    }
    .progress {
      text-align: center;
    }
    .progressSec {
      position: relative;
      display: flex;
      align-items: center;
      height: 180px;
      width: 180px;
      border-radius: 100%;
      border: 5px solid ;
      border-color: ${props => props.theme.style.getColor("text")};
      .number {
        display: flex;
        align-items: center;
        text-align: center;
        width: 160px;
        height: 160px;
        padding: 0 0 0 41px;
        border-radius: 100%;
        border: 1px solid ;
        border-color: ${props => props.theme.style.getColor("text" , "lighter" , 0.5)};
      }
    }
  }
`;
