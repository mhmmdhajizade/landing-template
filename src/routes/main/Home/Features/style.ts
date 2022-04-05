import styled from "styled-components";

export const AppFeaturesSec = styled.div`
  background-color: ${props => props.theme.style.getColor("grey")};
  margin-top: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  .col-lg-4 {
    p {
      text-align: center;
      margin-bottom: 0;
    }
  }
  button{
      margin: 20px;
  }
`;
