

import styled from "styled-components";
import waveBg from "assets/img/wave-bg.svg";


export const Slider = styled.div`
background-color : ${props => props.theme.style.getColor("tradewind")};
min-height : 87vh;
align-items: center;
display: flex;
position : relative;
&:after{
    content :"";
    width : 100%;
    height : 100px;
    background-image: url(${waveBg});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
}
`
