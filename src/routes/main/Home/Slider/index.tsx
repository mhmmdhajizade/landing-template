import { Button, Typography } from "components/HtmlElements";
import { Fragment } from "react";
import { Slider } from "./style";
import image from "assets/img/h5-rev-img-3.png"
import { useTheme } from "styled-components";



const HomeSlider = () => {
    const {lang} = useTheme()
    const dictionary = lang.dictionary
    return (
        <Fragment>
            <Slider as="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 imgSec">
                            <img alt="" src={image} />
                        </div>
                        <div className="col-lg-6 col-12 textSec">
                            <div>
                                <Typography
                                    $textColor={{ name: 'white' }}
                                    $fontSize="0.8rem"
                                    className="mb-0"
                                >
                                    {dictionary.sliderSmallTitle}
                                </Typography>
                                <Typography
                                    $textColor={{ name: 'white' }}
                                    $fontWeight={20}
                                    $fontSize="3rem"
                                    className="mb-5 MainTitle"
                                >
                                    {dictionary.sliderMainTitle}
                                </Typography >
                                <Button
                                    $bgColor={{ name: 'white' }}
                                    $textColor={{ name: 'black' }}
                                >
                                    {dictionary.sliderbutton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </Fragment>
    )
}


export default HomeSlider;