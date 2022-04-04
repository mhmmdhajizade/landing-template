import styled from "styled-components";
type IProps = {
  $width: string;
  $height: string;
};

export const LogoSliderSec = styled.div`
  margin-top: 70px;
  .container {
    h2 {
      text-align: left;
      margin-bottom: 40px;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
  .swiper-scrollbar {
    display: none;
  }

  .swiper-slide {
    text-align: center;
    height: 100%;
    font-size: 18px;
    ${(props) =>
      props.theme.style.name === "dark" &&
      `bacground-color: ${props.theme.style.getColor("dark")};`}
    ${(props) =>
      props.theme.style.name === "light" &&
      `bacground-color: ${props.theme.style.getColor("light")};`} 
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    border-color: rgb(219, 219, 219, 1);
    overflow: visible;
    &:hover{
      background-color: ${props => props.theme.style.getColor("dark" , "lightest" , 0.1)};
    }
    img {
      margin-bottom: 80px;
      margin-top: 80px;
    }
    div {
      text-align: left;
      padding-left: 40px;
      padding-bottom: 40px;
    }
  }
`;
export const LogoImg = styled.img<Partial<IProps>>`
  display: block;
  ${(props) => (props.$width ? "width:" + props.$width : "width:60%")};
  ${(props) => (props.$height ? "height:" + props.$height : "height:60%")};
  margin: 0.5rem 0 1rem;
  object-fit: cover;
`;
