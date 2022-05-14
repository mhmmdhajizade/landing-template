import styled from "styled-components";

export const MarketSec = styled.div`
  margin-top: 70px;
  text-align: left;
  @media (max-width: 991px) {
    text-align: center !important;
  }
  .container {
    padding-top: 20px;
    ${(props) =>
      props.theme.lang.dictionary["theme.langLabel"] === "fa" &&
      "text-align: right;"}

    .title {
      font-weight: bold;

      @media (max-width: 991px) {
        font-size: 42px;
      }
    }
    .market {
      text-align: justify;
      @media (max-width: 991px) {
        text-align: center !important;
      }
      img {
        margin: 10px;
        @media (max-width: 349px) {
          width: 100%;
      }
      }
    }
  }
`;
