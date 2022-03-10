import styled from "styled-components"

export const HeaderSec = styled.header`
    background-color: rgba(255,255,255,0);
    border-bottom: 1px solid;
    border-color: #329ea1;
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: top;
    height: 101px;
    z-index: 100;
    box-sizing: border-box;

`
export const HeaderLay = styled.div`
    background-color : #62adb0;
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

`
export const HeaderWrapepr = styled.div`
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
`

export const LogoSec = styled.div`
    height: 100%;
    display: inline-flex;
    align-items: center;
`
export const Logo = styled.img`
    height: 100%;
    width: 100%;
    padding : 30px;
`

export const Menusec = styled.nav`
    display: flex;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    justify-content: center;

`
export const Navbar = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    margin: 0!important;
    padding: 0;
    list-style: none;
    vertical-align: baseline;
    justify-content: space-around;
`
export const NavItems = styled.li`
    display: flex;
    text-align:center;
    vertical-align: baseline;
    height: 100%;
    margin-right:2px!important;
    Button{
        &:hover{
            background-color: rgba(255,255,255,.2) !important;
        }
    }

`

export const SignSec = styled.div`
    position: relative;
    margin-left: 0;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    Button{
        height: 100%;
        &:hover{
            background-color: rgba(255,255,255,.2) !important;
        }
    }
`

