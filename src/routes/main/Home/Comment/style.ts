import styled from "styled-components";

export const CommentSec = styled.div`
  background-color: white;
  margin-top: 70px;
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
      .sliderSec {
        display: flex;
        align-items: baseline;
        .col-lg-2{
          text-align: center;
          padding-right: 0;
        }
        .commentText{
            margin-bottom: 50px;
        }
        .userDetail{
            margin-top: 20px;
        }
      }
    }
  }
`;
