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
      background: radial-gradient(
        circle,
        hsla(182, 33%, 54%, 1) 60%,
        hsla(0, 0%, 100%, 1) 100%
      );
      background: -moz-radial-gradient(
        circle,
        hsla(182, 33%, 54%, 1) 60%,
        hsla(0, 0%, 100%, 1) 100%
      );
      background: -webkit-radial-gradient(
        circle,
        hsla(182, 33%, 54%, 1) 60%,
        hsla(0, 0%, 100%, 1) 100%
      );
      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#62ADB0", endColorstr="#FFFFFF", GradientType=1 );
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 10px;
      .btn {
        position: relative;
        left: -38px;
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
