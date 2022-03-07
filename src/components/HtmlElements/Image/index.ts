
import { CSSProperties } from "react";
import styled from "styled-components";
import {IThemeColor} from "typings/theme"

type IProps = {
    $width : string,
    $height : string,
    $objectFit : CSSProperties['objectFit'],
    $radius : string,
    $bgColor : IThemeColor,
}

const Image = styled.div<Partial<IProps>>`
    ${props => props.$width ? 'width:'+props.$width:''};
    ${props => props.$height ? 'height:'+props.$height:''};
    ${props => props.$radius ? 'border-radius:'+props.$radius:''};
    ${props => props.$bgColor ? 'background-color:'+props.theme.style.getColor(props.$bgColor.name,props.$bgColor.mood,props.$bgColor.opacity):''};
    img{
        width : 100%;
        height: 100%;
        object-fit: ${props=> props.$objectFit ? props.$objectFit  : "contain"};
        overflow:hidden ;
    }
`

export default Image;