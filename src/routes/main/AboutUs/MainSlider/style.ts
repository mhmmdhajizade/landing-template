import styled from "styled-components";
import BgImg from "assets/img/AboutUs/p2-img-1.jpg"

export const MainSliderSec = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${BgImg});
    position: relative;
    width: 100%;
    height: 600px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`