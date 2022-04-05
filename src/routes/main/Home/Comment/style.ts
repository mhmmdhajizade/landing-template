import { arrowAnimation } from "containers/Main/Footer/style";
import styled, { keyframes } from "styled-components";

export const CommentSec = styled.div`
  margin-top: 70px;
  .container {
    p {
      margin-bottom: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      .mainTitle{
        @media (max-width: 410px){
          font-size: 2rem;
        }
      }

      .sliderBtn {
        align-items: center;
        display: flex;
        ${(props) =>
          props.theme.lang.dictionary["theme.langLabel"] === "fa" &&
          "flex-direction: row-reverse;"}
      }
      .arrows {
        &:before {
          font-size: 3rem;
          color: gray;
          @media (max-width: 600px) {
            font-size: 1.5rem;
          }
        }
      }
    }
    .swiper-scrollbar {
      display: none;
    }
    .swiper-slide {
      margin-top: 20px;
      margin-bottom: 20px;
      .sliderSec {
        display: flex;
        align-items: baseline;
        .col-lg-2 {
          text-align: center;
          padding-right: 0;
        }
        .commentText {
          margin-bottom: 50px;
        }
      }
    }
  }
`;
