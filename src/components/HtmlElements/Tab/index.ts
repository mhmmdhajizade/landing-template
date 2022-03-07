
import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Button } from "components/HtmlElements"

type IPropsGroup = {
    justifyContent: CSSProperties['justifyContent']
}
export const GroupBtn = styled.div<Partial<IPropsGroup>>`
    display: flex;
    flex-wrap : wrap;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    ${Button} {
        color: ${props => props.theme.style.getColor('text')};
        position: relative;
        padding-bottom: 15px;
        font-size : 1.15rem;
        &:after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height : 2px;
            opacity: 0;
        }
        &.active {
            font-weight: bold;
            &:after{
                opacity: 1;
                background-color : ${props => props.theme.style.getColor('primary')};
            }
        }
    }
`


export const Content = styled.div`
    border-radius : ${props=> props.theme.style.sizing.radius}rem;
`