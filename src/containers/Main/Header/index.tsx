import { Button } from "components/HtmlElements";
import { Fragment, useEffect, useState } from "react";
import logoLight from 'assets/img/logo-light-img-1-1.png'
import logoDark from 'assets/img/logo-dark-img-1.png'
import { HeaderLay, HeaderSec, HeaderWrapepr, Logo, LogoSec, Menusec, Navbar, NavItems, SignSec } from "./style";
import { useTheme } from "styled-components";

export interface IHeaderProps {
    headerProps: {
        color: "black" | "white"
    }
}
const HeaderPanel = ({ headerProps }: IHeaderProps) => {
    var headerEl = document.getElementById('header')
    var headerLay = document.getElementById('headerLay')
    const scrollFn: () => void = () => {
        if (headerEl && headerLay) {
            if (window.pageYOffset > 120) {
                headerEl.classList.add("sticky");
                headerLay.style.backgroundColor = style.getColor("primary")
            } else {
                headerEl.classList.remove("sticky");
                headerLay.style.backgroundColor = ""
            }
        }
    }

    const { lang ,style } = useTheme()
    const dictionary = lang.dictionary

    useEffect(() => {
        window.onscroll = function () { scrollFn() }
    })


    return (
        <Fragment>
            <HeaderSec id="header">
                <HeaderLay id="headerLay" className="container-fluid" >
                    <HeaderWrapepr $btnTextColor={headerProps.color}>
                        <LogoSec className="col-lg-1">
                            <Logo alt="" src={headerProps.color === "black" ? logoDark : logoLight} />
                        </LogoSec>
                        <Menusec className="col-lg-9">
                            <Navbar>
                                <NavItems $btnTextColor={headerProps.color}>
                                    <Button
                                        $textColor={{
                                            name: headerProps.color
                                        }}
                                    >
                                        {dictionary.navitem1}
                                    </Button>
                                </NavItems>
                                <NavItems>
                                    <Button
                                        $textColor={{
                                            name: headerProps.color
                                        }}

                                    >
                                        {dictionary.navitem2}
                                    </Button>
                                </NavItems>
                                <NavItems>
                                    <Button
                                        $textColor={{
                                            name: headerProps.color
                                        }}
                                    >
                                        {dictionary.navitem3}
                                    </Button>
                                </NavItems>
                            </Navbar>
                        </Menusec>
                        <SignSec className="col-lg-2">
                            <Button
                                $textColor={{
                                    name: headerProps.color
                                }}
                            >
                                <i className="icon-a6b6b86303967e34e75d4e2d9f9c810c" />
                                {dictionary.signup}
                            </Button>
                            <Button
                                $textColor={{
                                    name: headerProps.color
                                }}

                            >
                                <i className="icon-login" />
                                {dictionary.signin}
                            </Button>
                        </SignSec>
                    </HeaderWrapepr>
                </HeaderLay>
            </HeaderSec>
        </Fragment>
    )
}

export default HeaderPanel;
