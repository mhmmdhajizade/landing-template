import styled from "styled-components";

export const ContentSec = styled.div`

  .col-lg-6 {
    img {
      width: 80%;
    }
    .contactData {
      margin-top: 30px;
    }
  }
  .inf{
    padding-top: 15px;
  }
  .formSec {
    display: flex;
    align-items: baseline;
    .formTitle {
      margin-bottom: 20px;
    }
    .Inputs {
      width: 100%;
      border: none;
      border-bottom: 1px solid;
      border-radius: 0;
      height: 40px;
      margin-top: 25px;
      padding-left: 0;
      font-size: 1.2rem;
      outline: 0;
    }
    textarea {
      height: 130px !important;
    }
    button {
      padding: 0;
      display: flex;
      margin-top: 10px;
      align-items: center;
      .arrow {
        font-size: 34px;
        display: flex;
        align-items: center;
      }
    }
  }
`;
