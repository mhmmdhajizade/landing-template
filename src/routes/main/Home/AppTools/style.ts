import styled from "styled-components";

export const AppToolsSec = styled.div`
  margin-top: 70px;
  .col-lg-6 {
    padding: 10px;
    .line {
      width: 3px;
      height: 450px;
      border-radius: 3px;
      /* background-color: #62adb0; */
      background: hsla(182, 33%, 54%, 1);
      background: linear-gradient(
        180deg,
        ${props => props.theme.style.getColor('grey','lighter',0)} 0%,
        ${props => props.theme.style.getColor('tradewind','darkest')} 50%,
        ${props => props.theme.style.getColor('grey','lighter',0)} 100%
      );
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 10px;
      .btn {
        position: relative;
        left: -38px;
        ${props => props.theme.lang.dictionary["theme.langLabel"] === "fa" && "left: 40px;"}
        width: 80px;
        height: 80px;
      }
    }
    .col-lg-10 {
      display: flex;
      flex-direction: column;
      padding: 0;
      justify-content: space-around;
      .textBox {
        margin-bottom: 10px;
      }
      p{
        margin-bottom: 0;
      }
    }
    .col-lg-2 {
      .icons {
        &:before {
          color: #62adb0;
          font-size: 34px;
          position: relative;
        }
      }
      .icon-desktop-mobile {
        &:before {
          left: -4px;
        }
      }
    }
  }
`;
