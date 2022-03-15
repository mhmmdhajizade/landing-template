import styled, { keyframes } from "styled-components";


export const FaqPageSec = styled.div`
  .mainSlide {
    padding-top: 200px;
    padding-bottom: 100px;
    background-color: ${(props) => props.theme.style.getColor("grey")};
  }
  .contentSection {
    margin-top: 100px;
    .questionBox {
      cursor: pointer;
      .numbers {
        margin-bottom: 0;
      }
      .container-fluid {
        border-top: 1px solid;
        border-color: ${(props) =>
          props.theme.style.getColor("grey", "darkest")};
        .container {
          padding: 50px 45px;
        }
      }
    }
    .col-lg-3 {
      padding-left: 40px;
      .searchBox {
        margin-top: -14px;
      }
      .searchInp {
        display: flex;
        align-items: center;
        vertical-align: middle;
        border-bottom: 1px solid;
        border-color: ${(props) =>
          props.theme.style.getColor("grey", "darkest")};
        input {
          border: none;
          padding-top: 0;
        }
        button {
          padding-top: 0;
        }
      }
      .categories {
        padding-top: 50px;
        p {
          margin-bottom: 30px;
        }
        .category{
            p{
                letter-spacing: 3px;
            }
        }
      }
      .banner{
          img{
              margin-bottom: 60px;
              margin-top: 15px;
              width: 100%;
          }
      }
    }
  }
`;
