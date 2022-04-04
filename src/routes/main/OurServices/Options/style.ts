import { arrowAnimation } from "containers/Main/Footer/style";
import styled from "styled-components";

export const OptionsSec = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  .col-lg-6 {
    margin-bottom: 30px;
    display: flex;
    .icon {
      .icons {
        font-size: 5rem;
      }
    }
    .textBox{
        margin-left: 40px;
        margin-top: 10px;
        button {
        padding: 0;
        display: flex;
        align-items: center;
        .arrow {
          font-size: 30px;
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
      }
      button:hover i{
          animation: ${arrowAnimation} 1s forwards;
          margin-left: 8px;
      }
    }
  }
`;
