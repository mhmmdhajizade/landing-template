import styled from "styled-components";
import { IHeaderProps } from ".";

type IProps = {
  $btnTextColor : "black" | "white",
}



export const HeaderSec = styled.header<Partial<IProps>>`
  background-color: rgba(255, 255, 255, 0);
  border-bottom: 1px solid;
  border-color: ${props => props.theme.style.getColor("grey" , "darker" , 0.5)};
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  vertical-align: top;
  height: 101px;
  box-sizing: border-box;
  z-index: 100;
`;
export const HeaderLay = styled.div`
  
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  z-index: 0;
`;
export const HeaderWrapepr = styled.div<Partial<IProps>>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  background: 0 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  z-index: 2;
  Button {
    position: relative;
    height: 100%;
    z-index: 1;
    &::after {
      content: "";
      ${props => props.$btnTextColor === "white" && `background: ${props.theme.style.getColor('light',"darker",.1)};`}
      ${props => props.$btnTextColor === "black" && `background: ${props.theme.style.getColor('dark',"darker",.1)};`}
      width: 0;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0;
      z-index: -1;
      transition: all .3s linear;
    }
    &:hover {
        &::after{
        opacity: 1;
        width: 100%;
      }
      /* background-color: rgba(255, 255, 255, 0.2) !important; */
    }
  }
`;

export const LogoSec = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
`;
export const Logo = styled.img`
  height: 100%;
  padding: 30px;
`;

export const Menusec = styled.nav`
  display: flex;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  justify-content: center;
  @media(max-width: 900px){
    display: none;
  }
`;
export const Navbar = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  margin: 0 !important;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
  justify-content: space-around;
`;
export const NavItems = styled.li<Partial<IProps>>`
  display: flex;
  text-align: center;
  vertical-align: baseline;
  height: 100%;
  margin-right: 2px !important;
  Button {
    position: relative;
    z-index: 1;
    &::after {
      content: "";
      ${props => props.$btnTextColor === "white" && `background: ${props.theme.style.getColor('light',"darker",.1)};`}
      ${props => props.$btnTextColor === "black" && `background: ${props.theme.style.getColor('dark',"darker",.1)};`}
      width: 0;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0;
      z-index: -1;
      transition: all .3s linear;
    }
    &:hover {
        &::after{
        opacity: 1;
        width: 100%;
      }
      /* background-color: rgba(255, 255, 255, 0.2) !important; */
    }
  }
`;

export const SignSec = styled.div`
  position: relative;
  margin-left: 0;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  i{
    margin-right: 5px;
  }
  /* Button {
    height: 100%;
  
    &:hover {
      background-color: rgba(255, 255, 255, 0.2) !important;
 
    }
  } */
  Button {
    @media (max-width: 487px) {
      font-size: 0.9rem ;
    }
  }
`;
