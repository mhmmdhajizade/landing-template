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
                        <div className="col-lg-7 col-12">
                            <img alt="" src={image} />
                        </div>
                        <div className="col-lg-5 col-12">
                            <div>
                                <Typography
                                    $textColor={{ name: 'white' }}
                                    $fontSize="0.8rem"
                                >
                                    {dictionary.sliderSmallTitle}
                                </Typography>
                                <Typography
                                    $textColor={{ name: 'white' }}
                                    $fontSize="3rem"
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