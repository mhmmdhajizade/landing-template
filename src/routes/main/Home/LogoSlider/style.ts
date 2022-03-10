import styled from "styled-components";
type IProps = {
  $width: string;
  $height: string;
};

export const LogoSliderSec = styled.div`
  margin-top: 70px;
  .container-fluid {
    background-color: white;
    padding-top: 20px;
    h2 {
      margin-bottom: 0;
      text-align: center;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    .swiper-wrapper {
      align-items: center;
    }
  }
  .swiper-scrollbar {
    display: none;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
`;
export const LogoImg = styled.img<Partial<IProps>>`
  display: block;
  ${(props) => (props.$width ? "width:" + props.$width : "width:70%")};
  ${(props) => (props.$height ? "height:" + props.$height : "height:70%")};
  margin: 0.5rem 0 1rem;
  object-fit: cover;
`;
