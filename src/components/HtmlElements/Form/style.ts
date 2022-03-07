import styled from "styled-components";

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    height : 100%;
    label {
      color : ${props => props.theme.style.getColor('txt')};
      margin-bottom: 5px;
    }
`;
