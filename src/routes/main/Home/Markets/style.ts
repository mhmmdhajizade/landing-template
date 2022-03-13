import styled from "styled-components";

export const MarketSec = styled.div`
  margin-top: 70px;
  text-align: left;
  .container {
      padding-top: 20px;
      ${props => props.theme.lang.dictionary["theme.langLabel"] === "fa" && "text-align: right;"}
    
    .title {
      font-weight: bold;
    }
    .market {
      text-align: justify;
      img {
        margin: 10px;
        
      }
    }
  }
`;
