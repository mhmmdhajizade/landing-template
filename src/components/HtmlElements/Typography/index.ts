import { CSSProperties } from "react";
import styled from "styled-components";
import {IThemeColor} from "typings/theme"

type IProps = {
    $fontSize : string,
    $textColor : Partial<IThemeColor>,
    $fontWeight: string|number,
    $textTransform: CSSProperties['textTransform'],
}

const Typography = styled.p<Partial<IProps>>`
    ${props => props.$fontSize ? 'font-size:'+props.$fontSize:''};
    ${props => props.$textColor ? 'color:'+props.theme.style.getColor(props.$textColor.name,props.$textColor.mood,props.$textColor.opacity):''};
    ${props => props.$fontWeight ? 'font-weight:'+props.$fontWeight:''};
    ${props => props.$textTransform ? 'text-transform:'+props.$textTransform:''};
`

export default Typography;