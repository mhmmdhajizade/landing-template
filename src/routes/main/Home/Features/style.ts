import styled from "styled-components";

export const AppFeaturesSec = styled.div`
  background-color: ${props => props.theme.style.getColor("lightgreen")};
  margin-top: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  img {
    margin: 30px;
  }
  .col-lg-4 {
    p {
      text-align: left;
    }
  }
  button{
      margin: 30px;
  }
`;
