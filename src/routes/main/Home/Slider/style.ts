

import styled from "styled-components";
import waveBg from "assets/img/wave-bg.svg";


export const Slider = styled.div`
background-color : ${props => props.theme.style.getColor("tradewind")};
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
    background-image: url(${waveBg});
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
        margin-top: 10px;
    }
}
`
