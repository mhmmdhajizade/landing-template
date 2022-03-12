import { Button } from "components/HtmlElements";
import { Fragment } from "react";
import logo from 'assets/img/logo-light-img-1-1.png'
import { HeaderLay, HeaderSec, HeaderWrapepr, Logo, LogoSec, Menusec, Navbar, NavItems, SignSec } from "./style";
import { useTheme } from "styled-components";


const HeaderPanel = () => {

    const {lang} = useTheme()
    const dictionary = lang.dictionary
    
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
                                    >
                                        {dictionary.navitem1}
                                    </Button>
                                </NavItems>
                                <NavItems>
                                    <Button
                                        $textColor={{
                                            name: "white"
                                        }}
                                   
                                    >
                                        {dictionary.navitem2}
                                    </Button>
                                </NavItems>
                                <NavItems>
                                    <Button
                                        $textColor={{
                                            name: "white"
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
                                    name: "white"
                                }}
                             >
                                {dictionary.signup}
                            </Button>
                            <Button
                                $textColor={{
                                    name: "white"
                                }}
                             
                            >
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
