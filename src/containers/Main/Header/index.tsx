import { Button } from "components/HtmlElements";
import { Fragment } from "react";
import styled from "styled-components";
import logo from 'assets/img/logo-light-img-1-1.png'

const HeaderSec = styled.header`
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
const HeaderLay = styled.div`
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
const HeaderWrapepr = styled.div`
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

const LogoSec = styled.div`
    height: 100%;
    display: inline-flex;
    align-items: center;
`
const Logo = styled.img`
    height: 100%;
    width: 100%;
    padding : 30px;
`

const Menusec = styled.nav`
    display: flex;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    justify-content: center;

`
const Navbar = styled.ul`
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
const NavItems = styled.li`
    text-align:center;
    vertical-align: baseline;
    margin-right:2px!important;

`

const SignSec = styled.div`
    position: relative;
    margin-left: 0;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
`


const HeaderPanel = () => {
    return (
        <Fragment>
            <HeaderSec>
                <HeaderLay>
                    <HeaderWrapepr>
                        <LogoSec>
                            <Logo alt="" src={logo} />
                        </LogoSec>
                        <Menusec>
                            <Navbar>
                                <NavItems>
                                    <Button
                                        $textColor={{
                                            name: "white"
                                        }}
                                        $bgColor={{
                                            name: 'tradewind'
                                        }}
                                        $borderColor={{
                                            name: 'tradewind',
                                            opacity: 0
                                        }}
                                    >
                                        NavItem 1
                                    </Button>
                                </NavItems>
                                <NavItems>
                                    <Button
                                        $textColor={{
                                            name: "white"
                                        }}
                                        $bgColor={{
                                            name: 'tradewind'
                                        }}
                                        $borderColor={{
                                            name: 'tradewind',
                                            opacity: 0
                                        }}
                                    >
                                        NavItem 2
                                    </Button>
                                </NavItems>
                                <NavItems>
                                    <Button
                                        $textColor={{
                                            name: "white"
                                        }}
                                        $bgColor={{
                                            name: 'tradewind'
                                        }}
                                        $borderColor={{
                                            name: 'tradewind',
                                            opacity: 0
                                        }}>
                                        NavItem 3
                                    </Button>
                                </NavItems>
                            </Navbar>
                        </Menusec>
                        <SignSec>
                            <Button
                                $textColor={{
                                    name: "white"
                                }}
                                $bgColor={{
                                    name: 'tradewind'
                                }}
                                $borderColor={{
                                    name: 'tradewind',
                                    opacity: 0
                                }}>Sign in</Button>
                            <Button
                                $textColor={{
                                    name: "white"
                                }}
                                $bgColor={{
                                    name: 'tradewind'
                                }}
                                $borderColor={{
                                    name: 'tradewind',
                                    opacity: 0
                                }}
                            >Sign up</Button>
                        </SignSec>
                    </HeaderWrapepr>
                </HeaderLay>
            </HeaderSec>
        </Fragment>
    )
}

export default HeaderPanel;