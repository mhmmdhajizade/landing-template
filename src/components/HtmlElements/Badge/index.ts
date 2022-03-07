import styled from "styled-components";
import { IThemeColor } from "typings/theme";

type IProps = {
    $textColor?: Partial<IThemeColor>,
    $bgColor?: Partial<IThemeColor>,
    $sizeRadius?: string,
    $sizePadding?: string,
    $sizeFont? : string,
    $border? : {
        color? : Partial<IThemeColor>
        size? : number,
        type? : "solid" | "dashed",
    }
}
const Badge = styled.div<IProps>`
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
    border-radius: ${props=> props.$sizeRadius? props.$sizeRadius : props.theme.style.sizing.radiusSm+"rem"};
    padding : ${props=> props.$sizePadding? props.$sizePadding : ".3rem .5rem"};
    font-size : ${props=> props.$sizeFont? props.$sizeFont : ".8rem"};
    ${props=> {
        if(props.$border){
            const color = props.theme.style.getColor(props.$border.color?.name,props.$border.color?.mood,props.$border.color?.opacity);
            return `border:${props.$border.size || 1} ${props.$border?.type || "solid"} ${color||"transparent"}`
        }
        return''
    }};
`

export default Badge;