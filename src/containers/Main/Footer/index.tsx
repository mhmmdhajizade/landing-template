import { Button, Typography } from "components/HtmlElements";
import { CopyRight, FooterSec } from "./style";
import image from 'assets/img/logo-footer-img-1-300x56.png'
import { Input } from "components/HtmlElements/Form";
import { useState } from "react";
import useTheme from "theme/use-theme";

const FooterPanel = () => {
    const [langValue, setLangValue] = useState("fa")
    const {lang , style} = useTheme()
    const handleLanguage = () =>{
        if(langValue === "en") {
            setLangValue("fa")
            lang.onChange("en-US")
        }
        else {
            setLangValue("en")
            lang.onChange("fa-IR")
        }
    }

    const dictionary = lang.dictionary

    return (
        <footer>
            <FooterSec className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <Typography $fontSize="2.5rem" $textColor={{ name: "white" }} className="slogan">
                                {dictionary.footerMainTitle}
                            </Typography>
                            <img alt="" src={image} />
                            
                            <Button 
                            className="Toggles" 
                            onClick={() => style.onChange("dark")} 
                            $textColor={{name: "white"}} 
                            $isCircle 
                            $bgColor={{ name: "lightgrey"}} 
                            $borderColor={{ name: "lightgrey"}}
                            >
                                <i className="icon-moon-24" />
                            </Button>
                            <Button 
                            className="Toggles" 
                            onClick={() => style.onChange("light")} 
                            $textColor={{name: "white"}} 
                            $isCircle 
                            $bgColor={{ name: "lightgrey"}} 
                            $borderColor={{ name: "lightgrey"}}
                            >
                                <i className="icon-sun-29" />
                            </Button>
                            <Button 
                            className="Toggles"
                            $textColor={{name: "white"}} 
                            $isCircle 
                            $bgColor={{ name: "lightgrey"}} 
                            $borderColor={{ name: "lightgrey"}}
                            onClick={() => handleLanguage() }
                            >
                                {langValue}
                            </Button>
                        </div>
                        <div className="col-lg-4 col-12">
                            <Typography $textColor={{ name: "white" }} $fontSize="1.25rem" className="contactTitle">{dictionary.footerContactTitle}</Typography>
                            <div className="contactDetails">
                                <div className="numberWidget">
                                    <Typography $textColor={{ name: "white" }}>01.</Typography>
                                </div>
                                <Typography $textColor={{ name: "white" }}>
                                    {dictionary.footerAddress}
                                </Typography>
                            </div>
                            <div className="contactDetails">
                                <div className="numberWidget">
                                    <Typography $textColor={{ name: "white" }}>02.</Typography>
                                </div>
                                <Typography $textColor={{ name: "white" }}>
                                    + (123) 124-567-8901<br />
                                    + (123) 124-667-8901
                                </Typography>
                            </div>
                            <div className="contactDetails">
                                <div className="numberWidget">
                                    <Typography $textColor={{ name: "white" }}>03.</Typography>
                                </div>
                                <Typography $textColor={{ name: "white" }}>
                                    webon@example.com<br />
                                    webon@example1.com
                                </Typography>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 lastCol">
                            <Typography $textColor={{ name: "white" }} $fontSize="1.5rem">
                                {dictionary.footerNewsTitle}
                            </Typography>
                            <Typography $textColor={{ name: "white" }} $fontSize="1rem">
                                {dictionary.footerNewsDesc}
                            </Typography>
                            <Input type="email" $textColor={{ name: "white" }} placeholder="Email" />
                            <Button $textColor={{ name: "white" }}>{dictionary.footerNewsButton}<i className="icon-right-arrow-7351" /></Button>
                        </div>
                    </div>
                </div>
            </FooterSec>
            <CopyRight className="container-fluid">
                <Typography>© 2021 Qode Interactive, All Rights Reserved</Typography>
            </CopyRight>
        </footer>
    )
}
export default FooterPanel;
