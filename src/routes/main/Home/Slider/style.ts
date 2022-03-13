

import styled from "styled-components";
import waveBgDark from "assets/img/dark/wave-bg.svg";
import waveBgLight from "assets/img/light/wave-bg.svg";


export const Slider = styled.div`
background-color : ${props => props.theme.style.getColor("tradewind" )};
align-items: center;
width: 100%;
display: flex;
position : relative;
.container{
    padding-top: 50px;
    margin-bottom: 100px;
    .col-lg-7{
        text-align: center;
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
.col-lg-5{
    display: flex;
    align-items: center;
    p{
        margin-bottom: 0;
    }
    button{
        
        width: 70%;
        height: 45px;
    }
}
`
