import styled from "styled-components";
import { IThemeColor } from "typings/theme";

type IProps = {
    $textColor?: Partial<IThemeColor>,
    $bgColor?: Partial<IThemeColor>,
    $sizeRadius?: string,
    $sizePadding?: string,
}
const Card = styled.div<IProps>`
    ${props=>{
        let css = "";
        if(props.$textColor){
            css += "color : " + props.theme.style.getColor(props.$textColor.name,props.$textColor.mood,props.$textColor.opacity)+";";
        }
        if(props.$bgColor){
            css += "background-color : " + props.theme.style.getColor(props.$bgColor.name,props.$bgColor.mood,props.$bgColor.opacity)+";";
        }
        return css;
    }}
    border-radius: ${props=> props.$sizeRadius? props.$sizeRadius : props.theme.style.sizing.radius+"rem"};
    padding : ${props=> props.$sizePadding? props.$sizePadding : props.theme.style.sizing.padding+"rem"};
`

export default Card;