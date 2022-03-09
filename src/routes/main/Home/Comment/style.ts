import styled from "styled-components";

export const CommentSec = styled.div`
  background-color: white;
  .container {
    p {
      margin-bottom: 0;
    }
    .header{
        display: flex;
        justify-content: space-between;
        .sliderBtn{
            align-items: center;
            display: flex;
        }
        .arrows{
            &:before{
                font-size: 3rem;
                color: gray;
            }
        }
    }
    .swiper-scrollbar{
        display: none;
    }
    .swiper-slide {
      margin-top: 20px;
      margin-bottom: 20px;
      .container-fluid {
        display: flex;
        align-items: center;
        p{
            margin-left: 20px;
        }
        .userDetail{
            margin-top: 20px;
        }
      }
    }
  }
`;
