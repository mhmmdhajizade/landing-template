import styled from "styled-components";

export const AwardsSec = styled.div`
    margin-top: 120px;
    margin-bottom: 120px;
  .picSec {
      display: flex;
      align-items: center;
    div{
        position: relative;
        right: 90px;
        display: flex;
        margin-right: 90px;
        align-items: center;
        padding-top: 20px;
    }
    .mainImg {
      width: 100%;
    }
  }
  .textSec{
      display: flex;
      align-items: center;
      .container{
          padding-left: 80px;
          .col-lg-3{
              margin-right: -18px;
          }
          button{
              padding:0;
              display: flex;
                  align-items: center;
              .arrow{
                  font-size: 34px;
                  display: flex;
                  align-items: center;
                  margin-left: 1rem;
              }
          }
      }
  }
`;
