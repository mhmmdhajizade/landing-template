
import styled from "styled-components";

export const DropdownElm = styled.div`
    position: relative;
    display: inline-flex;
`

type DropdownMenu = {
    placement : "start" | "end",
}
export const DropdownMenu = styled.div<DropdownMenu>`
    position: absolute;
    top : 100%;
    ${props=> {
        if(props.theme.lang.dictionary['theme.dir'] === "ltr"){
            if(props.placement === "start"){
                return `
                    left: 0;
                `
            }else{
                return `
                    right: 0;
                `
            }
        }else{
            if(props.placement === "start"){
                return `
                    right: 0;
                `
            }else{
                return `
                    left: 0;
                `
            }
        }
    }}
    
    margin-top: 10px;
    min-width: 10rem;
    background-color: ${props=> props.theme.style.getColor('light')};
    border: 1px solid ${props=> props.theme.style.getColor('light','darker')};
    border-radius: ${props=> props.theme.style.sizing.radius}rem;
    z-index: 1;
`