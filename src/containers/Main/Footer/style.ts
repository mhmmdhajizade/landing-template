import styled from "styled-components";

export const FooterSec = styled.div`
  background-color: #1d1d1f;
  display: flex;
  align-items: center;
  margin-top: 70px;
  .container {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    .col-lg-4 {
      .Toggles{
        margin-left: 10px;
      }
      .bOpqnr {
        background-color: ${(props) => props.theme.style.getColor("white")};
        color: ${(props) => props.theme.style.getColor("black")};
        font-size: 20px;
        align-items: center;
        display: flex;
        div {
          background-color: ${(props) => props.theme.style.getColor("white")};
        }
      }
      input {
        background-color: #1d1d1f;
        border: none;
        border-bottom: 1px solid white;
        border-radius: 0;
      }
      .lastCol {
        button {
          background-color: #1d1d1f;
          margin-top: 20px;
          .icon-right-arrow-7351 {
            &:before {
              margin-left: 15px;
              font-size: 2rem;
              vertical-align: middle;
            }
          }
        }
      }
    }
    img {
      width: 40%;
    }
    .contactTitle {
      margin-top: 10px;
    }
    .slogan {
      margin-bottom: 50px;
    }
    .contactDetails {
      display: flex;
      align-items: center;
      .cCBZZp {
        margin: 0;
      }

      .numberWidget {
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #333335;
        margin: 10px;
        margin-left: 0;
        justify-content: center;
        align-items: center;
        p {
          margin: 0;
        }
      }
    }
  }
`;

export const CopyRight = styled.div`
  background-color: black;
  justify-content: center;
  padding: 20px;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    color: grey;
  }
`;
