import { Button, Typography } from "components/HtmlElements";
import { CopyRight, FooterSec } from "./style";
import image from 'assets/img/logo-footer-img-1-300x56.png'
import { Input } from "components/HtmlElements/Form";

const FooterPanel = () => {
    return (
        <footer>
            <FooterSec className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <Typography $fontSize="2.5rem" $textColor={{ name: "white" }} className="slogan">
                                We do what we
                                love, and we love
                                what we do.
                            </Typography>
                            <img alt="" src={image} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Typography $textColor={{ name: "white" }} $fontSize="1.25rem" className="contactTitle">Office in New York</Typography>
                            <div className="contactDetails">
                                <div className="numberWidget">
                                    <Typography $textColor={{ name: "white" }}>01.</Typography>
                                </div>
                                <Typography $textColor={{ name: "white" }}>
                                    105 Lincoln Avenue<br />
                                    Bronx, NY 10454, USA
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
                        <div className="col-lg-4 col-12">
                            <Typography $textColor={{ name: "white" }} $fontSize="1.5rem">
                                Newsletter
                            </Typography>
                            <Typography $textColor={{ name: "white" }} $fontSize="1rem">
                                Submit to our newsletter & subscribe to
                                our newsletter to be on the up and up
                            </Typography>
                            <Input type="email" $textColor={{ name: "white" }} placeholder="Email" />
                            <Button $textColor={{ name: "white" }}>Subscribe<i className="icon-right-arrow-7351" /></Button>
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