import { arrowAnimation } from "containers/Main/Footer/style";
import styled from "styled-components";

export const CompanyPartsSec = styled.div`
  margin-top: 110px;
  .title {
    margin-bottom: 40px;
    line-height: 50px;
  }
  .parts {
    .even {
      padding-top: 50px;
    }
    .icons {
      font-size: 5rem;
      &:before {
        margin-left: 0;
      }
    }
    .descBox {
        padding-left: 0;
        padding-right: 50px;
      button {
        padding: 0;
        display: flex;
        align-items: center;
        .arrow {
          font-size: 30px;
          display: flex;
          align-items: center;
          padding-left: 10px;
          margin-left: 1rem;
        }
      }
      button:hover i{
          animation: ${arrowAnimation} 1s forwards;
          margin-left: 8px;
      }
    }
  }
`;

// button{
//     padding:0;
//     display: flex;
//         align-items: center;
//     .arrow{
//         font-size: 34px;
//         display: flex;
//         align-items: center;
//     }
// }
