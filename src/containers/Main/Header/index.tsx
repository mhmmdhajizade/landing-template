import { Button } from "components/HtmlElements";
import { Fragment } from "react";
import logoLight from 'assets/img/logo-light-img-1-1.png'
import logoDark from 'assets/img/logo-dark-img-1.png'
import { HeaderLay, HeaderSec, HeaderWrapepr, Logo, LogoSec, Menusec, Navbar, NavItems, SignSec } from "./style";
import { useTheme } from "styled-components";

export interface IHeaderProps {
    headerProps : {
        color : "black" | "white"
    }
}
const HeaderPanel = ({headerProps} : IHeaderProps) => {

    const {lang} = useTheme()
    const dictionary = lang.dictionary
    
    
    return (
        <Fragment>
            <HeaderSec>
                <HeaderLay className="container-fluid" >
                    <HeaderWrapepr >
                        <LogoSec>
                            <Logo alt="" src={headerProps.color === "black" ? logoDark  : logoLight} />
                        </LogoSec>
                        <Menusec>
                            <Navbar>
                                <NavItems>
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
                        <SignSec>
                            
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
                                <i className="icon-login"/>
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
