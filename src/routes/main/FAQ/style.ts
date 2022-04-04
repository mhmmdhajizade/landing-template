import styled, { keyframes } from "styled-components";


export const FaqPageSec = styled.div`
  .mainSlide {
    padding-top: 180px;
    padding-bottom: 80px;
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
          .title{
            display: flex;
            align-items: center;
            .row{
              width: 100%;
            }
            i{
              font-size: 2rem;
            }
          }
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
        
        .category{
            p{
                letter-spacing: 3px;
            }
        }
      }
      .banner{
          img{
              margin-bottom: 60px;
                width: 100%;
          }
      }
    }
  }
`;
