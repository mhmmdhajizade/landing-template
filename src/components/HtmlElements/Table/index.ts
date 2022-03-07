
import styled from "styled-components";
import {IThemeColor} from "typings/theme"

type IProps = {
    
}

const Table = styled.table<IProps>`
    width: 100%;
    th{
        font-size: 1rem;
        font-weight: normal;
        color: ${props=> props.theme.style.getColor('text')};
    }
    td,th{
            padding: 0.5rem;
        }
`

export default Table;