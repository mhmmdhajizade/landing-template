import styled from "styled-components";
import { IThemeColor } from "typings/theme";

interface IProps {
    $textColor?: Partial<IThemeColor>,
    $bgColor?: Partial<IThemeColor>,
    $borderColor?: Partial<IThemeColor>,
    $isActive?: boolean,
    $sizing?: "sm" | "lg"
}
const Input = styled.input<IProps>`
display: block;
width: 100%;
${props => {
        if (props.$sizing === "lg") return `
    min-height: calc(1.5em + 1rem + 2px);
    padding: ${props.theme.style.sizing.input.paddingLg};
    font-size: ${props.theme.style.sizing.fontSizeLg};
    border-radius: ${props.theme.style.sizing.radiusLg}rem;
    `;
        else if (props.$sizing === "sm") return `
    min-height: calc(1.5em + 0.5rem + 2px);
    padding: ${props.theme.style.sizing.input.paddingSm};
    font-size: ${props.theme.style.sizing.fontSizeSm};
    border-radius: ${props.theme.style.sizing.radiusSm}rem;
    `;
        else return `
        padding : ${props.theme.style.sizing.input.padding};
        font-size: ${props.theme.style.sizing.fontSize};
        border-radius: ${props.theme.style.sizing.radius}rem;
    `;
    }};
font-weight: 400;
line-height: 1.5;
background-clip: padding-box;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
box-shadow : none !important;
border-width: 1px;
border-style: solid;

${props => {
        const text = props.$textColor?.name;
        const bg = props.$bgColor?.name;
        const hoverText = props.$textColor?.hover || text;
        const hoverBg = props.$bgColor?.hover || bg;
        const activeText = props.$textColor?.active || hoverText || text;
        const activeBg = props.$bgColor?.active || hoverBg || bg;
        const border = props.$borderColor || props.$bgColor || undefined;
        const hoverBorder = props.$borderColor?.hover || border?.name;
        const activeBorder = props.$borderColor?.active || hoverBorder;
        return `
        &:disabled{
            color : ${props.theme.style.getColor('txt','lighter')};
            background-color : ${props.theme.style.getColor('grey')};
            border-color : ${props.theme.style.getColor('grey', 'darker')};
        }
        &:not(:disabled){
            color : ${props.$textColor ? props.theme.style.getColor(text, props.$textColor.mood, props.$textColor.opacity) : props.theme.style.getColor('text')};
            background-color : ${props.$bgColor ? props.theme.style.getColor(bg, props.$bgColor.mood, props.$bgColor.opacity) : props.theme.style.getColor('light')};
            border-color : ${border ? props.theme.style.getColor(border.name, border.mood || "darker", border.opacity) : props.theme.style.getColor('light','darker')};
        }
        &:not(:disabled):hover{
            ${hoverText ? `color : ${props.theme.style.getColor(hoverText, "darker", props.$textColor?.opacity)};` : ''};
            ${hoverBg ? `background-color : ${props.theme.style.getColor(hoverBg, 'darker', 1)};` : ''}
            ${hoverBorder ? `border-color : ${props.theme.style.getColor(hoverBorder, "darker", border?.opacity)};` : ''};
        }
        ${props.$isActive && `
            ${activeText ? `
            color : ${props.theme.style.getColor(activeText, "darkest", props.$textColor?.opacity)};
        ` : ''};
        ${activeBg ? `
        background-color : ${props.theme.style.getColor(activeBg, 'darkest', 1)};
        `: ''}
        ${activeBorder ? `
        border-color : ${props.theme.style.getColor(activeBorder, "darkest", border?.opacity)};
    ` : ''};
        }`}
        &:not(:disabled):active,&:not(:disabled):focus,&.active{
            outline: 0;
            ${activeText ? `
                color : ${props.theme.style.getColor(activeText, "darkest", props.$textColor?.opacity)};
            ` : ''};
            ${activeBg ? `
            background-color : ${props.theme.style.getColor(activeBg, 'darkest', 1)};
            `: ''}
            ${activeBorder ? `
            border-color : ${props.theme.style.getColor(activeBorder, "darkest", border?.opacity)};
        ` : ''};
        }
        `;
    }}
`

export default Input;