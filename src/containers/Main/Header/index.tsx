import { Button } from "components/HtmlElements";
import { Fragment } from "react";
import styled from "styled-components";
import logo from 'assets/img/logo-light-img-1-1.png'
import { HeaderLay, HeaderSec, HeaderWrapepr, Logo, LogoSec, Menusec, Navbar, NavItems, SignSec } from "./style";


const HeaderPanel = () => {
    return (
        <Fragment>
            <HeaderSec>
                <HeaderLay className="container-fluid">
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