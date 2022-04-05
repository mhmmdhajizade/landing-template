

import styled from "styled-components";
import waveBgDark from "assets/img/dark/wave-bg.svg";
import waveBgLight from "assets/img/light/wave-bg.svg";


export const Slider = styled.div`
background-color : ${props => props.theme.style.getColor("primary" )};
align-items: center;
width: 100%;
display: flex;
padding-top: 100px;
position : relative;
.container{
    padding-top: 50px;
    margin-bottom: 100px;
    .imgSec{
        text-align: center;
        img{
            @media(max-width: 420px){
                width:100%
            }
        }
    }
}
&:after{
    content :"";
    width : 100%;
    height : 100px;
    ${props => props.theme.style.name === "light" && `background-image: url(${waveBgLight});`}
    ${props => props.theme.style.name === "dark" && `background-image: url(${waveBgDark});`}
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
}
.textSec{
    display: flex;
    align-items: center;
    div{
        width: 100%;
    }
    .MainTitle{
        @media (min-width:1440px){
            padding-right: 255px;
        }
        
    }
    p{
        margin-bottom: 0;
    }
    button{
        
        width: 100%;
        height: 45px;
    }
}
`
